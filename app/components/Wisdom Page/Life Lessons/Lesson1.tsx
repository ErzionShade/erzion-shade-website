"use client";
import { motion } from "framer-motion";
import { ScrollText, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";

export default function LifeLessons() {
  const lessons = useMemo(
    () => [
      {
        id: 1,
        title: "SILENCE ISN'T WEAKNESS",
        subtitle: "It's the most underestimated strategy",
        text: "There were years I had no voice. No support. No spotlight. Yet in that silence... I studied. I watched. I grew. Most break down in the dark. I became something else.",
        scrollText: [
          "When you're silent, the world assumes you're weak. Let them believe it.",
          "Silence isn't absence — it's preparation. The sharpening of the blade.",
          "I didn't just stay silent — I used it to gather everything. Knowledge. Power. Patience.",
          "One day, they'll realize: The quietest one was building an empire.",
        ],
        align: "left",
      },
      {
        id: 2,
        title: "LONELINESS TEACHES",
        subtitle: "What comfort never will",
        text: "Comfort keeps you asleep, but loneliness wakes your soul. In isolation, your inner voice becomes deafening. Your patterns become clear. Your purpose sharpens.",
        image: "/loneliness-warrior.png",
        imageAlt: "Warrior standing alone in darkness",
        align: "right",
      },
      {
        id: 3,
        title: "PAIN REVEALS",
        subtitle: "Your real voice",
        text: "Most people speak from comfort. But your true voice is born when broken. Pain strips away the ego, the mask, the noise — what remains is raw truth. Walk through fire, then speak.",
        align: "center",
        theme: "dark",
      },
      {
        id: 4,
        title: "ANGER ISN'T THE ENEMY",
        subtitle: "Suppression is",
        text: "They told you to 'stay calm' but never taught you to understand rage. Anger is fuel. Suppressed, it becomes poison. Controlled, it becomes power.",
        symbol: "怒",
        align: "left",
      },
      {
        id: 5,
        title: "THE WORLD HATES",
        subtitle: "What it can't control",
        text: "When you stop following — they call you 'dangerous'. When you think different — you're a 'threat'. Not because you're wrong. But because you're free.",
        align: "center",
        theme: "glow",
      },
      {
        id: 6,
        title: "KNOWLEDGE ISN'T POWER",
        subtitle: "Applied knowledge is",
        text: "Information in your head is weight — not power. The moment you act on it — the world bends. You don't grow by knowing. You grow by doing.",
        align: "split",
      },
      {
        id: 7,
        title: "BUILD NOW",
        subtitle: "Shine later",
        text: "The world doesn't applaud effort until results are visible. Builders remain invisible during the grind. Shine is never the goal — legacy is.",
        image: "/build-now.png",
        imageAlt: "Builder working in shadows",
        align: "right",
      },
    ],
    []
  );

  // Enhanced motion variants with reduced motion support
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hiddenLeft: { opacity: 0, x: -40 },
    hiddenRight: { opacity: 0, x: 40 },
    hiddenUp: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }), []);

  return (
    <div className="bg-black text-white antialiased" style={{ textRendering: "optimizeLegibility" }}>
      {/* Section divider */}
      <section className="w-full bg-[#0b0b0b] border-t border-neutral-800" aria-hidden="true" />
      
      {/* Hero section with fluid typography */}
      <div className="py-[clamp(5rem,10vw,6rem)] px-[clamp(1rem,5vw,2rem)] text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-50px" }}
          className="text-[clamp(2rem,5vw,3.75rem)] font-bold tracking-tight text-white will-change-transform"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
        >
          7 Life Lessons I Learned from Silence
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-gray-200 text-[clamp(1rem,1.25vw,1.125rem)] max-w-[clamp(20rem,70vw,50rem)] mx-auto will-change-transform"
          style={{ fontWeight: 450 }}
        >
          I used to be broke, chasing dopamine in chaos. These lessons shaped me. My{" "}
          <a 
            href="/programs/principles" 
            className="text-yellow-500 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded"
            style={{ fontWeight: 500 }}
          >
            Core Principles
          </a>{" "}
          and{" "}
          <a 
            href="/case-study" 
            className="text-yellow-500 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded"
            style={{ fontWeight: 500 }}
          >
            Case Studies
          </a>{" "}
          will shape your empire.
        </motion.p>
      </div>

      {/* Lessons grid */}
      {lessons.map((lesson) => (
        <section
          key={lesson.id}
          className={`py-[clamp(3rem,8vw,6rem)] border-t border-neutral-800 ${
            lesson.theme === "dark" 
              ? "bg-[#0d0d0d]" 
              : lesson.theme === "glow" 
                ? "bg-black relative overflow-hidden" 
                : "bg-[#0c0c0c]"
          }`}
        >
          {/* Glow effect for theme */}
          {lesson.theme === "glow" && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.03 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-transform"
              aria-hidden="true"
            >
              <span className="text-[clamp(8rem,20vw,18rem)] font-black tracking-widest text-yellow-500/50">
                CONTROL
              </span>
            </motion.div>
          )}

          <div
            className={`max-w-[min(90rem,95vw)] mx-auto px-[clamp(1rem,5vw,2rem)] ${
              lesson.align === "center"
                ? "max-w-[min(60rem,90vw)]"
                : lesson.align === "split"
                ? "grid md:grid-cols-2 gap-[clamp(1rem,3vw,3rem)] items-center"
                : "flex flex-col md:flex-row gap-[clamp(1rem,3vw,3rem)] items-start"
            }`}
          >
            {/* Left aligned content */}
            {lesson.align === "left" && (
              <>
                <motion.div
                  initial="hiddenLeft"
                  whileInView="visible"
                  variants={itemVariants}
                  viewport={{ once: true, margin: "-50px" }}
                  className="md:w-1/2 space-y-[clamp(1rem,2vw,1.5rem)] will-change-transform"
                >
                  <span className="text-yellow-500 font-mono tracking-wider text-[clamp(0.75rem,1vw,0.875rem)]">
                    LESSON #{lesson.id}
                  </span>
                  <h2 
                    className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-tight"
                    style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
                  >
                    {lesson.title}
                    <br />
                    <span className="text-yellow-500">{lesson.subtitle}</span>
                  </h2>
                  <p 
                    className="text-gray-200 text-[clamp(1rem,1.1vw,1.125rem)] leading-relaxed"
                    style={{ fontWeight: 450 }}
                  >
                    {lesson.text}
                  </p>
                </motion.div>

                {/* Scroll text or symbol */}
                {lesson.scrollText && (
                  <>
                    <div className="hidden md:block w-px bg-yellow-700/30 h-[clamp(10rem,20vw,16rem)] my-4" aria-hidden="true" />
                    <motion.div
                      initial="hiddenRight"
                      whileInView="visible"
                      variants={itemVariants}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: 0.2 }}
                      className="md:w-1/2 bg-[url('/textures/parchment-scroll.png')] bg-cover bg-center rounded-xl p-[clamp(1rem,2vw,2rem)] border border-yellow-700/30 shadow-lg will-change-transform"
                    >
                      <div className="flex items-center gap-2 mb-[clamp(0.5rem,1vw,1rem)] text-yellow-400">
                        <ScrollText className="h-5 w-5" aria-hidden="true" />
                        <span className="font-semibold tracking-widest text-[clamp(0.75rem,1vw,0.875rem)]">
                          CODEX ENTRY
                        </span>
                      </div>
                      <div 
                        className="space-y-[clamp(0.5rem,1vw,1rem)] text-gray-100 leading-relaxed"
                        style={{ fontWeight: 450 }}
                      >
                        {lesson.scrollText.map((line, i) => (
                          <p key={i} className="text-[clamp(0.875rem,1.1vw,1rem)]">{line}</p>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}

                {lesson.symbol && (
                  <motion.div
                    initial="hiddenRight"
                    whileInView="visible"
                    variants={itemVariants}
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex justify-center w-full md:w-auto mt-[clamp(2rem,4vw,3rem)] md:mt-0"
                  >
                    <div
                      className="w-[clamp(8rem,20vw,10rem)] h-[clamp(8rem,20vw,10rem)] bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center shadow-xl shadow-red-900/30 will-change-transform"
                      aria-hidden="true"
                    >
                      <span className="text-[clamp(3rem,8vw,4rem)] text-black font-bold">
                        {lesson.symbol}
                      </span>
                    </div>
                  </motion.div>
                )}
              </>
            )}

            {/* Right aligned content */}
            {lesson.align === "right" && (
              <>
                <motion.div
                  initial="hiddenRight"
                  whileInView="visible"
                  variants={itemVariants}
                  viewport={{ once: true, margin: "-50px" }}
                  className="md:w-1/2 order-2 md:order-1 space-y-[clamp(1rem,2vw,1.5rem)] will-change-transform"
                >
                  <span className="text-yellow-500 font-mono tracking-wider text-[clamp(0.75rem,1vw,0.875rem)]">
                    LESSON #{lesson.id}
                  </span>
                  <h2 
                    className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-tight"
                    style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
                  >
                    {lesson.title}
                    <br />
                    <span className="text-yellow-500">{lesson.subtitle}</span>
                  </h2>
                  <p 
                    className="text-gray-200 text-[clamp(1rem,1.1vw,1.125rem)] leading-relaxed"
                    style={{ fontWeight: 450 }}
                  >
                    {lesson.text}
                  </p>
                </motion.div>

                {lesson.image && (
                  <motion.div
                    initial="hiddenLeft"
                    whileInView="visible"
                    variants={itemVariants}
                    viewport={{ once: true, margin: "-50px" }}
                    className="md:w-1/2 order-1 md:order-2 will-change-transform"
                  >
                    <div className="relative aspect-square rounded-xl overflow-hidden border border-neutral-700">
                      <Image
                        src={lesson.image}
                        alt={lesson.imageAlt || "Lesson illustration"}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority={lesson.id === 2 || lesson.id === 7}
                      />
                    </div>
                  </motion.div>
                )}
              </>
            )}

            {/* Center aligned content */}
            {lesson.align === "center" && (
              <motion.div
                initial="hiddenUp"
                whileInView="visible"
                variants={itemVariants}
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-[clamp(1rem,2vw,1.5rem)] will-change-transform text-center"
              >
                <span className="text-yellow-500 font-mono tracking-wider text-[clamp(0.75rem,1vw,0.875rem)]">
                  LESSON #{lesson.id}
                </span>
                <h2 
                  className="text-[clamp(1.75rem,4vw,3rem)] font-bold"
                  style={{ 
                    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                    letterSpacing: "-0.5px"
                  }}
                >
                  {lesson.title}
                  <br />
                  <span className="text-yellow-500">{lesson.subtitle}</span>
                </h2>
                <p 
                  className="text-gray-200 text-[clamp(1rem,1.25vw,1.125rem)] leading-relaxed max-w-[clamp(20rem,70vw,50rem)] mx-auto"
                  style={{ fontWeight: 450 }}
                >
                  {lesson.text}
                </p>
              </motion.div>
            )}

            {/* Split layout */}
            {lesson.align === "split" && (
              <>
                <motion.div
                  initial="hiddenLeft"
                  whileInView="visible"
                  variants={itemVariants}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-[clamp(1rem,2vw,1.5rem)] will-change-transform"
                >
                  <span className="text-yellow-500 font-mono tracking-wider text-[clamp(0.75rem,1vw,0.875rem)]">
                    LESSON #{lesson.id}
                  </span>
                  <h2 
                    className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold"
                    style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
                  >
                    {lesson.title}
                    <br />
                    <span className="text-yellow-500">{lesson.subtitle}</span>
                  </h2>
                  <p 
                    className="text-gray-200 text-[clamp(1rem,1.1vw,1.125rem)] leading-relaxed"
                    style={{ fontWeight: 450 }}
                  >
                    {lesson.text}
                  </p>
                </motion.div>

                <motion.div
                  initial="hiddenRight"
                  whileInView="visible"
                  variants={itemVariants}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.2 }}
                  className="p-[clamp(1rem,2vw,2rem)] rounded-xl bg-[#141414] border border-neutral-800 shadow-inner shadow-yellow-500/10 text-center will-change-transform"
                >
                  <p className="text-yellow-500 text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-widest animate-pulse">
                    APPLIED
                  </p>
                  <p className="text-gray-200 mt-[clamp(0.5rem,1vw,1rem)] text-[clamp(0.75rem,1vw,0.875rem)] uppercase tracking-wider">
                    Weapon of Silent Builders
                  </p>
                </motion.div>
              </>
            )}
          </div>
        </section>
      ))}

      {/* CTA section */}
      <section className="py-[clamp(3rem,8vw,6rem)] border-t border-neutral-800 text-center">
        <motion.a
          href="/newsletter"
          className="inline-flex items-center justify-center px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(0.75rem,1.5vw,1rem)] bg-yellow-600 hover:bg-yellow-700 text-black rounded-md text-[clamp(1rem,1.1vw,1.125rem)] font-bold mx-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 ring-offset-black transition-colors will-change-transform"
          initial="hiddenUp"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true, margin: "-50px" }}
          style={{ 
            textRendering: "optimizeLegibility",
            textShadow: "0 1px 1px rgba(0,0,0,0.1)"
          }}
        >
          Get Weekly Insights <ArrowRight size={18} className="ml-2" aria-hidden="true" />
        </motion.a>
      </section>

      {/* RESPONSIVE TWEAKS */}
      <style jsx global>{`
        /* SMALL PHONES */
        @media (max-width: 360px) {
          .lesson-text {
            font-size: 0.95rem !important;
          }
          
          .lesson-title {
            font-size: 1.5rem !important;
          }
        }
        
        /* TABLET PORTRAIT */
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
          .lesson-container {
            padding-top: 4rem !important;
            padding-bottom: 4rem !important;
          }
        }
        
        /* ULTRA-WIDE SCREENS */
        @media (min-width: 2000px) {
          .content-container {
            max-width: 80rem !important;
          }
        }
      `}</style>
    </div>
  );
}  