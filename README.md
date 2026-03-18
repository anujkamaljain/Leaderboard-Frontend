# Leaderboard UI — Duolingo Inspired

A leaderboard screen UI built to replicate the Duolingo-style ranking system. Made with Next.js and Material UI.

## Project Setup

Make sure you have Node.js (v18+) installed.

```bash
git clone <repo-url>
cd Leaderboard-Frontend
npm install
npm run dev
```

App runs on `http://localhost:3000`.

## Folder Structure

```
leaderboard/
├── app/
│   ├── layout.js           ← root layout with font + theme
│   ├── page.js             ← main page, state management
│   ├── ThemeRegistry.js    ← MUI theme provider wrapper
│   └── globals.css         ← base reset styles
├── components/
│   ├── Sidebar.jsx         ← left nav sidebar
│   ├── LeagueBadges.jsx    ← league shield icons row
│   ├── LeaderboardHeader.jsx ← league name + subtitle
│   ├── LeaderboardList.jsx ← renders list of ranked users
│   ├── LeaderboardCard.jsx ← single user row (rank, avatar, name, xp)
│   ├── PromotionZone.jsx   ← promotion zone divider
│   ├── PlaceholderRows.jsx ← skeleton rows for pre-lesson state
│   ├── NoLessonPrompt.jsx  ← "start a lesson" CTA
│   └── EmojiStatusPanel.jsx ← emoji status panel with avatar preview
├── data/
│   ├── leaderboard.js      ← user data + league config
│   ├── navigation.js       ← sidebar nav items
│   └── emojis.js           ← emoji options list
├── theme.js                ← MUI dark theme config
└── package.json
```

## Component Breakdown

**Sidebar** — Fixed left navigation with icons for each section. Highlights the active page. On mobile, the sidebar is replaced by a hamburger menu button that opens an MUI Drawer overlay with the same nav items and a close button. Uses extracted `NavList` and `Logo` sub-components to avoid duplication between desktop and mobile views.

**LeagueBadges** — Row of shield SVGs representing different leagues (bronze → obsidian). The current league is visually larger and glowing.

**LeaderboardHeader** — Shows the league name at the top. Conditionally renders the subtitle and timer only when a lesson has been completed.

**LeaderboardList** — Maps over the users array and renders a `LeaderboardCard` for each. Drops in a `PromotionZone` divider at the right cutoff point.

**LeaderboardCard** — One row in the leaderboard. Shows rank number, avatar, username, optional streak badge, and XP. The current user's row gets a highlight background and blue bottom border. Has a `preLesson` mode where the rank becomes a dot and XP shows as "EXP" since the user hasn't joined the board yet.

**PromotionZone** — A styled divider that separates promoted users from the rest.

**PlaceholderRows** — Skeleton/ghost rows shown before the user starts a lesson. These fade out gradually to indicate locked content.

**NoLessonPrompt** — Centered text + button telling the user to complete a lesson. Clicking "Start a Lesson" switches to the full leaderboard view.

**EmojiStatusPanel** — Right side panel where users pick a status emoji. Shows the current user's avatar in a large circle with the selected status emoji as a superscript badge on the top-right corner and a green online indicator dot on the bottom-right. Clicking "CLEAR" resets the status. Accepts `userAvatar` prop from the page to display the correct avatar. On mobile, this panel stacks below the leaderboard.

## UI States

1. **Pre-lesson** — User hasn't done a lesson yet. Shows the prompt, placeholder skeleton rows, and the current user at the bottom with a dot instead of a rank and "EXP" instead of XP value.

2. **Active leaderboard** — User clicked "Start a Lesson". Full ranked list appears with XP values, promotion zone, streak badges, and the current user highlighted.

## Responsive Design

- **Desktop (md+)** — Fixed sidebar on the left, leaderboard in the center, status panel on the right side.
- **Mobile (xs–sm)** — Sidebar hidden, replaced by a hamburger menu with a slide-in drawer. Leaderboard and status panel stack vertically. Top padding added for hamburger button clearance.

## Tech Stack

- Next.js 16
- React 19
- Material UI 7
