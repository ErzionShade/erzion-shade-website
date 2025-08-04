"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Fluid typography system
  const textSizes = {
    heading: "clamp(2.5rem, 6vw, 4rem)",
    body: "clamp(1rem, 1.5vw, 1.25rem)",
    signature: "clamp(0.75rem, 1vw, 0.875rem)"
  };

  const lines = [
    "I had no supporters.",
    "No lights.",
    "No freedom.",
    "",
    "I walked through years of noise just to understand the beauty of being unheard.",
    "",
    "People laughed.",
    "People left.",
    "People doubted.",
    "",
    "But silence...",
    "It never betrayed me.",
    "It taught me how to move like a ghost, build like a shadow, and speak only when the world needed to listen.",
  ];

  return (
    <section 
      ref={ref}
      className="min-h-[100dvh] flex items-center justify-center bg-black text-white px-[clamp(1rem,5vw,2rem)] py-[clamp(3rem,8vw,5rem)] relative overflow-hidden"
    >
      {/* Optimized background elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{
            backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
            backgroundSize: "cover"
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="max-w-[min(90rem,95vw)] text-center space-y-[clamp(1rem,3vw,1.5rem)] relative z-10">
        {/* Headline with perfect scaling */}
        <motion.h2
          className="font-bold tracking-tighter"
          style={{
            fontSize: textSizes.heading,
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: "-0.05em",
            lineHeight: 0.9
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          THIS IS WHERE <span className="text-amber-400">SILENCE</span> TOOK ME
        </motion.h2>

        {/* Animated text lines */}
        <motion.div
          className="text-white/80 space-y-[clamp(0.5rem,1.5vw,1rem)] max-w-[min(100%,60rem)] mx-auto"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            fontSize: textSizes.body
          }}
        >
          {lines.map((line, index) => (
            <motion.p
              key={index}
              className="leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              {line || <br />}
            </motion.p>
          ))}
        </motion.div>

        {/* Signature with fluid sizing */}
        <motion.div
          className="pt-[clamp(2rem,6vw,3rem)]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: lines.length * 0.1 + 0.3, duration: 0.8 }}
        >
          <div className="w-[clamp(4rem,10vw,6rem)] h-px bg-amber-400 mx-auto mb-[clamp(0.5rem,1.5vw,1rem)]" />
          <p 
            className="text-amber-400/80 font-light tracking-widest"
            style={{ fontSize: textSizes.signature }}
          >
            THE SILENT BUILDER
          </p>
        </motion.div>
      </div>

      {/* RESPONSIVE TWEAKS */}
      <style jsx global>{`
        /* SMALL PHONES */
        @media (max-width: 360px) {
          .text-line {
            font-size: 1rem !important;
          }
        }
        
        /* TABLET PORTRAIT */
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
          section {
            padding-top: 4rem !important;
          }
        }
        
        /* ULTRA-WIDE SCREENS */
        @media (min-width: 2000px) {
          .content-container {
            max-width: 80rem !important;
          }
        }
      `}</style>
    </section>
  );
}