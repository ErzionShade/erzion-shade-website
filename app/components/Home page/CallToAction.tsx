"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageSquare, BookOpen, Sparkles } from "lucide-react";
import { useMemo } from "react";

export default function StarterCTA() {
  const prefersReducedMotion = useReducedMotion();

  // Memoized CTAs with fluid sizing
  const ctas = useMemo(() => [
    {
      title: "Contact Me",
      icon: <MessageSquare className="text-gold-500" size={28} />,
      href: "/Contact",
      text: "I'll analyze weak points in your business and fix them.",
      button: "Let's talk",
      buttonStyle: "bg-gradient-to-br from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black",
      ariaLabel: "Request a free business consultation",
    },
    {
      title: "Business Scaling Secrets",
      icon: <BookOpen className="text-gold-500" size={28} />,
      href: "/newsletter",
      text: "Uncover the precise strategies & leak-proofing secrets the 1% use to dominate quietly.",
      button: "Get Insights",
      buttonStyle: "bg-gradient-to-br from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-black",
      ariaLabel: "Subscribe to weekly business insights newsletter",
    },
  ], []);

  // Optimized animations
  const cardVariants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        type: prefersReducedMotion ? false : "spring", 
        damping: 20, 
        stiffness: 100 
      }
    }
  };

  return (
    <section className="relative py-[clamp(5rem,10vw,7rem)] bg-black border-t border-gold-500/20">
      <div className="max-w-[min(90rem,95vw)] mx-auto px-[clamp(1rem,5vw,1.5rem)]">
        {/* HEADLINE SECTION */}
        <motion.div
          className="text-center mb-[clamp(2rem,8vw,5rem)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <Sparkles className="text-gold-500" size={24} />
            <span className="text-gold-500 font-mono text-[clamp(0.65rem,1vw,0.8rem)] tracking-[0.35em]">
              TAKE ACTION
            </span>
            <Sparkles className="text-gold-500" size={24} />
          </div>
          
          <motion.h2 
            className="text-[clamp(1.75rem,5vw,3rem)] font-bold text-white mb-6 leading-[1.1]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to fix your <span className="text-red-600 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">cash leaks</span>?
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 text-[clamp(0.9rem,1.5vw,1.125rem)] max-w-[clamp(20rem,70vw,50rem)] mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            No fluff. Just <span className="text-gold-400 font-medium">actionable steps</span> to grow your business.
          </motion.p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-2 gap-[clamp(1rem,3vw,2rem)] max-w-[min(80rem,90vw)] mx-auto">
          {ctas.map((cta, i) => (
            <motion.div
              key={i}
              className="group relative bg-gradient-to-b from-black/80 to-black/50 border border-gold-500/20 p-[clamp(1rem,3vw,2rem)] rounded-xl transition-all duration-300 will-change-transform"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-[clamp(0.75rem,2vw,1.25rem)] mb-[clamp(1rem,3vw,1.5rem)]">
                  <div className="p-[clamp(0.5rem,1.5vw,0.75rem)] bg-gold-500/10 rounded-lg backdrop-blur-sm">
                    {cta.icon}
                  </div>
                  <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold text-white">
                    {cta.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 text-[clamp(0.875rem,1.25vw,1rem)] mb-[clamp(1rem,3vw,2rem)] leading-relaxed flex-grow">
                  {cta.text}
                </p>
                
                <a
                  href={cta.href}
                  className={`inline-flex items-center justify-center gap-2 w-full ${cta.buttonStyle} font-semibold px-[clamp(1rem,3vw,1.5rem)] py-[clamp(0.75rem,2vw,1rem)] rounded-lg text-[clamp(0.875rem,1.25vw,1rem)] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-gold-500 focus:outline-none`}
                  aria-label={cta.ariaLabel}
                >
                  {cta.button}
                  {!prefersReducedMotion && (
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="ml-1" size={18} />
                    </motion.span>
                  )}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <motion.p
          className="text-center text-gray-400/80 text-[clamp(0.7rem,1.25vw,0.875rem)] mt-[clamp(2rem,8vw,5rem)] tracking-wide flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {!prefersReducedMotion ? (
            <>
              <motion.span
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✦
              </motion.span>
              No pressure. No complicated strategies. Just real help getting started.
              <motion.span
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                ✦
              </motion.span>
            </>
          ) : (
            "No pressure. No complicated strategies. Just real help getting started."
          )}
        </motion.p>
      </div>

      {/* RESPONSIVE TWEAKS */}
      <style jsx global>{`
        /* SMALL PHONES */
        @media (max-width: 360px) {
          .cta-card {
            padding: 1rem !important;
          }
          
          .cta-button {
            padding: 0.75rem 1rem !important;
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
          .cta-grid {
            max-width: 70rem !important;
          }
        }
      `}</style>
    </section>
  );
}