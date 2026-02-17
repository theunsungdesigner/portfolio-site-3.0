import { lazy, Suspense } from "react";
import { Box, Container } from "@mui/material";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Hero/Hero";
import { surfaceTokens } from "./theme/theme";

/**
 * App — Root layout component with centralized Container.
 * Sections ordered: Hero → Case Studies → About → Tech Stack → Archive → Contact
 *
 * Performance strategy:
 * - Navbar + Hero: eagerly imported (above-fold, critical path)
 * - All below-fold sections: lazily imported via React.lazy
 *   This splits them into separate chunks, reducing the initial JS bundle
 *   and allowing the browser to render the hero faster.
 *
 * Dependency flow (no circular risk):
 *   App → components (one-way, lazy doesn't change this)
 *
 * TODO: Consider adding a "Process / Philosophy" section
 * TODO: Add scroll-to-top button for long page navigation
 */

/* ─── Below-fold sections — lazy loaded ─── */
const CaseStudies = lazy(
  () => import("./components/CaseStudies/CaseStudies"),
);
const About = lazy(() => import("./components/About/About"));
const TechStack = lazy(() => import("./components/TechStack/TechStack"));
const Archive = lazy(() => import("./components/Archive/Archive"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Layout/Footer"));

/**
 * Minimal Suspense fallback — invisible Box that prevents layout collapse
 * while lazy chunks load. Portfolio sections are small and load near-instantly
 * on any modern connection, so a visible spinner would be distracting.
 */
const SectionFallback = () => (
  <Box sx={{ minHeight: "100vh", width: "100%" }} aria-hidden="true" />
);

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: surfaceTokens.deepest,
        overflowX: "hidden",
      }}
    >
      {/* ─── Skip Navigation — visible on keyboard focus only ─── */}
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: "absolute",
          top: "-100%",
          left: 16,
          zIndex: 9999,
          backgroundColor: "primary.main",
          color: surfaceTokens.deepest,
          px: 2,
          py: 1,
          borderRadius: 1,
          fontWeight: 700,
          fontSize: "0.875rem",
          textDecoration: "none",
          "&:focus": {
            top: 16,
          },
        }}
      >
        Skip to main content
      </Box>

      <Navbar />

      {/**
       * Single centered Container — controls max-width and horizontal
       * padding for the entire page. Sections no longer need their
       * own Container wrappers.
       */}
      <Container
        id="main-content"
        component="main"
        maxWidth="lg"
        sx={{
          px: { xs: 2.5, sm: 3, md: 4 },
        }}
      >
        {/* Hero is eagerly loaded — it's the first thing users see */}
        <Hero />

        {/* Below-fold sections stream in as the user scrolls */}
        <Suspense fallback={<SectionFallback />}>
          <CaseStudies />
          <About />
          <TechStack />
          <Archive />
          <Contact />
        </Suspense>
      </Container>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </Box>
  );
}
