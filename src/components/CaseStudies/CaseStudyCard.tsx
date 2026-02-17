import { Card, Typography, Box, Chip } from "@mui/material";
import { motion } from "framer-motion";
import type { CaseStudy } from "../../types";
import { surfaceTokens } from "../../theme/theme";

/**
 * CaseStudyCard — A single case study presented as an elevated card.
 *
 * Design brief: "Lead with architecture decisions and business impact,
 * not just tools. Terminal-style intro device for each project."
 *
 * Structure:
 * 1. Terminal command (visual hook)
 * 2. Title + subtitle
 * 3. Description
 * 4. Impact bullets
 * 5. Tech stack chips
 */

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

export default function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        sx={{
          p: { xs: 3, md: 4 },
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Terminal Command — Visual Hook */}
        <Box
          sx={(theme) => ({
            backgroundColor: surfaceTokens.deepest,
            borderRadius: 1,
            px: 2,
            py: 1,
            mb: 3,
            ...theme.typography.mono,
            fontSize: { xs: "0.7rem", md: "0.8rem" },
            color: "primary.main",
            overflowX: "auto",
            wordBreak: "break-word",
          })}
        >
          {study.terminalCommand}
        </Box>

        {/* Title */}
        <Typography variant="h3" component="h3" sx={{ mb: 0.5 }}>
          {study.title}
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="overline"
          component="p"
          sx={{ mb: 2, color: "text.disabled" }}
        >
          {study.subtitle}
        </Typography>

        {/* Description */}
        <Typography variant="body1" sx={{ mb: 3 }}>
          {study.description}
        </Typography>

        {/**
         * TODO: Add case study image/screenshot once assets are provided.
         * Design brief suggests each card could have a visual element.
         */}

        {/* Impact — Business outcomes first */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="caption"
            component="p"
            sx={{
              color: "primary.main",
              mb: 1,
            }}
          >
            // impact
          </Typography>
          {study.impact.map((item) => (
            <Typography
              key={item}
              variant="body2"
              sx={{
                pl: 2,
                py: 0.5,
                borderLeft: `2px solid ${surfaceTokens.highest}`,
                mb: 1,
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* Tech Stack Chips — Pushed to bottom */}
        <Box
          sx={{
            mt: "auto",
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {study.techStack.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              variant="outlined"
              sx={{
                borderColor: surfaceTokens.highest,
                color: "text.secondary",
              }}
            />
          ))}
        </Box>
      </Card>
    </motion.div>
  );
}
