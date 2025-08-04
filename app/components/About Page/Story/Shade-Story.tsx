"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function StoryHero() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Optimized resize handler with debounce
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 100);
    };
    
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Dynamic parallax with reduced motion consideration
  const yBg = useTransform(
    scrollYProgress, 
    [0, 1], 
    ["0%", isMobile ? "12%" : "25%"]
  );
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0.4]);

  // Fluid typography system
  const textSizes = {
    badge: "clamp(0.7rem, 1.25vw + 0.5rem, 0.9rem)",
    headline: "clamp(2.2rem, 7vw + 0.5rem, 5rem)", // Adjusted min size
    subhead: "clamp(1.2rem, 2.8vw + 0.5rem, 1.8rem)", // More balanced
    cta: "clamp(0.95rem, 1.1vw + 0.5rem, 1.15rem)",
    quote: "clamp(0.85rem, 1vw + 0.5rem, 1.05rem)",
    prompt: "clamp(0.75rem, 1vw + 0.5rem, 0.95rem)"
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        ref={ref}
        className="relative w-full min-h-[100vh] md:min-h-[100dvh] bg-black overflow-hidden flex items-center justify-center px-[max(env(safe-area-inset-left),1.2rem)] py-[max(env(safe-area-inset-top),11rem)] md:py-[max(env(safe-area-inset-top),7rem)]"
      >
        {/* Optimized Background */}
        <motion.div 
          className="absolute inset-0 bg-[url('/story-bg.jpg')] bg-cover bg-center will-change-transform"
          style={{ y: yBg, opacity: opacityBg }}
          aria-hidden="true"
        />

        {/* Adaptive Overlay */}
        <div className="absolute inset-0 bg-black/75 md:bg-black/60" />

        {/* Content Container */}
        <div className="relative z-10 text-center w-full max-w-[min(90vw,1200px)]">
          {/* Headline with perfect scaling */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bold text-gray-100 tracking-tight drop-shadow-lg"
            style={{ 
              fontSize: textSizes.headline,
              letterSpacing: isMobile ? "-0.03em" : "-0.05em",
              lineHeight: 1.1
            }}
          >
            FROM SILENCE<br/>TO STRENGTH
          </motion.h1>

          {/* Subheading with responsive line breaks */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-4 md:mt-6 text-white/80 mx-auto leading-snug md:leading-relaxed"
            style={{
              fontSize: textSizes.subhead,
              maxWidth: "min(90vw, 600px)"
            }}
          >
            This isn't a motivational poster.<br/>
            It's raw transformation.<br/>
            From village outcast to building in public.
          </motion.p>

          {/* Scroll Prompt with adaptive animation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 md:mt-14"
          >
            <div className="flex flex-col items-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: isMobile ? 1.2 : 2,
                  ease: "easeInOut"
                }}
              >
                <ArrowDown className="text-amber-500 h-6 w-6 md:h-8 md:w-8" />
              </motion.div>
              <motion.p
                className="mt-2 text-amber-400 uppercase tracking-wider"
                style={{ fontSize: textSizes.prompt }}
              >
                Here's how I turn failure into purpose
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Beginning Section */}
      <section className={`relative min-h-[80vh] bg-gradient-to-br from-gray-900 to-black px-[max(env(safe-area-inset-left),1.2rem)] py-[max(env(safe-area-inset-top),5rem)] md:py-[max(env(safe-area-inset-top),7rem)] -mt-12 md:mt-0`}>
        <div className="relative z-10 w-full max-w-[min(90vw,1200px)] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 mb-8 md:mb-12"
          >
            <ArrowDown className="text-amber-400 h-8 w-8 md:h-10 md:w-10" />
            <motion.h2 
              className="font-bold text-white tracking-tight"
              style={{
                fontSize: textSizes.headline,
                letterSpacing: isMobile ? "-0.03em" : "-0.05em",
                lineHeight: 1.1,
                textShadow: "0 2px 4px rgba(0,0,0,0.3)"
              }}
            >
              THE BEGINNING
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-gray-300 mb-12 md:mb-16 mx-auto"
            style={{
              fontSize: textSizes.subhead,
              maxWidth: "min(90vw, 800px)",
              lineHeight: 1.3,
              fontWeight: 300,
              letterSpacing: "0.02em"
            }}
          >
            My journey starts with silence and darkness
          </motion.p>

          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="w-full md:w-2/3 text-gray-300 space-y-8" // Changed from md:w-2/3 to w-full md:w-2/3
            >
              {[
                "I was born in a small village in Bangladesh.<br />A place where dreams felt <span class='text-amber-400 font-medium'>too big</span>... and silence felt <span class='text-amber-400 font-medium'>too loud</span>.",
                "I wasn't the loud kid. I was the one <span class='text-amber-300 font-medium'>watching</span>.<br /><span class='text-amber-300 font-medium'>Thinking. Feeling.</span> Building worlds inside my mind while others laughed out loud.",
                "I didn't fit in.<br />I played games <span class='text-amber-400 font-medium'>alone</span>.<br />I questioned life <span class='text-amber-400 font-medium'>too early</span>.<br />I smiled less. But felt <span class='text-amber-300 font-medium'>everything deeper</span> than words could explain.",
                "They called me <span class='text-amber-500 font-semibold'>too quiet</span>.<br /><span class='text-amber-500 font-semibold'>Too serious. Too soft.</span><br />But I wasn't weak. I was just... <span class='text-amber-300 font-semibold'>awake</span>."
              ].map((text, index) => (
                <motion.p 
                  key={index}
                  style={{ fontSize: textSizes.subhead, lineHeight: 1.6 }}
                  className="leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}

              <motion.div
                style={{ fontSize: textSizes.subhead }}
                className="space-y-4"
              >
                <p className="text-gray-100 font-medium">
                  My <span className="text-amber-500">weakness</span> was visible to all:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-gray-300">
                  {["Couldn't speak confidently", "Froze at decisions", "Lived inside my mind"].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>

              <p className="text-[clamp(1rem,1.5vw,1.25rem)] md:text-2xl text-gray-100 leading-relaxed italic">
                The world called it <span className="text-amber-500 font-medium">weakness</span>.<br />
                I called it <span className="text-amber-300 font-medium">awareness</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.7, duration: 1 }}
              className="w-full md:w-1/3 flex justify-center mt-8 md:mt-0" // Changed from md:w-1/3 to w-full md:w-1/3
            >
              <div className="w-full max-w-xs h-80 md:h-96 bg-[url('/mask-shadow.png')] bg-cover bg-center rounded-2xl border border-gray-700 shadow-2xl shadow-amber-900/30 transform rotate-1" />
            </motion.div>
          </div>
        </div>

        {/* Visual Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="w-full h-full bg-[url('/embers.gif')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-900/10 to-transparent" />
        </div>
      </section>

      {/* Responsive Fixes */}
      <style jsx global>{`
        /* Tiny screens */
        @media (max-width: 320px) {
          .hero-headline {
            font-size: 2.2rem !important;
            word-spacing: 0 !important;
          }
          .hero-subhead {
            font-size: 1.1rem !important;
          }
        }
        
        /* Tablet portrait */
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
          .beginning-section {
            padding-top: 6rem !important;
          }
        }
        
        /* Ultra-wide screens */
        @media (min-width: 2000px) {
          .content-container {
            max-width: 80rem !important;
          }
        }
      `}</style>
    </div>
  );
}