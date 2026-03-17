"use client";

import { Box, Typography } from "@mui/material";

const PromotionZone = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 1.5,
      py: 2,
      my: 0.5,
    }}
  >
    <Box
      sx={{
        height: 1,
        flex: 1,
        background: "linear-gradient(to right, transparent, rgba(88,204,2,0.3), transparent)",
      }}
    />
    <Typography
      sx={{
        fontSize: "0.7rem",
        fontWeight: 800,
        letterSpacing: 2,
        color: "#58cc02",
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        gap: 1,
        whiteSpace: "nowrap",
      }}
    >
      💎 PROMOTION ZONE 💎
    </Typography>
    <Box
      sx={{
        height: 1,
        flex: 1,
        background: "linear-gradient(to right, transparent, rgba(88,204,2,0.3), transparent)",
      }}
    />
  </Box>
);

export default PromotionZone;
