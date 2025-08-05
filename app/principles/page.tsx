import CorePrinciples from "../components/Programs Page/Core Principles/CorePrinciple";

export const metadata = {
  title: "Core Principles | Erzion Shade — Silent Empire Builder",
  description:
    "Discover the foundational principles that guide Erzion Shade’s silent dominance strategy. Build your empire with clarity and purpose.",
  openGraph: {
    title: "Core Principles | Erzion Shade",
    description:
      "Explore the strategic values that empower silent creators and entrepreneurs to scale with precision.",
    url: "https://erzionshade.vercel.app/principles",
    siteName: "Erzion Shade",
    images: [
      {
        url: "https://erzionshade.vercel.app/Shade-logo.png", 
        width: 1200,
        height: 630,
        alt: "Erzion Shade Core Principles - Foundation for Empire Building",
      },
    ],
  },
  twitter: {
  card: "summary_large_image",
  title: "Core Principles | Erzion Shade",
  description: "Explore the strategic values empowering silent creators to build their empire.",
  creator: "@erzionshade",
  image: "https://erzionshade.vercel.app/Shade-logo.png", // ← singular
},
  metadataBase: new URL("https://erzionshade.vercel.app"),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function CorePrinciplesPage() {
  return (
    <>
      <CorePrinciples />
    </>
  );
}
