import { Box, Container } from "@mui/material";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Hero/Hero";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Archive from "./components/Archive/Archive";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Layout/Footer";
import { surfaceTokens } from "./theme/theme";

/**
 * App — Root layout component.
 *
 * Architecture: ONE centered Container wraps all sections.
 * Individual sections handle vertical spacing only.
 * This prevents Grid negative-margin bleed on mobile.
 *
 * Sections ordered per the design brief:
 * 1. Hero (full viewport height on desktop, auto on mobile)
 * 2. Case Studies / Selected Work
 * 3. About (with testimonials)
 * 4. Tech Stack
 * 5. Archive (personal projects)
 * 6. Contact
 *
 * TODO: Consider adding a "Process / Philosophy" section
 * (marked as optional in the design brief).
 *
 * TODO: Add scroll-to-top button for long page navigation.
 */

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: surfaceTokens.deepest,
        overflowX: "hidden",
      }}
    >
      <Navbar />

      {/**
       * Single centered Container — controls max-width and horizontal
       * padding for the entire page. Sections no longer need their
       * own Container wrappers.
       */}
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          px: { xs: 2.5, sm: 3, md: 4 },
        }}
      >
        <Hero />
        <CaseStudies />
        <About />
        <TechStack />
        <Archive />
        <Contact />
      </Container>

      <Footer />
    </Box>
  );
}
