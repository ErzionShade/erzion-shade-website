"use client";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function ValueOfWisdom() {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 py-24 bg-cover bg-fixed"
      style={{
        backgroundImage: "url('/textures/dark-parchment.jpg')",
        backgroundBlendMode: "multiply",
        backgroundColor: "rgba(14, 12, 10, 0.92)",
      }}
    >
      <div className="max-w-8xl w-full flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* LEFT SIDE TEXT - MORE CINEMATIC */}
        <div className="lg:w-1/2 space-y-8 text-left">
           <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.15] tracking-tight">
    <span className="block">I never speak</span>
    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400">
      to impress.
    </span>
  </h2>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white/90 leading-snug mb-8">
              I speak to remind what you <br className="hidden sm:block" />
              <span className="italic">already forgot.</span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.5 }}
            className="space-y-6 border-l-2 border-amber-400/30 pl-6"
          >
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              I learned a lot building in silence.
              <br />
              I felt loneliness but still moved with  <span className="text-amber-200">purpose</span>.
            </p>

            <p className="text-lg md:text-xl text-gray-400/90 italic pt-2">
              "Not everything loud is truth.
              <br />
              Not everything quiet is weak."
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE - MORE DRAMATIC PRESENTATION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:w-1/2 flex flex-col items-center justify-center relative"
        >
          <div className="relative group">
            {/* GLOW EFFECT */}
            <div className="absolute inset-0 rounded-full bg-amber-400/10 blur-xl group-hover:bg-amber-400/20 transition-all duration-1000"></div>
            
            {/* BOOK ICON WITH ANIMATION */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <BookOpen className="w-24 h-24 text-amber-300/90 mb-8" strokeWidth={1.5} />
            </motion.div>
          </div>

          {/* POETIC TEXT WITH STAGGERED ANIMATION */}
          <div className="text-center max-w-md mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-2xl md:text-3xl font-medium text-amber-200/90 leading-relaxed mb-6"
            >
              The deepest truths aren't spoken —
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-amber-100/80 italic"
            >
              they're remembered in silence.
            </motion.p>
          </div>

         
        </motion.div>
      </div>
    </section>
  );
}