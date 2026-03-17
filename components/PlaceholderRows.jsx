"use client";

import { Box } from "@mui/material";

const placeholderSizes = [
  { dot: 36, barW: "50%", xpW: 40, opacity: 0.3 },
  { dot: 36, barW: "65%", xpW: 40, opacity: 0.25 },
  { dot: 36, barW: "40%", xpW: 40, opacity: 0.2 },
  { dot: 36, barW: "55%", xpW: 40, opacity: 0.15 },
  { dot: 36, barW: "45%", xpW: 40, opacity: 0.1 },
];

const SkeletonRow = ({ dot, barW, xpW, opacity }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      px: 2,
      py: 1.8,
      opacity,
      gap: 2,
    }}
  >
    <Box
      sx={{
        width: dot,
        height: dot,
        borderRadius: "50%",
        bgcolor: "#4a5568",
        flexShrink: 0,
      }}
    />
    <Box
      sx={{
        width: dot,
        height: dot,
        borderRadius: "50%",
        bgcolor: "#4a5568",
        flexShrink: 0,
      }}
    />
    <Box
      sx={{
        width: barW,
        height: 12,
        borderRadius: 1,
        bgcolor: "#4a5568",
        flex: 1,
      }}
    />
    <Box
      sx={{
        width: xpW,
        height: 12,
        borderRadius: 1,
        bgcolor: "#4a5568",
        flexShrink: 0,
      }}
    />
  </Box>
);

const PlaceholderRows = () => (
  <Box sx={{ py: 1 }}>
    {placeholderSizes.map((row, i) => (
      <SkeletonRow key={i} {...row} />
    ))}
  </Box>
);

export default PlaceholderRows;
