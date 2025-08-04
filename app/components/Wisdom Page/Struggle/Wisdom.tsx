"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollText, BookOpenCheck, Quote, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function WisdomsHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 bg-[url('/noise3.png')] opacity-5"
        style={{ y: yBg, opacity: opacityBg }}
      />
      
      {/* Subtle particle animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-400"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              opacity: Math.random() * 0.3
            }}
            animate={{
              y: [null, (Math.random() * 200) + 100],
              opacity: [0.1, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Floating Quotes with enhanced animation */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none text-center text-lg md:text-xl">
        {quotes.map((quote, i) => (
          <FloatingQuote key={i} index={i} text={quote.text} position={quote.position} />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="z-10 text-center px-6 max-w-4xl"
        style={{ scale: scaleText }}
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center mb-4">
            <Sparkles className="text-amber-400 w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
  <span className="block">The world is loud.</span>
  <span className="relative block">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
      I write for those
    </span>
    <motion.span 
      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-amber-400 to-transparent w-full"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 0.8, duration: 1.5, ease: "circOut" }}
    />
  </span>
  <span className="relative block">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
      who listen in silence.
    </span>
    <motion.span 
      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-amber-300 to-transparent w-full"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 1, duration: 1.5, ease: "circOut" }}
    />
  </span>
</h1>
        </motion.div>

        <motion.p
          className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Each line here was sharpened by thought, pain, and vision.  
          <br className="hidden md:block" />
          No fluff. No trends. Just truths that won't die.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <button className="relative overflow-hidden group flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-amber-400 text-amber-400 font-semibold hover:bg-amber-400 hover:text-gray-900 transition-all duration-300">
            <span className="relative z-10 flex items-center gap-2">
              <ScrollText className="w-5 h-5" />
              Unlock The Scrolls
            </span>
            <span className="absolute inset-0 bg-amber-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </button>
          
          <button className="relative overflow-hidden group flex items-center gap-2 px-8 py-4 rounded-2xl bg-transparent text-gray-200 font-semibold hover:bg-white/5 transition-all duration-300 border border-white/10">
            <span className="relative z-10 flex items-center gap-2">
              <BookOpenCheck className="w-5 h-5" />
              Browse Archives
            </span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Supercharged FloatingQuote component
const FloatingQuote = ({ index, text, position }) => {
  const randomX = Math.random() * 20 - 10;
  const randomY = Math.random() * 20 - 10;
  
  return (
    <motion.div
      className={`absolute ${position}`}
      initial={{ 
        opacity: 0,
        x: randomX,
        y: randomY,
        rotate: Math.random() * 10 - 5
      }}
      animate={{ 
        opacity: [0, 0.7, 0],
        x: randomX + (Math.random() * 40 - 20),
        y: randomY + (Math.random() * 40 - 20),
        rotate: Math.random() * 15 - 7.5
      }}
      transition={{
        delay: index * 0.3 + 0.8,
        duration: Math.random() * 10 + 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      <Quote className="inline mr-2 w-4 h-4" />{text}
    </motion.div>
  );
};

const quotes = [
  { text: "Truth doesn't scream.", position: "top-1/4 left-10" },
  { text: "Your silence isn't weakness.", position: "bottom-1/4 right-10" },
  { text: "Legacy isn't built with noise.", position: "top-1/3 right-1/4" },
  { text: "Still waters run deep.", position: "bottom-1/3 left-1/4" },
  { text: "Wisdom whispers.", position: "top-1/5 right-1/5" },
  { text: "The loudest have the least to say.", position: "bottom-1/5 left-1/5" }
];