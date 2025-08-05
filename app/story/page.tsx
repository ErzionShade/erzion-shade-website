import StoryHero from "../components/About Page/Story/Shade-Story";
import Strategy from "../components/About Page/Story/Strategy";
import FinalSection from "../components/About Page/Story/ending";

export const metadata = {
  title: "Erzion Shade Story | The Silent Empire Builder's Journey",
  description:
    "Discover the untold journey of Erzion Shade - silent creator, strategic builder, and entrepreneur.",
  openGraph: {
    title: "Erzion Shade Story | Journey of a silent entrepreneur",
   description: "Explore the origins and vision that fuel Erzion Shade’s rise to global dominance.",
    url: "https://erzionshade.com/story",
    siteName: "Erzion Shade",
    images: [
      {
        url: "https://erzionshade.vercel.app/Shade-logo.png", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Erzion Shade - The Silent Entrepreneur Story",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Erzion Shade Story | The Silent Entrepreneur Journey",
    description: "Uncover the rise of Erzion Shade — the silent strategist building an empire.",

    creator: "@ErzionShade",
    images: ["https://erzionshade.vercel.app/Shade-logo.png"],
  },
  metadataBase: new URL("https://erzionshade.vercel.app"),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function StoryPage() {
  return (
    <>
      <StoryHero />
      <Strategy />
      <FinalSection />
    </>
  );
}
