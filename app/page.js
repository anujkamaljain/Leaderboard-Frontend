import { Box, Container } from "@mui/material";
import LeagueBadges from "../components/LeagueBadges";
import LeaderboardHeader from "../components/LeaderboardHeader";
import LeaderboardList from "../components/LeaderboardList";
import { users, LEAGUE_NAME, LEAGUE_SUBTITLE, DAYS_REMAINING, PROMOTION_CUTOFF } from "../data/leaderboard";

const Home = () => (
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
          subtitle={LEAGUE_SUBTITLE}
          daysRemaining={DAYS_REMAINING}
        />
      </Box>
      <LeaderboardList users={users} promotionCutoff={PROMOTION_CUTOFF} />
    </Box>
  </Container>
);

export default Home;
