import { Box, Typography, Container, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { contactData } from "../../data/portfolio";
import { surfaceTokens } from "../../theme/theme";

/**
 * Footer — Minimal footer with social links and copyright.
 * Keeps it clean per design brief: "Single CTA"
 */

/** Map icon names from data to MUI icon components */
const iconMap = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Email: EmailIcon,
} as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        borderTop: `1px solid ${surfaceTokens.elevated}`,
        py: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="caption">
            &copy; {currentYear} Jonathon Wilson. Built with React + MUI.
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            {contactData.socialLinks.map((link) => {
              const Icon = iconMap[link.iconName];
              return (
                <IconButton
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
