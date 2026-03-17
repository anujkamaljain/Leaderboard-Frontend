"use client";

import { Box } from "@mui/material";
import LeaderboardCard from "./LeaderboardCard";
import PromotionZone from "./PromotionZone";

const LeaderboardList = ({ users, promotionCutoff }) => (
  <Box>
    {users.map((user, index) => (
      <Box key={user.rank}>
        {user.rank === promotionCutoff + 1 && <PromotionZone />}
        <LeaderboardCard
          rank={user.rank}
          name={user.name}
          xp={user.xp}
          avatar={user.avatar}
          badge={user.badge}
          isCurrentUser={user.isCurrentUser}
        />
      </Box>
    ))}
  </Box>
);

export default LeaderboardList;
