import Hero from "./components/Home page/Hero";
import MiddleSection from "./components/Home page/MiddleSection";
import CallToActionSection from "./components/Home page/CallToAction";

// SEO META — using Next.js App Router Metadata API
export const metadata = {
  // Primary Title: Direct, powerful, and keyword-rich
  title: "Erzion Shade: Fix Hidden Business Leaks & Scale Your Empire",
  
  // Primary Description: Leverages your core value proposition and X bio messaging
  description:
    "Erzion Shade helps entrepreneurs pinpoint and eliminate hidden business leaks to unlock rapid scaling. Your business has a leak – I find it. Build your empire.",
  
  // Keywords: Expanded for broader, high-intent search coverage
  keywords: [
    "Erzion Shade",
    "Business leak detection",
    "Profit optimization",
    "Business scaling strategy",
    "Entrepreneur growth",
    "Hidden costs",
    "Revenue leaks",
    "Business efficiency",
    "Strategic consulting",
    "Wealth engineering",
    "Business bottlenecks",
    "Growth hacking", // More aggressive term
    "Dubai business growth", // More specific to your vision
    "Silent dominance", // Your brand phrase
    "Erzion Codex", // Brand keyword
  ],
  
  // Authors & Creator: Keep as is, clear and consistent
  authors: [{ name: "Erzion Shade", url: "https://erzionshade.com" }],
  creator: "Erzion Shade",
  
  // Open Graph (for social sharing): Optimized for click-through on platforms like Facebook/LinkedIn
  openGraph: {
    title: "Erzion Shade: Pinpoint Business Leaks. Engineer Your Empire.", // Punchier title for social
    description:
      "Unlock rapid growth. Erzion Shade helps entrepreneurs find and fix hidden business leaks, building systems that scale. Your path to silent market dominance starts here.", // More compelling description
    url: "https://erzionshade.com",
    siteName: "Erzion Shade", // Full site name for clarity
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://erzionshade.vercel.app/Shade-logo.png", // REMINDER: Replace with your actual, high-quality OG image URL
        width: 1200,
        height: 630,
        alt: "Erzion Shade - Business Leak Detection & Scaling Strategy", // More descriptive alt text
      },
    ],
  },
  
  // Twitter Card: Optimized for Twitter's specific format
  twitter: {
    card: "summary_large_image",
    title: "Erzion Shade: Fix Your Business Leaks. Scale to Empire.", // Concise & action-oriented for Twitter
    description:
      "Stop guessing. Erzion Shade pinpoints hidden business leaks, unlocking rapid profit and growth. Follow the climb to silent market dominance.", // Compelling & includes your call to action
    creator: "@erzionshade", // Ensure this is your actual X handle
    images: ["https://erzionshade.com/Shade-logo.png"], // REMINDER: Replace with actual image
  },
  
  // Base URL: Essential for relative paths in metadata
  metadataBase: new URL("https://erzionshade.com"),
  
  // Favicon: Standard
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <MiddleSection />
      <CallToActionSection />
    </>
  );
}
