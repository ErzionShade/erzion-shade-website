"use client";
import { motion, useInView } from "framer-motion";
import { BookOpenCheck, Target, PenTool } from "lucide-react";
import { useRef } from "react";

export default function Strategy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Fluid typography system
  const textSizes = {
    heading: "clamp(2.5rem, 5vw, 3.5rem)",
    subheading: "clamp(1.1rem, 1.5vw, 1.25rem)",
    cardTitle: "clamp(1.25rem, 2vw, 1.5rem)",
    cardText: "clamp(1rem, 1.25vw, 1.1rem)"
  };

  return (
    <section 
      ref={ref}
      className="w-full py-[clamp(5rem,8vw,7rem)] px-[clamp(1rem,5vw,2.5rem)] bg-[#0c0c0c] text-white overflow-hidden"
    >
      <div className="max-w-[min(90rem,95vw)] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-bold mb-[clamp(1rem,2vw,1.5rem)]"
          style={{ 
            fontSize: textSizes.heading,
            fontFamily: "'Bebas Neue', sans-serif",
            lineHeight: 1.1
          }}
        >
          How I Forged Strategy From Silence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
          className="text-zinc-300 mb-[clamp(2rem,5vw,3rem)] mx-auto"
          style={{ 
            fontSize: textSizes.subheading,
            fontFamily: "'Inter', sans-serif", 
            fontWeight: 300,
            maxWidth: "min(100%, 60rem)",
            lineHeight: 1.5
          }}
        >
          Doubt. Dismissal. Dead silence. No one listened - and dreams echoed into nothing.
          That's where I forged mindset. That's where pain became purpose.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-[clamp(1rem,3vw,1.5rem)] text-left">
          {[
            {
              icon: <BookOpenCheck className="h-10 w-10 text-emerald-400 mb-4" />,
              title: "Pain Became My Teacher",
              text: "The silent nights taught me more than any book ever could. I listened to my soul and wrote my own manual.",
              border: "hover:border-emerald-400/20"
            },
            {
              icon: <Target className="h-10 w-10 text-cyan-400 mb-4" />,
              title: "Silence Became My Strategy",
              text: "I stopped explaining and started executing. I stopped reacting and began building — in silence, with focus.",
              border: "hover:border-cyan-400/20"
            },
            {
              icon: <PenTool className="h-10 w-10 text-yellow-400 mb-4" />,
              title: "Words Became My Weapon",
              text: "Words became my escape, then my weapon. Each sentence was a sword, carving a path from nothing to something.",
              border: "hover:border-yellow-400/20"
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: 0.3 + (index * 0.15), 
                duration: 0.5, 
                ease: "easeOut" 
              }}
              className={`bg-[#1a1a1a] p-[clamp(1.25rem,3vw,1.5rem)] rounded-xl border border-white/5 ${card.border} transition-all duration-300 will-change-transform`}
            >
              {card.icon}
              <h3 
                className="font-semibold mb-[clamp(0.5rem,1vw,0.75rem)]" 
                style={{ 
                  fontSize: textSizes.cardTitle,
                  fontFamily: "'Bebas Neue', sans-serif"
                }}
              >
                {card.title}
              </h3>
              <p 
                className="text-zinc-400" 
                style={{ 
                  fontSize: textSizes.cardText,
                  fontFamily: "'Inter', sans-serif", 
                  fontWeight: 300,
                  lineHeight: 1.5
                }}
              >
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RESPONSIVE TWEAKS */}
      <style jsx global>{`
        /* SMALL PHONES */
        @media (max-width: 360px) {
          .strategy-card {
            padding: 1rem !important;
          }
          
          .strategy-icon {
            height: 8vw !important;
            width: 8vw !important;
            margin-bottom: 0.75rem !important;
          }
        }
        
        /* TABLET PORTRAIT */
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
          section {
            padding-top: 6rem !important;
            padding-bottom: 6rem !important;
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