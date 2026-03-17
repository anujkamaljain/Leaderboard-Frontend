import { Nunito } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "Duolingo Leaderboard",
  description: "Duolingo-style leaderboard built with Next.js and MUI",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={nunito.className}>
      <ThemeRegistry>{children}</ThemeRegistry>
    </body>
  </html>
);

export default RootLayout;
