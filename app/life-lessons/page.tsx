import LifeLessonsHero from "../components/Wisdom Page/Life Lessons/LifeLessonsHero";
import LessonOne from "../components/Wisdom Page/Life Lessons/Lesson1";

export const metadata = {
  // Primary Title: Powerful, action-oriented, and keyword-rich
  title: "7 Life Lessons from Silence: Forge Your Empire with Erzion Shade's Wisdom",

  // Primary Description: Emphasizes transformation and strategic insight
  description:
    "Uncover the profound wisdom forged in silence that shaped a builder's empire. Gain deep, unconventional insights for visionaries, silent creators, and those destined for mastery.",

  // Keywords: Expanded for broader, high-intent search coverage, reflecting your brand's depth
  keywords: [
    "Life Lessons",
    "Wisdom from Silence",
    "Erzion Shade",
    "Personal Mastery",
    "Entrepreneurial Mindset",
    "Strategic Insights",
    "Silent Creators",
    "Empire Building",
    "Unconventional Wisdom",
    "Inner Strength",
    "Codex of Shade",
    "Leadership Principles",
  ],

  // Open Graph (for social sharing): Optimized for click-through and brand consistency
  openGraph: {
    title: "7 Life Lessons from Silence: Forge Your Empire with Erzion Shade",
    description:
      "Unlock the silent wisdom that builds empires. Deep, strategic insights for visionaries and creators from Erzion Shade.",
    url: "https://erzionshade.com/life-lessons",
    siteName: "Erzion Shade",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://erzionshade.com/Shade-logo.png",
        width: 1200,
        height: 630,
        alt: "Erzion Shade: 7 Life Lessons from Silence for Empire Builders",
      },
    ],
  },

  // Twitter Card: Optimized for Twitter's specific format
  twitter: {
    card: "summary_large_image",
    title: "7 Life Lessons: Silence, Wisdom, Empire. Erzion Shade.",
    description:
      "Uncover strategic insights for silent creators and visionaries. Build your empire with unconventional wisdom from Erzion Shade.",
    creator: "@ErzionShade",
    images: ["https://erzionshade.com/Shade-logo.png"],
  },

  // Base URL: Essential for relative paths in metadata
  metadataBase: new URL("https://erzionshade.com"),

  // Favicon: Standard
  icons: {
    icon: "/favicon.ico",
  },
};

export default function LifeLessons() {
  return (
    <>
      <LifeLessonsHero />
      <LessonOne />
    </>
  );
}
