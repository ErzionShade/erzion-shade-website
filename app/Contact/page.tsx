import ContactPersonal from "../components/Work Page/Contact Page/ContactPersonal";

export const metadata = {
  title: "Contact Erzion Shade | Build Your Silent Empire",
  description:
    "Get in touch with Erzion Shade to start fixing your business leaks and scaling your empire. Reach out today for strategic growth consulting.",
  openGraph: {
    title: "Contact Erzion Shade | Silent Empire Builder",
    description:
      "Connect with Erzion Shade for personalized business growth strategies and silent market dominance.",
    url: "https://erzionshade.vercel.app/Contact",
    siteName: "Erzion Shade",
    images: [
      {
        url: "https://erzionshade.vercel.app/Shade-logo.png", // Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: "Contact Erzion Shade - Business Growth Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Erzion Shade | Build Your Silent Empire",
    description:
      "Reach out to Erzion Shade for expert advice on business leaks and empire building.",
    creator: "@ErzionShade",
    image: ["https://erzionshade.vercel.app/Shade-logo.png"],
  },
  metadataBase: new URL("https://erzionshade.vercel.app"),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactPersonal />
    </>
  );
}
