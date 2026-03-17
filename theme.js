"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#131f24",
      paper: "#1a2e35",
    },
    text: {
      primary: "#ffffff",
      secondary: "#8a9bab",
    },
    primary: {
      main: "#58cc02",
    },
    warning: {
      main: "#ffc800",
    },
  },
  typography: {
    fontFamily: '"Nunito", "Roboto", sans-serif',
    fontWeightBold: 800,
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
