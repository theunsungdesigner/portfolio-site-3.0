import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { caseStudies } from "../../data/portfolio";
import CaseStudyCard from "./CaseStudyCard";

/**
 * CaseStudies Section — Selected enterprise work.
 *
 * Uses CSS Grid instead of MUI Grid to avoid negative-margin bleed.
 *
 * Desktop (lg+): 3 columns
 * Tablet (md): 2 columns
 * Mobile (<md): 1 column
 */

export default function CaseStudies() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));

  const getColumns = () => {
    if (isDesktop) return "repeat(3, 1fr)";
    if (isTablet) return "repeat(2, 1fr)";
    return "1fr";
  };

  return (
    <Box
      id="case-studies"
      component="section"
      sx={{ py: isTablet ? 12 : 8 }}
    >
      <Typography variant="overline" component="p" sx={{ mb: 1 }}>
        Selected Work
      </Typography>
      <Typography variant="h2" component="h2" sx={{ mb: isTablet ? 6 : 3 }}>
        Case Studies
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: getColumns(),
          gap: isTablet ? 4 : 3,
        }}
      >
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={study.id} study={study} index={index} />
        ))}
      </Box>
    </Box>
  );
}
