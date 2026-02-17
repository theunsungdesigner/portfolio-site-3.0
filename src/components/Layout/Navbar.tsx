import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { navItems } from "../../data/portfolio";
import { surfaceTokens } from "../../theme/theme";

/**
 * Navbar — Fixed top navigation.
 *
 * Desktop: horizontal text links
 * Mobile: hamburger icon → full-width drawer
 *
 * Scrolls smoothly to the target section on click.
 */

function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          borderBottom: `1px solid ${surfaceTokens.highest}`,
          backdropFilter: "blur(12px)",
          backgroundColor: `${surfaceTokens.elevated}E6`, // Semi-transparent
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1200px",
            width: "100%",
            mx: "auto",
            px: { xs: 2, md: 4 },
          }}
        >
          {/* Logo / Name */}
          <Typography
            variant="mono"
            component="a"
            onClick={() => handleNavClick("hero")}
            sx={{
              fontSize: { xs: "0.9rem", md: "1rem" },
              cursor: "pointer",
              color: "primary.main",
              textDecoration: "none",
              flexGrow: 1,
              letterSpacing: "0.05em",
            }}
          >
            JW
          </Typography>

          {/* Desktop Nav Links */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.sectionId}
                  onClick={() => handleNavClick(item.sectionId)}
                  sx={{
                    color: "text.secondary",
                    fontSize: "1rem",
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: "text.primary" }}
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: 320,
            backgroundColor: surfaceTokens.elevated,
            backgroundImage: "none",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ color: "text.primary" }}
            aria-label="Close navigation menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.sectionId} disablePadding>
              <ListItemButton
                onClick={() => handleNavClick(item.sectionId)}
                sx={{ minHeight: 48 }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    variant: "mono",
                    fontSize: "1.1rem",
                    color: "text.secondary",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
