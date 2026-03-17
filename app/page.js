"use client";

import { useState } from "react";
import { Box, Container } from "@mui/material";
import LeagueBadges from "../components/LeagueBadges";
import LeaderboardHeader from "../components/LeaderboardHeader";
import LeaderboardList from "../components/LeaderboardList";
import PlaceholderRows from "../components/PlaceholderRows";
import NoLessonPrompt from "../components/NoLessonPrompt";
import LeaderboardCard from "../components/LeaderboardCard";
import { users, currentUser, LEAGUE_NAME, LEAGUE_SUBTITLE, DAYS_REMAINING, PROMOTION_CUTOFF } from "../data/leaderboard";

const Home = () => {
  const [hasLesson, setHasLesson] = useState(false);

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
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
              />
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Home;
