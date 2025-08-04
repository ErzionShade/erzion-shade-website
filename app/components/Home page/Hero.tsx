"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { BookOpen, Sword, ArrowRight } from "lucide-react";

export default function Hero() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }

    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollY(latest * 100);
  });

  const textSizes = {
    badge: "clamp(0.7rem, 1.25vw + 0.5rem, 0.9rem)",
    headline: "clamp(2.1rem, 7vw + 0.5rem, 5rem)",
    subhead: "clamp(0.95rem, 1.6vw + 0.5rem, 1.4rem)",
    cta: "clamp(0.95rem, 1.1vw + 0.5rem, 1.15rem)",
    quote: "clamp(0.85rem, 1vw + 0.5rem, 1.05rem)",
    floatingChars: "clamp(1.8rem, 10vw, 6rem)",
    dragonChar: "clamp(5rem, 20vw, 14rem)",
  };

  const [floatingCharsCount, setFloatingCharsCount] = useState(0);
  useEffect(() => {
    setFloatingCharsCount(reducedMotion ? 0 : window.innerWidth < 768 ? 3 : 6);
  }, [reducedMotion]);

  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-black overflow-hidden flex items-center justify-center px-[max(env(safe-area-inset-left),1rem)]"
      style={{
        minHeight: dimensions.height > 0 ? `${dimensions.height}px` : "85dvh",
        height: dimensions.height > 0 ? `${dimensions.height}px` : "auto",
        paddingTop: "max(env(safe-area-inset-top),5rem)",
        paddingBottom: "max(env(safe-area-inset-top),5rem)",
        opacity: fontsLoaded ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      <motion.div
        className="absolute inset-0 z-0 opacity-[clamp(0.03,1vw,0.08)] saturate-0 brightness-[0.3] will-change-transform"
        style={{
          backgroundImage: "url('/ancient-paper.png')",
          backgroundSize: "cover",
          transform: reducedMotion
            ? undefined
            : `translateY(${scrollY * 0.5}px)`,
          minHeight: "100%",
          minWidth: "100%",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 overflow-hidden opacity-[0.12] pointer-events-none"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {["Φ", "Ψ", "Λ", "Δ", "Σ", "道"].slice(0, floatingCharsCount).map((char, i) => (
          <motion.span
            key={i}
            className="absolute text-gold-500/20 will-change-transform"
            style={{
              fontSize: textSizes.floatingChars,
              top: `${Math.random() * 20}%`,
              left: `${Math.random() * 80}%`,
            }}
            initial={{ y: -100 }}
            animate={
              reducedMotion
                ? {}
                : {
                    y: 1200,
                    scale: [1, 1.15, 1],
                    x: Math.random() * 200 - 100,
                  }
            }
            transition={{
              duration: reducedMotion ? 0 : 22 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "linear",
            }}
            aria-hidden="true"
          >
            {char}
          </motion.span>
        ))}
      </div>

      <motion.div
        className="relative z-10 text-center w-full max-w-[min(92vw,1500px)] px-[clamp(0.8rem,2.5vw,1.8rem)]"
        initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.9, ease: "easeOut" }}
        style={{
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <motion.div
          className="text-gold-500 font-mono mt-[clamp(1.2rem,2vw,1.8rem)] mb-[clamp(0.7rem,1.5vw,1.3rem)] tracking-wider flex items-center justify-center flex-wrap gap-x-2 gap-y-1 hero-badge"
          style={{
            fontSize: textSizes.badge,
            minWidth: "100%",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reducedMotion ? 0 : 0.25 }}
        >
          <Sword
            size={14}
            className="inline mr-1 opacity-80 landscape:hidden"
            aria-hidden="true"
          />
          <span className="bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400 bg-clip-text text-transparent animate-pulse-slow">
            THINK DEEPER • MOVE QUIETER
          </span>
          <BookOpen
            size={14}
            className="inline ml-1 opacity-80 xs:inline hidden landscape:inline"
            aria-hidden="true"
          />
          <span className="hidden xs:inline landscape:inline">
            • STRIKE HARDER
          </span>
        </motion.div>

        <motion.h1
          className="font-extrabold text-white leading-[1.1] tracking-tight font-serif mb-[clamp(0.7rem,1.5vw,1.3rem)] hero-headline"
          style={{
            fontSize: textSizes.headline,
            minHeight: "2.2em",
          }}
        >
          Your Business Has <span className="text-gold-500">Hidden Leaks</span>{" "}
          - <br className="hidden xs:inline" />I{" "}
          <span className="text-gold-500">Find & Fix</span> Them
        </motion.h1>

        <motion.p
          className="text-gray-300 max-w-3xl mx-auto mb-6 md:mb-10 hero-subhead"
          style={{
            fontSize: textSizes.subhead,
            minHeight: "3.6em",
          }}
        >
          Most entrepreneurs <span className="line-through">waste years</span>{" "}
          guessing why they're not scaling. I{" "}
          <span className="text-gold-500 font-semibold">expose</span> your{" "}
          <span className="text-gold-500 font-semibold">cash drains</span> so
          you can <span className="text-gold-500 font-semibold">dominate faster</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-[clamp(0.8rem,2vw,1.3rem)] w-full"
          style={{
            minHeight: "3.5rem",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reducedMotion ? 0 : 0.85 }}
        >
          <a
            href="/case-study"
            className="inline-flex items-center justify-center px-[clamp(1.4rem,4.5vw,1.9rem)] py-[clamp(0.7rem,2.5vw,1.1rem)] bg-gold-600 hover:bg-gold-700 text-white rounded-sm transition-all duration-300 font-bold w-full sm:w-auto focus-visible:ring-2 focus-visible:ring-gold-500 focus:outline-none hero-cta"
            style={{ fontSize: textSizes.cta }}
            aria-label="Show me how"
          >
            Show Me How{" "}
            <ArrowRight size={16} className="ml-2 opacity-90" aria-hidden="true" />
          </a>
        </motion.div>

        <motion.blockquote
          className="mt-[clamp(1.5rem,4vw,2.8rem)] text-gray-500/90 italic tracking-wider px-2 hero-quote"
          style={{
            fontSize: textSizes.quote,
            minHeight: "2em",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reducedMotion ? 0 : 1.05 }}
        >
          "All things rise in silence, then roar." —{" "}
          <cite className="text-gold-500/90 not-italic">Erzion Shade</cite>
        </motion.blockquote>
      </motion.div>

      <motion.div
        className="absolute bottom-5 right-5 opacity-[0.04] font-black text-gold-500 select-none z-0 pointer-events-none will-change-transform"
        style={{
          fontSize: textSizes.dragonChar,
          right: "1.25rem",
          bottom: "1.25rem",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ delay: reducedMotion ? 0 : 1.3 }}
        aria-hidden="true"
      >
        龍
      </motion.div>

      <style jsx global>{`
        @font-face {
          font-display: swap;
        }

        @media (max-width: 360px) {
          .hero-badge span {
            display: inline-block;
            margin-top: 0.2rem;
          }
          .hero-headline {
            min-height: 3em !important;
          }
          .hero-subhead {
            line-height: 1.4;
            min-height: 4.2em !important;
          }
        }

        @media (max-width: 299px) {
          section {
            min-height: 110dvh !important;
            padding-top: 15dvh !important;
            padding-bottom: 15dvh !important;
          }
          .hero-badge {
            display: none !important;
          }
          .hero-headline {
            transform: translateY(20%) !important;
          }
          .hero-subhead {
            transform: translateY(20%) !important;
          }
        }

        @media (orientation: landscape) and (max-height: 600px) {
          .hero-badge {
            margin-top: 0.8rem !important;
            margin-bottom: 0.5rem !important;
          }
          .hero-headline {
            min-height: 1.8em !important;
          }
          .hero-subhead {
            min-height: 2.5em !important;
            margin-bottom: 0.8rem !important;
          }
          .hero-cta {
            padding-top: 0.6rem !important;
            padding-bottom: 0.6rem !important;
          }
          .hero-quote {
            margin-top: 1rem !important;
          }
        }

        .will-change-transform {
          backface-visibility: hidden;
          transform: translateZ(0);
        }
      `}</style>
    </section>
  );
} 