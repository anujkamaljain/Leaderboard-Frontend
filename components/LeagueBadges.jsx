"use client";

import { Box, Typography } from "@mui/material";

const leagues = [
  { id: "bronze", color: "#cd7f32", active: false },
  { id: "silver", color: "#c0c0c0", active: false },
  { id: "gold", color: "#ffc800", active: true },
  { id: "diamond", color: "#68c8f0", active: false },
  { id: "obsidian", color: "#6c757d", active: false },
];

const ShieldIcon = ({ color, active }) => (
  <Box
    sx={{
      width: active ? 48 : 36,
      height: active ? 56 : 44,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: active ? 1 : 0.4,
      transition: "all 0.2s ease",
      filter: active ? `drop-shadow(0 0 8px ${color})` : "none",
    }}
  >
    <svg viewBox="0 0 40 48" width="100%" height="100%">
      <path
        d="M20 2 L38 10 L38 26 Q38 42 20 46 Q2 42 2 26 L2 10 Z"
        fill={color}
        stroke={active ? "#fff" : "none"}
        strokeWidth={active ? 1 : 0}
      />
    </svg>
  </Box>
);

const LeagueBadges = () => (
  <Box sx={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 1.5, mb: 2 }}>
    {leagues.map((league) => (
      <ShieldIcon key={league.id} color={league.color} active={league.active} />
    ))}
  </Box>
);

export default LeagueBadges;
