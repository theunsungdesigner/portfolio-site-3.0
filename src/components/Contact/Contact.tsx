import { Box, Typography, Button, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";
import { contactData } from "../../data/portfolio";
import { surfaceTokens } from "../../theme/theme";

/**
 * Contact Section — Clean, minimal with a single CTA.
 *
 * NOTE: No Container here — App.tsx provides the centered wrapper.
 * Uses maxWidth on the inner Box to constrain width for readability.
 *
 * Design brief: "Clean, minimal — email, LinkedIn, GitHub. Single CTA."
 *
 * TODO: Consider adding a contact form (would need a backend/serverless
 * function). For now, email CTA + social links is sufficient.
 */

/** Map icon names to MUI components */
const iconMap = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Email: EmailIcon,
} as const;

export default function Contact() {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        textAlign: "center",
      }}
    >
      {/* Constrain content width for readability — replaces Container maxWidth="sm" */}
      <Box sx={{ maxWidth: 600, mx: "auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <Typography variant="overline" component="p" sx={{ mb: 1 }}>
            Get in Touch
          </Typography>
          <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
            {contactData.heading}
          </Typography>
          <Typography variant="body1" sx={{ mb: 5 }}>
            {contactData.subtext}
          </Typography>

          {/* Primary CTA — Email */}
          <Button
            variant="outlined"
            size="large"
            href={`mailto:${contactData.email}`}
            sx={{
              borderColor: "primary.main",
              color: "primary.main",
              px: 5,
              py: 1.5,
              mb: 4,
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "primary.main",
                color: surfaceTokens.deepest,
              },
            }}
          >
            Say Hello
          </Button>

          {/* Social Links */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mt: 2,
            }}
          >
            {contactData.socialLinks.map((link) => {
              const Icon = iconMap[link.iconName];
              return (
                <IconButton
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${link.platform}`}
                  sx={{
                    color: "text.secondary",
                    border: `1px solid ${surfaceTokens.elevated}`,
                    "&:hover": {
                      color: "primary.main",
                      borderColor: "primary.main",
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              );
            })}
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
