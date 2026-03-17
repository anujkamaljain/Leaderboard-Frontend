"use client";

import { Box, Typography, Avatar, Chip } from "@mui/material";

const LeaderboardCard = ({ rank, name, xp, avatar, badge, isCurrentUser }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      px: 2,
      py: 1.5,
      borderRadius: 2,
      backgroundColor: isCurrentUser ? "rgba(24, 140, 255, 0.15)" : "transparent",
      borderBottom: isCurrentUser ? "3px solid #1899ff" : "1px solid rgba(255,255,255,0.06)",
      transition: "background 0.2s ease",
      "&:hover": {
        backgroundColor: isCurrentUser
          ? "rgba(24, 140, 255, 0.2)"
          : "rgba(255,255,255,0.03)",
      },
    }}
  >
    <Typography
      sx={{
        width: 32,
        fontWeight: 700,
        color: "#8a9bab",
        fontSize: "0.9rem",
        textAlign: "center",
        flexShrink: 0,
      }}
    >
      {rank}
    </Typography>

    <Avatar
      sx={{
        width: 40,
        height: 40,
        fontSize: "1.4rem",
        bgcolor: "rgba(255,255,255,0.08)",
        mx: 1.5,
        flexShrink: 0,
      }}
    >
      {avatar}
    </Avatar>

    <Box sx={{ flex: 1, minWidth: 0 }}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "0.9rem",
          color: "#fff",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </Typography>
      {badge && (
        <Chip
          label={`🔥 ${badge}`}
          size="small"
          sx={{
            mt: 0.3,
            height: 20,
            fontSize: "0.65rem",
            fontWeight: 700,
            bgcolor: "rgba(88, 204, 2, 0.15)",
            color: "#58cc02",
            border: "none",
          }}
        />
      )}
    </Box>

    <Typography
      sx={{
        fontWeight: 700,
        fontSize: "0.85rem",
        color: "#8a9bab",
        flexShrink: 0,
        ml: 1,
      }}
    >
      {xp} XP
    </Typography>
  </Box>
);

export default LeaderboardCard;
