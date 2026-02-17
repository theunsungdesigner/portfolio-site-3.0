import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/theme";
import App from "./App";

/**
 * Entry point — wraps the app with:
 * 1. React StrictMode (catches bugs early in dev)
 * 2. MUI ThemeProvider (applies our M3-inspired dark theme)
 * 3. CssBaseline (normalizes browser defaults + applies body styles)
 */

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Check index.html has a #root div.");
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
