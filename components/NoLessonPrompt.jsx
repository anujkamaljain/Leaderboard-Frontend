"use client";

import { Box, Typography, Button } from "@mui/material";

const NoLessonPrompt = ({ onStartLesson }) => (
  <Box sx={{ textAlign: "center", py: 2, px: 2 }}>
    <Typography
      variant="body2"
      sx={{ color: "#8a9bab", mb: 2, fontSize: "0.9rem" }}
    >
      Complete a lesson to join this week's leaderboard
    </Typography>
    <Button
      variant="outlined"
      onClick={onStartLesson}
      sx={{
        color: "#fff",
        borderColor: "rgba(255,255,255,0.3)",
        borderWidth: 2,
        borderRadius: 2,
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: 1,
        px: 4,
        py: 1,
        fontSize: "0.8rem",
        "&:hover": {
          borderColor: "#fff",
          backgroundColor: "rgba(255,255,255,0.05)",
        },
      }}
    >
      Start a Lesson
    </Button>
  </Box>
);

export default NoLessonPrompt;
