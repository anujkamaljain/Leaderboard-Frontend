"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";

const ThemeRegistry = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default ThemeRegistry;
