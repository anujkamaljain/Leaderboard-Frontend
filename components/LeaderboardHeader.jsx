"use client";

import { Box, Typography } from "@mui/material";

const LeaderboardHeader = ({ leagueName, subtitle, daysRemaining }) => (
  <Box sx={{ textAlign: "center", mb: 3 }}>
    <Typography variant="h5" sx={{ fontWeight: 800, color: "#fff", mb: 0.5 }}>
      {leagueName}
    </Typography>
    {subtitle && (
      <Typography variant="body2" sx={{ color: "#8a9bab", mb: 0.5 }}>
        {subtitle}
      </Typography>
    )}
    {daysRemaining && (
      <Typography
        variant="body2"
        sx={{
          color: "#ffc800",
          fontWeight: 700,
          display: "inline-flex",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        ⏳ {daysRemaining}
      </Typography>
    )}
  </Box>
);

export default LeaderboardHeader;
