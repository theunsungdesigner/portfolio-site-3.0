import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { aboutData, testimonials } from "../../data/portfolio";
import { surfaceTokens } from "../../theme/theme";

/**
 * About Section — Engineering philosophy + testimonials.
 *
 * Desktop (md+): Two columns — story left, testimonials right
 * Mobile (<md): Single column, story then testimonials stacked
 *
 * Uses CSS Grid instead of MUI Grid.
 */

export default function About() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      id="about"
      component="section"
      sx={{ py: isDesktop ? 12 : 8 }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isDesktop ? "7fr 5fr" : "1fr",
          gap: isDesktop ? 8 : 4,
        }}
      >
        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="overline" component="p" sx={{ mb: 1 }}>
            About
          </Typography>
          <Typography variant="h2" component="h2" sx={{ mb: 4 }}>
            {aboutData.heading}
          </Typography>

          {aboutData.paragraphs.map((paragraph, index) => (
            <Typography key={index} variant="body1" sx={{ mb: 3 }}>
              {paragraph}
            </Typography>
          ))}
        </motion.div>

        {/* Testimonials */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, x: isDesktop ? 20 : 0, y: isDesktop ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Box
                sx={{
                  backgroundColor: surfaceTokens.container,
                  border: `1px solid ${surfaceTokens.elevated}`,
                  borderRadius: 2,
                  p: 3,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontStyle: "italic",
                    mb: 2,
                    color: "text.secondary",
                    lineHeight: 1.7,
                  }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </Typography>
                <Typography
                  variant="caption"
                  component="p"
                  sx={{
                    color: "primary.main",
                  }}
                >
                  {testimonial.name}
                </Typography>
                <Typography variant="caption" component="p">
                  {testimonial.role}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
