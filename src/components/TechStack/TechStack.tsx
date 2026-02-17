import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { techCategories } from "../../data/portfolio";
import { surfaceTokens } from "../../theme/theme";
import type { TechIconName } from "../../types";

/* ─── MUI Icons ─── */
import TerminalIcon from "@mui/icons-material/Terminal";
import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import StorageIcon from "@mui/icons-material/Storage";
import InsightsIcon from "@mui/icons-material/Insights";
import BugReportIcon from "@mui/icons-material/BugReport";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

/**
 * TechStack Section — Technologies grouped by domain.
 *
 * Layout matches a card-per-domain pattern with:
 * - Icon + bold category name
 * - Text list items with subtle dividers
 *
 * Large Desktop (lg+): 4 columns
 * Tablet (sm+): 2 columns
 * Mobile (<sm): 1 column
 *
 * Uses CSS Grid instead of MUI Grid.
 */

/** Map icon names from data to actual MUI icon components */
const iconMap: Record<TechIconName, typeof TerminalIcon> = {
  Backend: TerminalIcon,
  Frontend: CodeIcon,
  Cloud: CloudIcon,
  DevOps: RocketLaunchIcon,
  Data: StorageIcon,
  Monitoring: InsightsIcon,
  Testing: BugReportIcon,
  Architecture: AccountTreeIcon,
};

export default function TechStack() {
  const theme = useTheme();
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));

  const getColumns = () => {
    if (isLargeDesktop) return "repeat(4, 1fr)";
    if (isTablet) return "repeat(2, 1fr)";
    return "1fr";
  };

  return (
    <Box
      id="tech-stack"
      component="section"
      sx={{ py: isLargeDesktop ? 12 : 8 }}
    >
      <Typography
        variant="overline"
        component="p"
        sx={{ mb: 1, fontWeight: 700 }}
      >
        Capabilities
      </Typography>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: isLargeDesktop ? 6 : 3, fontWeight: 700 }}
      >
        Tech Stack
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: getColumns(),
          gap: 3,
        }}
      >
        {techCategories.map((category, index) => {
          const IconComponent = iconMap[category.iconName];

          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Box
                sx={{
                  backgroundColor: surfaceTokens.container,
                  border: `1px solid ${surfaceTokens.elevated}`,
                  borderRadius: 2,
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Category Icon */}
                <IconComponent
                  sx={{
                    color: "primary.main",
                    fontSize: "2rem",
                    mb: 2,
                  }}
                />

                {/* Category Name — h4-level sizing (1.25rem) */}
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    color: "text.primary",
                    fontSize: "1.25rem",
                    lineHeight: 1.3,
                    mb: 2,
                  }}
                >
                  {category.category}
                </Typography>

                {/* Tech Items — body1-level sizing (1rem), primary opacity */}
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  {category.items.map((item, itemIndex) => {
                    const isLastItem =
                      itemIndex === category.items.length - 1;

                    return (
                      <Typography
                        key={item}
                        variant="body1"
                        sx={{
                          py: 1.25,
                          fontWeight: 500,
                          color: "text.primary",
                          fontSize: "1rem",
                          borderBottom: isLastItem
                            ? "none"
                            : `1px solid ${surfaceTokens.elevated}`,
                        }}
                      >
                        {item}
                      </Typography>
                    );
                  })}
                </Box>
              </Box>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
}
