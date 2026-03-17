"use client";

import { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import LeagueBadges from "../components/LeagueBadges";
import LeaderboardHeader from "../components/LeaderboardHeader";
import LeaderboardList from "../components/LeaderboardList";
import PlaceholderRows from "../components/PlaceholderRows";
import NoLessonPrompt from "../components/NoLessonPrompt";
import LeaderboardCard from "../components/LeaderboardCard";
import EmojiStatusPanel from "../components/EmojiStatusPanel";
import { users, currentUser, LEAGUE_NAME, LEAGUE_SUBTITLE, DAYS_REMAINING, PROMOTION_CUTOFF } from "../data/leaderboard";

const Home = () => {
  const [hasLesson, setHasLesson] = useState(false);
  const [statusEmoji, setStatusEmoji] = useState("😎");

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "center",
          alignItems: { xs: "center", lg: "flex-start" },
          gap: { xs: 3, lg: 4 },
          py: { xs: 2, md: 4 },
          px: { xs: 1.5, sm: 2 },
          pt: { xs: 7, md: 4 },
          ml: { xs: 0, md: "200px" },
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 560 }}>
          <Box
            sx={{
              backgroundColor: "rgba(255,255,255,0.02)",
              borderRadius: 3,
              border: "1px solid rgba(255,255,255,0.06)",
              overflow: "hidden",
              pb: 1,
            }}
          >
            <Box sx={{ pt: 3, px: 2 }}>
              <LeagueBadges />
              <LeaderboardHeader
                leagueName={LEAGUE_NAME}
                subtitle={hasLesson ? LEAGUE_SUBTITLE : null}
                daysRemaining={hasLesson ? DAYS_REMAINING : null}
              />
            </Box>

            {hasLesson ? (
              <LeaderboardList users={users} promotionCutoff={PROMOTION_CUTOFF} />
            ) : (
              <>
                <NoLessonPrompt onStartLesson={() => setHasLesson(true)} />
                <PlaceholderRows />
                <Box sx={{ px: 0, pb: 1 }}>
                  <LeaderboardCard
                    rank={currentUser.rank}
                    name={currentUser.name}
                    xp={currentUser.xp}
                    avatar={currentUser.avatar}
                    isCurrentUser
                    preLesson
                  />
                </Box>
              </>
            )}
          </Box>
        </Box>

        <Box sx={{ pt: { xs: 0, lg: 1 }, width: { xs: "100%", sm: "auto" }, display: "flex", justifyContent: "center" }}>
          <EmojiStatusPanel
            selectedEmoji={statusEmoji}
            onSelectEmoji={setStatusEmoji}
            onClear={() => setStatusEmoji("")}
            userAvatar={currentUser.avatar}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
