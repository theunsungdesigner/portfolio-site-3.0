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
 * App — Root layout component with centralized Container.
 * Sections ordered: Hero → Case Studies → About → Tech Stack → Archive → Contact
 *
 * TODO: Consider adding a "Process / Philosophy" section
 * TODO: Add scroll-to-top button for long page navigation
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
