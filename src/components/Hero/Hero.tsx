import { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { heroData } from "../../data/portfolio";
import { surfaceTokens } from "../../theme/theme";
import AnimatedText from "./AnimatedText";

/**
 * Hero Section — Animated intro with typing effect and synchronized portrait slide-in.
 * Desktop: Two-column layout (content left, portrait right)
 * Mobile: Single column, portrait hidden
 */

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.5, staggerChildren: 0.08 },
  },
};

export default function Hero() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  /** Flips to true when AnimatedText finishes all lines */
  const [typingDone, setTypingDone] = useState(false);

  return (
    <Box
      id="hero"
      component="section"
      sx={{
        minHeight: isDesktop ? "100vh" : "auto",
        display: "flex",
        alignItems: "center",
        pt: isDesktop ? 0 : 12,
        pb: isDesktop ? 0 : 6,
      }}
    >
      {/* Two-column on desktop, single column on mobile */}
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: isDesktop ? "7fr 5fr" : "1fr",
          gap: isDesktop ? 6 : 0,
          alignItems: "center",
        }}
      >
        {/* Content Column */}
        <Box>
          {/* Animated typing intro — handles its own rendering */}
          <AnimatedText
            lines={heroData.animatedLines}
            lineVariants={["h3", "h1", "h2"]}
            accentLines={[2]}
            typingSpeed={90}
            linePause={400}
            onComplete={() => setTypingDone(true)}
          />

          {/* Tagline + Stats — fade in after typing completes */}
          {typingDone && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeInVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    maxWidth: 540,
                    mt: 2,
                    mb: isDesktop ? 5 : 4,
                  }}
                >
                  {heroData.tagline}
                </Typography>
              </motion.div>

              {/* Stats — 2x2 on mobile, single row on desktop */}
              <motion.div variants={fadeInVariants}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: isDesktop
                      ? "repeat(4, auto)"
                      : "repeat(2, 1fr)",
                    gap: isDesktop ? 5 : 3,
                  }}
                >
                  {heroData.stats.map((stat) => (
                    <Box key={stat.label}>
                      <Typography
                        component="span"
                        sx={{
                          ...theme.typography.mono,
                          fontWeight: 700,
                          color: "primary.main",
                          display: "block",
                          fontSize: isDesktop ? "2.25rem" : "1.75rem",
                          lineHeight: 1.2,
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="caption"
                        component="span"
                        sx={{ display: "block", mt: 0.5 }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </motion.div>
          )}
        </Box>

        {/* Portrait — desktop only */}
        {isDesktop && typingDone && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/**
             * TODO: Replace with stylized portrait photo once asset is provided.
             * Design brief: "This is the ONE moment of visual richness."
             */}
            <Box
              sx={{
                width: "100%",
                aspectRatio: "3/4",
                maxWidth: 400,
                mx: "auto",
                borderRadius: 2,
                overflow: "hidden",
                border: `1px solid ${surfaceTokens.elevated}`,
              }}
            >
              <img
                src="/assets/images/gemini-me-outside.png"
                alt="Jonathon Wilson"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          </motion.div>
        )}
      </Box>
    </Box>
  );
}
