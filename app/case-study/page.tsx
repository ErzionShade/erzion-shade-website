import CaseStudies from "../components/Work Page/Case-Studies/Case-Studies";

export const metadata = {
  // Primary Title: Direct, powerful, and outcome-focused
  title: "Erzion Shade: Case Studies in Business Leak Annihilation & Empire Scaling",

  // Primary Description: Highlights problem-solving and ultimate market position
  description:
    "Uncover real-world case studies where Erzion Shade pinpointed and eliminated hidden business leaks, leading to explosive growth and silent market dominance for entrepreneurs.",

  // Keywords: Expanded for broader, high-intent search coverage, reflecting your brand's aggressive approach
  keywords: [
    "Business leak case studies",
    "Profit optimization examples",
    "Scaling success stories",
    "Erzion Shade results",
    "Strategic business solutions",
    "Market dominance strategies",
    "Hidden revenue leaks",
    "Business turnaround case studies",
    "Entrepreneurial success",
    "Performance marketing case studies",
    "Business efficiency improvements",
    "Growth acceleration",
    "Wealth engineering case studies",
    "Erzion Shade", // Brand keyword
  ],

  // Open Graph (for social sharing): Optimized for click-through and brand consistency
  openGraph: {
    title: "Erzion Shade: Real Case Studies. Real Leak Fixes. Real Growth.",
    description:
      "See how Erzion Shade's precision strategies fix hidden business leaks and propel companies to silent market dominance. Witness the results.",
    url: "https://erzionshade.vercel.app/case-studies",
    siteName: "Erzion Shade",
    type: "website",
    images: [
      {
        url: "https://erzionshade.vercel.app/Shade-logo.png", 
        width: 1200,
        height: 630,
        alt: "Erzion Shade Business Case Studies: Leak Fixes & Growth Results",
      },
    ],
  },

  // Twitter Card: Optimized for Twitter's specific format
  twitter: {
    card: "summary_large_image",
    title: "Erzion Shade: Case Studies - Fix Leaks, Dominate.",
    description:
      "Witness the strategies that eliminate hidden business leaks and drive undeniable growth. #ErzionShade #BusinessGrowth",
    creator: "@erzionshade",
    images: ["https://erzionshade.vercel.app/Shade-logo.png"], // Use the same OG image here
  },

  // Base URL: Essential for relative paths in metadata
  metadataBase: new URL("https://erzionshade.vercel.app"),

  // Favicon: Standard
  icons: {
    icon: "/favicon.ico",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudies />
    </>
  );
}
