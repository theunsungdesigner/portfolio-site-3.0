import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import type { Variant } from "@mui/material/styles/createTypography";

/**
 * AnimatedText — Character-by-character typing animation with loop.
 *
 * Layout shift fix:
 * ALL lines are always in the DOM. Un-typed characters render with
 * `visibility: "hidden"` so they reserve space but remain invisible.
 * This means content below never jumps.
 *
 * Lifecycle per cycle:
 * 1. Cursor blinks twice (pre-typing)
 * 2. Characters type out one by one
 * 3. highlightText transitions from white → accent
 * 4. Cursor blinks twice (post-typing)
 * 5. Text clears and loop restarts
 *
 * `onComplete` fires once (first cycle) to unlock downstream content.
 */

type Phase = "pre-blink" | "typing" | "post-blink" | "clearing";

interface AnimatedTextProps {
  lines: string[];
  /** MUI Typography variant per line (e.g. ["h3", "h1", "h3"]) */
  lineVariants?: Variant[];
  /** Substring that transitions white → accent after typing completes */
  highlightText?: string;
  /** Line indices that always render in accent color */
  accentLines?: number[];
  /** Milliseconds per character */
  typingSpeed?: number;
  /** Pause in ms when hitting a line break */
  linePause?: number;
  /** Called once after the first full typing cycle */
  onComplete?: () => void;
}

const BLINK_CYCLE_MS = 1000;
const HOLD_AFTER_TYPING_MS = 3000;

export default function AnimatedText({
  lines,
  lineVariants,
  highlightText,
  accentLines = [],
  typingSpeed = 100,
  linePause = 400,
  onComplete,
}: AnimatedTextProps) {
  const fullText = useMemo(() => lines.join("\n"), [lines]);

  const [phase, setPhase] = useState<Phase>("pre-blink");
  const [charIndex, setCharIndex] = useState(0);
  const [showHighlight, setShowHighlight] = useState(false);
  const completeFired = useRef(false);

  /* ─── Phase: Pre-blink ─── */
  useEffect(() => {
    if (phase !== "pre-blink") return;
    setShowHighlight(false);
    setCharIndex(0);

    const timer = setTimeout(() => {
      setPhase("typing");
    }, BLINK_CYCLE_MS * 2);

    return () => clearTimeout(timer);
  }, [phase]);

  /* ─── Phase: Typing ─── */
  useEffect(() => {
    if (phase !== "typing") return;

    if (charIndex >= fullText.length) {
      setShowHighlight(true);
      if (!completeFired.current) {
        completeFired.current = true;
        onComplete?.();
      }
      setPhase("post-blink");
      return;
    }

    const nextChar = fullText[charIndex];
    const delay = nextChar === "\n" ? linePause : typingSpeed;

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [phase, charIndex, fullText, typingSpeed, linePause, onComplete]);

  /* ─── Phase: Post-blink ─── */
  useEffect(() => {
    if (phase !== "post-blink") return;

    const timer = setTimeout(() => {
      setPhase("clearing");
    }, BLINK_CYCLE_MS * 2 + HOLD_AFTER_TYPING_MS);

    return () => clearTimeout(timer);
  }, [phase]);

  /* ─── Phase: Clearing ─── */
  useEffect(() => {
    if (phase !== "clearing") return;
    setCharIndex(0);
    setShowHighlight(false);
    setPhase("pre-blink");
  }, [phase]);

  /* ─── Helpers ─── */

  /**
   * How many characters of a given line are currently visible.
   * Derived from the global charIndex position in fullText.
   */
  const getRevealedCount = useCallback(
    (lineIndex: number): number => {
      let charsBeforeLine = 0;
      for (let i = 0; i < lineIndex; i++) {
        charsBeforeLine += (lines[i]?.length ?? 0) + 1; // +1 for \n
      }

      const charsIntoLine = charIndex - charsBeforeLine;
      if (charsIntoLine <= 0) return 0;
      return Math.min(charsIntoLine, lines[lineIndex]?.length ?? 0);
    },
    [charIndex, lines],
  );

  /** Which line is the cursor currently on? */
  const getActiveLineIndex = useCallback((): number => {
    let offset = 0;
    for (let i = 0; i < lines.length; i++) {
      const lineEnd = offset + (lines[i]?.length ?? 0);
      if (charIndex <= lineEnd) return i;
      offset = lineEnd + 1; // +1 for \n
    }
    return lines.length - 1;
  }, [charIndex, lines]);

  const activeLineIndex = getActiveLineIndex();
  const showCursor = phase !== "clearing";

  /**
   * Renders a visible text string with optional highlight.
   * The highlight span is ALWAYS in the DOM (for CSS transition);
   * its color toggles between white and accent.
   */
  const renderStyledText = useCallback(
    (text: string) => {
      if (!highlightText || !text.includes(highlightText)) {
        return text;
      }

      const startIdx = text.indexOf(highlightText);
      const before = text.slice(0, startIdx);
      const highlighted = text.slice(startIdx, startIdx + highlightText.length);
      const after = text.slice(startIdx + highlightText.length);

      return (
        <>
          {before}
          <Box
            component="span"
            sx={{
              color: showHighlight ? "primary.main" : "text.primary",
              transition: "color 0.8s ease-in-out",
            }}
          >
            {highlighted}
          </Box>
          {after}
        </>
      );
    },
    [highlightText, showHighlight],
  );

  /** Reusable cursor */
  const cursor = (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        width: "3px",
        height: "0.85em",
        backgroundColor: "primary.main",
        ml: 0.5,
        verticalAlign: "baseline",
        animation: "cursorBlink 1s step-end infinite",
        "@keyframes cursorBlink": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      }}
    />
  );

  return (
    <Box>
      {lines.map((line, index) => {
        const variant = lineVariants?.[index] ?? "h3";
        const revealedCount = getRevealedCount(index);
        const visibleText = line.slice(0, revealedCount);
        const hiddenText = line.slice(revealedCount);
        const isAccentLine = accentLines.includes(index);
        const hasHighlight = highlightText && line.includes(highlightText);
        const isCursorLine = index === activeLineIndex;

        /** Base color: accent lines are always accent, others are white */
        const baseColor = isAccentLine ? "primary.main" : "text.primary";

        /**
         * Spacing: tighter between related lines, no trailing margin.
         * Greeting (h3) → 4px gap → Name (h1) → 4px gap → Role (h2)
         * The parent component handles spacing after the block.
         */
        const isLastLine = index === lines.length - 1;
        const lineSpacing = isLastLine ? 0 : 0.5;

        return (
          <Typography
            key={`line-${index}`}
            variant={variant}
            component={variant === "h1" ? "h1" : "p"}
            sx={{
              color: baseColor,
              mb: lineSpacing,
            }}
          >
            {/* Visible portion — styled with highlight if applicable */}
            {hasHighlight ? renderStyledText(visibleText) : visibleText}

            {/* Cursor — between visible and hidden text */}
            {showCursor && isCursorLine && cursor}

            {/* Hidden portion — reserves space, prevents layout shift */}
            {hiddenText.length > 0 && (
              <Box component="span" sx={{ visibility: "hidden" }}>
                {hiddenText}
              </Box>
            )}
          </Typography>
        );
      })}
    </Box>
  );
}
