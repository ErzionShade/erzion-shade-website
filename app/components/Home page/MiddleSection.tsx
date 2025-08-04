"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sword, BookOpen, ArrowRight } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

export default function Experiment() {
  const { scrollYProgress } = useScroll();
  const parchmentY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ENHANCED RESPONSIVE HANDLING
  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768 || (width >= 768 && width <= 1024 && window.matchMedia("(orientation: portrait)").matches));
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    checkMobile();

    const handleMediaChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkMobile, 100);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    window.addEventListener("resize", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // OPTIMIZED ANIMATION VARIANTS
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        when: "beforeChildren",
        duration: reducedMotion ? 0 : 0.4
      }
    }
  }), [reducedMotion]);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: reducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0 : 0.4,
        ease: "easeOut"
      }
    }
  }), [reducedMotion]);

  // FLUID TYPOGRAPHY CONFIG
  const textSizes = {
    headline: "clamp(1.5rem, 4vw, 2.5rem)",
    wisdomLine: "clamp(1rem, 2vw, 1.25rem)",
    quote: "clamp(1.25rem, 4vw, 2.25rem)",
    cta: "clamp(1rem, 1.5vw, 1.25rem)"
  };

  const wisdomLines = useMemo(() => [    
    "1. Scaling isn't about working harder - it's about fixing the leaks draining your cash",
    "2. The 1% don't 'hustle' – they identify, then systematically seal every leak to print wealth on demand, effortlessly.",
    "3. A 5% leak in your funnel = 95% of your 'why am I not scaling?' frustration",  
    "4. The fastest way to $10M ? Stop acquiring - start optimizing what you already have",
    "5. Wi-FI wealth isn't luck - it's engineering through clarity and fixing what leaking",
    "6. The growth belongs to those who stop overthinking and think clearly",
  ], []);

  return (
    <section className="relative min-h-[80dvh] bg-black overflow-hidden">
      {/* DYNAMIC BACKGROUND LAYER */}
      <motion.div
        className="absolute inset-0 z-0 opacity-[0.03] saturate-0 brightness-[0.3] will-change-transform"
        style={{
          backgroundImage: "url('/ancient-paper.png')",
          backgroundSize: "cover",
          transform: reducedMotion ? undefined : parchmentY,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 pt-[clamp(2dvh,5vw,10dvh)] pb-[clamp(10dvh,15vw,20dvh)] px-[clamp(1rem,5vw,2rem)] max-w-[min(90rem,95vw)] mx-auto">
        {/* WISDOM SECTION */}
        <motion.div
          className="my-0 md:my-[clamp(1rem,5vw,3.75rem)] pb-[clamp(1.5rem,4vw,3rem)] border-b border-gold-500/30 bg-black/30 backdrop-blur-sm will-change-transform"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-100px", once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.4 }}
        >
          <h2 className="text-gold-500 font-serif text-[clamp(1.5rem,4vw,2.5rem)] mb-[clamp(1.5rem,4vw,2rem)] flex items-center">
            <Sword 
              className="mr-[clamp(0.75rem,2vw,1rem)]" 
              size={isMobile ? 24 : 28} 
              aria-hidden="true" 
            />
            What Top 1% Know About Scaling
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {wisdomLines.map((line, i) => (
              <motion.p
                key={i}
                className="text-white my-[clamp(1rem,3vw,1.5rem)] pl-[clamp(1.5rem,4vw,2rem)] border-l border-gold-500/50 will-change-transform"
                style={{ fontSize: textSizes.wisdomLine }}
                variants={itemVariants}
                custom={i}
              >
                {line}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.4 }}
          className="text-center mt-[clamp(2rem,8vw,5rem)]"
        >
          <blockquote 
            className="text-gold-400 mb-[clamp(2rem,6vw,3rem)] leading-tight font-serif px-4"
            style={{ 
              fontSize: textSizes.quote,
              fontFamily: "'Playfair Display', serif" 
            }}
          >
            Markets don't follow chaos - Markets follow clarity
          </blockquote>
          
          <motion.a
            href="/principles"
            className="inline-flex items-center justify-center px-[clamp(1.5rem,4vw,2rem)] py-[clamp(0.75rem,2vw,1rem)] bg-gold-600 hover:bg-gold-700 text-white rounded-md transition-all duration-200 font-bold mx-auto w-full max-w-[clamp(16rem,50vw,24rem)] will-change-transform"
            style={{ fontSize: textSizes.cta }}
            whileHover={reducedMotion ? {} : { scale: 1.03 }}
            whileTap={reducedMotion ? {} : { scale: 0.98 }}
            aria-label="Explore business principles"
          >
            Explore Principles 
            <ArrowRight 
              size={20} 
              className="ml-[clamp(0.5rem,1.5vw,0.75rem)]" 
              aria-hidden="true" 
            />
          </motion.a>
        </motion.div>
      </div>

      {/* RESPONSIVE FIXES */}
      <style jsx global>{`
        /* SMALL PHONES */
        @media (max-width: 360px) {
          .wisdom-line {
            line-height: 1.4;
          }
        }
        
        /* TABLET PORTRAIT OPTIMIZATION */
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
          section {
            min-height: 90dvh !important;
          }
        }
        
        /* LANDSCAPE MOBILE */
        @media (max-width: 900px) and (orientation: landscape) {
          section {
            min-height: 100dvh !important;
          }
        }
        
        /* 8K+ SCREENS */
        @media (min-width: 7680px) {
          .quote-text {
            font-size: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}  