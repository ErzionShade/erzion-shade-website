"use client";
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LifeLessonsHero() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // REDUCED MOTION DETECTION
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // FONT LOAD HANDLER
  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    });
  }, []);

  // MASTER RESPONSIVE CONFIG
  const textSizes = {
    icon: "clamp(2rem, 4vw, 3rem)",
    headline: "clamp(1.75rem, 6vw + 0.5rem, 3.5rem)",
    subtext: "clamp(0.9rem, 1.5vw + 0.5rem, 1.25rem)",
  };

  return (
    <section
      className="relative w-full bg-gray-800 overflow-hidden flex items-center justify-center px-[max(env(safe-area-inset-left),1rem)]"
      style={{
        minHeight: "clamp(500px, 80dvh, 800px)",
        height: "auto",
        paddingTop: "max(env(safe-area-inset-top),4rem)",
        paddingBottom: "max(env(safe-area-inset-top),4rem)",
        opacity: fontsLoaded ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      {/* BACKGROUND PATTERN */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />

      {/* MAIN CONTENT */}
      <motion.div
        className="relative z-10 text-center w-full max-w-[min(92vw,1200px)] px-[clamp(0.8rem,2.5vw,1.8rem)]"
        initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.9, ease: "easeOut" }}
      >
        {/* ICON - CENTERED WITH PROPER SCALING */}
        <motion.div
          className="mb-[clamp(1rem,3vw,2rem)] flex justify-center hero-icon"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: reducedMotion ? 0 : 0.2, duration: 0.6 }}
        >
          <BookOpen
            className="text-yellow-500"
            style={{
              width: textSizes.icon,
              height: textSizes.icon,
            }}
          />
        </motion.div>

        {/* HEADLINE - AGGRESSIVE LINE CONTROL */}
        <motion.h1
          className="font-bold text-white mb-[clamp(0.8rem,2vw,1.5rem)] leading-[1.1] tracking-tight hero-headline"
          style={{ fontSize: textSizes.headline }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reducedMotion ? 0 : 0.4 }}
        >
          <span className="block">I DIDN'T SURVIVE LIFE,</span>
          <span className="block">I STUDIED IT.</span>
        </motion.h1>

        {/* SUBTEXT - FORCED SINGLE COLUMN */}
        <motion.p
          className="text-gray-300 max-w-xl mx-auto hero-subtext"
          style={{ fontSize: textSizes.subtext }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reducedMotion ? 0 : 0.6 }}
        >
          <span className="block">Don't take these lessons as motivation —</span>
          <span className="block">There are living truths inside scars.</span>
        </motion.p>
      </motion.div>

      {/* MICRO-OPTIMIZATIONS */}
      <style jsx global>{`
        /* FONT LOAD HANDLER */
        @font-face {
          font-display: swap;
        }

        /* TINY SCREENS */
        @media (max-width: 360px) {
          /* Adjust line heights for smallest screens */
          .leading-[1.1] {
            line-height: 1.2 !important;
          }
        }

        /* NEW MEDIA QUERY FOR SCREENS BELOW 300PX */
        @media (max-width: 299px) {
          section {
            min-height: 110dvh !important; /* Increase height for better spacing */
            padding-top: 15dvh !important;
            padding-bottom: 15dvh !important;
          }
          .hero-headline {
            display: none !important; /* HIDE THE HEADLINE */
          }
          .hero-subtext {
            transform: translateY(20%) !important; /* MOVE SUBTEXT DOWN BY 20% */
          }
        }

        /* LANDSCAPE MODE ADJUSTMENTS */
        @media (orientation: landscape) and (max-height: 600px) {
          /* Compact layout for landscape */
          .px-[clamp(0.8rem,2.5vw,1.8rem)] {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }

          /* Reduce spacing */
          .mb-[clamp(1rem,3vw,2rem)] {
            margin-bottom: 0.8rem !important;
          }

          /* Slightly smaller text */
          .text-[clamp(1.75rem,6vw+0.5rem,3.5rem)] {
            font-size: clamp(1.5rem, 5vw, 2.5rem) !important;
          }
        }
      `}</style>
    </section>
  );
}