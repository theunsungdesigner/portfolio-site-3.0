import { createTheme } from "@mui/material/styles";

/**
 * Portfolio Dark Theme — Material Design 3 Inspired
 *
 * Design system follows M3 dark theme guidelines:
 * - Desaturated tones (no saturated colors vibrating against dark)
 * - Tonal elevation over borders/shadows
 * - No pure black (#000)
 * - Accent color used sparingly as signal, not decoration
 *
 * Color palette source: Portfolio Design Brief v3.0
 */

/* ─── Surface Elevation Tokens ─── */
const surfaces = {
  deepest: "#0F0F0F", // Page background
  container: "#1A1A1A", // Cards, content blocks
  elevated: "#242424", // Nav, modals, sticky elements
  highest: "#2E2E2E", // Hover states, active elements
} as const;

/* ─── Accent ─── */
const accent = {
  main: "#6BA3D4", // Sky blue — HSL(210, 55%, 63%)
  light: "#9DC3E4", // Lighter variant for hover states — 75% L
  dark: "#4A83B8", // Darker variant for pressed states — 51% L
} as const;

/* ─── Text Opacity System ─── */
const text = {
  high: "#FFFFFF", // Headlines, name, key stats — full white
  medium: "rgba(255, 255, 255, 0.87)", // Body text, descriptions
  low: "rgba(255, 255, 255, 0.38)", // Labels, metadata, secondary
} as const;

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: accent.main,
      light: accent.light,
      dark: accent.dark,
    },
    background: {
      default: surfaces.deepest,
      paper: surfaces.container,
    },
    text: {
      primary: text.high,
      secondary: text.medium,
      disabled: text.low,
    },
  },

  typography: {
    fontFamily: "'Space Grotesk', sans-serif",

    h1: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      fontSize: "clamp(2.5rem, 5vw, 4rem)",
      lineHeight: 1.1,
      color: text.high,
    },
    h2: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
      fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
      lineHeight: 1.2,
      color: text.high,
    },
    h3: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
      fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
      lineHeight: 1.3,
      color: text.high,
    },
    h4: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.4,
      color: text.high,
    },
    body1: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: "1rem",
      lineHeight: 1.7,
      color: text.medium,
    },
    body2: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: "0.875rem",
      lineHeight: 1.6,
      color: text.medium,
    },
    /* Space Mono for code/terminal/metadata contexts */
    caption: {
      fontFamily: "'Space Mono', monospace",
      fontSize: "0.75rem",
      lineHeight: 1.5,
      color: text.low,
    },
    overline: {
      fontFamily: "'Space Mono', monospace",
      fontSize: "0.75rem",
      fontWeight: 700,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: accent.main,
    },
    button: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: surfaces.deepest,
          scrollBehavior: "smooth",
          overflowX: "hidden",
        },
        /* Scrollbar styling for dark theme */
        "::-webkit-scrollbar": {
          width: "8px",
        },
        "::-webkit-scrollbar-track": {
          background: surfaces.deepest,
        },
        "::-webkit-scrollbar-thumb": {
          background: surfaces.highest,
          borderRadius: "4px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: surfaces.container,
          backgroundImage: "none", // Remove MUI's default gradient overlay
          border: `1px solid ${surfaces.elevated}`,
          transition: "background-color 0.2s ease, border-color 0.2s ease",
          "&:hover": {
            backgroundColor: surfaces.elevated,
            borderColor: surfaces.highest,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: surfaces.elevated,
          backgroundImage: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.75rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          padding: "10px 24px",
        },
      },
    },
  },
});

/**
 * Export surface tokens for direct use in components
 * that need tonal elevation beyond what MUI theme provides.
 */
export const surfaceTokens = surfaces;

export default theme;
