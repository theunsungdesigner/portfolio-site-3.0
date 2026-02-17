import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import { motion } from "framer-motion";
import { archiveProjects } from "../../data/portfolio";
import { surfaceTokens } from "../../theme/theme";

/**
 * Archive Section — Legacy personal projects.
 *
 * Desktop (md+): 3 columns
 * Tablet (sm+): 2 columns
 * Mobile (<sm): 1 column
 *
 * Uses CSS Grid instead of MUI Grid.
 *
 * TODO: Remove "broken" indicators once projects are redeployed.
 */

export default function Archive() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));

  const getColumns = () => {
    if (isDesktop) return "repeat(3, 1fr)";
    if (isTablet) return "repeat(2, 1fr)";
    return "1fr";
  };

  return (
    <Box
      id="archive"
      component="section"
      sx={{ py: isDesktop ? 12 : 8 }}
    >
      <Typography variant="overline" component="p" sx={{ mb: 1 }}>
        Personal Projects
      </Typography>
      <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
        Archive
      </Typography>
      <Typography variant="body2" sx={{ mb: isDesktop ? 6 : 3, maxWidth: 500 }}>
        Earlier personal projects from bootcamp and self-study.
        Some live links are pending redeployment.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: getColumns(),
          gap: 3,
        }}
      >
        {archiveProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card sx={{ height: "100%" }}>
              <CardContent
                sx={{
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {/* Header: Title + Links */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: 2,
                  }}
                >
                  <Typography variant="h4" component="h3">
                    {project.title}
                  </Typography>

                  <Box sx={{ display: "flex", gap: 0.5, flexShrink: 0 }}>
                    {project.githubUrl && (
                      <IconButton
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        aria-label={`View ${project.title} on GitHub`}
                        sx={{
                          color: "text.secondary",
                          "&:hover": { color: "primary.main" },
                        }}
                      >
                        <GitHubIcon fontSize="small" />
                      </IconButton>
                    )}

                    {project.liveUrl && (
                      <Tooltip
                        title={
                          project.isLiveLinkBroken
                            ? "Live link needs redeployment"
                            : "View live site"
                        }
                      >
                        <span>
                          <IconButton
                            href={project.isLiveLinkBroken ? undefined : project.liveUrl}
                            component={project.isLiveLinkBroken ? "button" : "a"}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            disabled={project.isLiveLinkBroken}
                            aria-label={
                              project.isLiveLinkBroken
                                ? `${project.title} live link is broken`
                                : `View ${project.title} live`
                            }
                            sx={{
                              color: project.isLiveLinkBroken
                                ? "text.disabled"
                                : "text.secondary",
                              "&:hover": {
                                color: project.isLiveLinkBroken
                                  ? "text.disabled"
                                  : "primary.main",
                              },
                            }}
                          >
                            {project.isLiveLinkBroken ? (
                              <LinkOffIcon fontSize="small" />
                            ) : (
                              <LaunchIcon fontSize="small" />
                            )}
                          </IconButton>
                        </span>
                      </Tooltip>
                    )}
                  </Box>
                </Box>

                <Typography variant="body2" sx={{ mb: 3, flexGrow: 1 }}>
                  {project.description}
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.techStack.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: surfaceTokens.highest,
                        color: "text.disabled",
                        fontSize: "0.7rem",
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
