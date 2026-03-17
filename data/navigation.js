import SchoolIcon from "@mui/icons-material/School";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const navItems = [
  { label: "LEARN", icon: SchoolIcon, path: "/" },
  { label: "PRACTICE", icon: FitnessCenterIcon, path: "/practice" },
  { label: "LEADERBOARDS", icon: LeaderboardIcon, path: "/leaderboards", active: true },
  { label: "QUESTS", icon: EmojiEventsIcon, path: "/quests" },
  { label: "SHOP", icon: StorefrontIcon, path: "/shop" },
  { label: "PROFILE", icon: PersonIcon, path: "/profile" },
  { label: "MORE", icon: MoreHorizIcon, path: "/more" },
];
