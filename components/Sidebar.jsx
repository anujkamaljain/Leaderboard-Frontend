"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { navItems } from "../data/navigation";

const NavList = () => (
  <List disablePadding>
    {navItems.map((item) => (
      <ListItemButton
        key={item.label}
        sx={{
          borderRadius: 2,
          mb: 0.5,
          py: 1.2,
          backgroundColor: item.active ? "rgba(24, 140, 255, 0.15)" : "transparent",
          borderLeft: item.active ? "3px solid #1899ff" : "3px solid transparent",
          "&:hover": {
            backgroundColor: item.active
              ? "rgba(24, 140, 255, 0.2)"
              : "rgba(255,255,255,0.04)",
          },
        }}
      >
        <ListItemIcon sx={{ minWidth: 36, color: item.active ? "#1899ff" : "#8a9bab" }}>
          <item.icon fontSize="small" />
        </ListItemIcon>
        <ListItemText
          primary={item.label}
          primaryTypographyProps={{
            fontSize: "0.75rem",
            fontWeight: item.active ? 800 : 600,
            color: item.active ? "#fff" : "#8a9bab",
            letterSpacing: 0.5,
          }}
        />
      </ListItemButton>
    ))}
  </List>
);

const Logo = () => (
  <Typography
    sx={{
      fontWeight: 800,
      fontSize: "1.5rem",
      color: "#58cc02",
      px: 2,
      mb: 3,
      fontFamily: '"Nunito", sans-serif',
    }}
  >
    Examduo
  </Typography>
);

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setMobileOpen(true)}
        sx={{
          display: mobileOpen ? "none" : { xs: "flex", md: "none" },
          position: "fixed",
          top: 12,
          left: 12,
          zIndex: 1300,
          color: "#fff",
          bgcolor: "rgba(19,31,36,0.9)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(8px)",
          "&:hover": { bgcolor: "rgba(19,31,36,1)" },
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 240,
            bgcolor: "#131f24",
            borderRight: "1px solid rgba(255,255,255,0.06)",
            pt: 2,
            px: 1,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", px: 1, mb: 1 }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: "#8a9bab" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Logo />
        <NavList />
      </Drawer>

      <Box
        sx={{
          width: 200,
          minHeight: "100vh",
          borderRight: "1px solid rgba(255,255,255,0.06)",
          pt: 3,
          px: 1,
          display: { xs: "none", md: "block" },
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        <Logo />
        <NavList />
      </Box>
    </>
  );
};

export default Sidebar;
