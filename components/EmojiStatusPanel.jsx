"use client";

import { Box, Typography, IconButton, Avatar } from "@mui/material";
import { emojiOptions } from "../data/emojis";

const EmojiStatusPanel = ({ selectedEmoji, onSelectEmoji, onClear, userAvatar }) => (
  <Box
    sx={{
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 3,
      p: 2,
      width: "100%",
      maxWidth: 280,
    }}
  >
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
      <Typography sx={{ fontWeight: 700, fontSize: "0.85rem", color: "#fff" }}>
        Set your status
      </Typography>
      <Typography
        onClick={onClear}
        sx={{
          fontSize: "0.75rem",
          fontWeight: 700,
          color: "#1899ff",
          cursor: "pointer",
          "&:hover": { textDecoration: "underline" },
        }}
      >
        CLEAR
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        mb: 2,
        borderRadius: 2,
        backgroundColor: "rgba(255,255,255,0.04)",
      }}
    >
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <Avatar
          sx={{
            width: 72,
            height: 72,
            fontSize: "2.5rem",
            bgcolor: "rgba(255,255,255,0.1)",
            border: "3px solid rgba(255,255,255,0.15)",
          }}
        >
          {userAvatar || "🧑"}
        </Avatar>

        <Avatar
          sx={{
            width: 30,
            height: 30,
            fontSize: "1rem",
            bgcolor: "#3a3f47",
            border: "2px solid #1b2838",
            position: "absolute",
            top: -4,
            right: -8,
          }}
        >
          {selectedEmoji || "😶"}
        </Avatar>

        <Box
          sx={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            bgcolor: "#58cc02",
            border: "3px solid #1b2838",
            position: "absolute",
            bottom: 2,
            right: -2,
          }}
        />
      </Box>
    </Box>

    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 0.5,
      }}
    >
      {emojiOptions.map((emoji) => (
        <IconButton
          key={emoji}
          onClick={() => onSelectEmoji(emoji)}
          sx={{
            fontSize: "1.5rem",
            borderRadius: 2,
            aspectRatio: 1,
            backgroundColor:
              selectedEmoji === emoji ? "rgba(24,140,255,0.2)" : "rgba(255,255,255,0.04)",
            border:
              selectedEmoji === emoji ? "2px solid #1899ff" : "2px solid transparent",
            transition: "all 0.15s ease",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.1)",
              transform: "scale(1.1)",
            },
          }}
        >
          {emoji}
        </IconButton>
      ))}
    </Box>
  </Box>
);

export default EmojiStatusPanel;
