'use client';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useCallback, useRef } from 'react';
import gsap from 'gsap';

export default function GodTierLoader({ onFinish = () => {} }) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showEnterButton, setShowEnterButton] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const [currentMessage, setCurrentMessage] = useState("");
  const [reducedMotion, setReducedMotion] = useState(false);
  
  const controls = useAnimation();
  const borderControls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<SVGSVGElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Hype loading messages
  const loadingMessages = [
    "Entering the **MULTIVERSE**...",
    "Warping through **DIMENSIONS**...",
    "Activating **SPELL OF AGAMOTTO**...",
    "Syncing with **SACRED TIMELINE**...",
    "Decrypting **MYSTIC RUNES**...",
  ];


  // Check for reduced motion preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setReducedMotion(
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      );
    }
  }, []);

  // Initialize portal animation
  useEffect(() => {
    if (!portalRef.current || reducedMotion) return;

    const rings = {
      ring1: portalRef.current.querySelector('.portal-ring-1') as SVGPathElement,
      ring2: portalRef.current.querySelector('.portal-ring-2') as SVGPathElement
    };

    gsap.to(rings.ring1, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'linear'
    });

    gsap.to(rings.ring2, {
      rotation: -360,
      duration: 25,
      repeat: -1,
      ease: 'linear'
    });

    return () => {
      gsap.killTweensOf([rings.ring1, rings.ring2]);
    };
  }, [reducedMotion]);

  // Loading simulation with GSAP
  useEffect(() => {
    const tl = gsap.timeline();
    let messageInterval: NodeJS.Timeout;

    if (!reducedMotion) {
      tl.to({}, {
        duration: 0.25,
        repeat: 20,
        onRepeat: () => {
          setLoadingProgress((prev) => {
            const newProgress = Math.min(prev + 5, 100);
            if (newProgress === 100) {
              setTimeout(() => setShowEnterButton(true), 500);
              // Celebration effect
              gsap.to(progressRef.current, {
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.8)',
                duration: 0.5,
                yoyo: true,
                repeat: 3
              });
            }
            return newProgress;
          });
        }
      });
    } else {
      // Instant load for reduced motion
      setLoadingProgress(100);
      setShowEnterButton(true);
    }

    // Cycle loading messages with fade
    messageInterval = setInterval(() => {
      setCurrentMessage(""); // Clear first for fade effect
      setTimeout(() => {
        const randomMsg = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
        setCurrentMessage(randomMsg);
        if (progressRef.current) glitchText(progressRef.current);
      }, 200);
    }, 2000);

    return () => {
      tl.kill();
      clearInterval(messageInterval);
    };
  }, [reducedMotion]);

  const handleEnter = useCallback(async () => {
    if (!containerRef.current) return;

    // Play exit animation FIRST
    if (!reducedMotion) {
      await gsap.to(containerRef.current, {
        scale: 20,
        opacity: 0,
        duration: 1.2,
        ease: "power4.in",
      });
    }

    // THEN unmount and trigger onFinish
    setIsMounted(false);
    onFinish();
  }, [onFinish, reducedMotion]);

  // Keyboard event listener
  useEffect(() => {
    if (!showEnterButton) return;
    
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') handleEnter();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showEnterButton, handleEnter]);

  // Border animation effect
  useEffect(() => {
    if (reducedMotion) {
      borderControls.set({ opacity: 1 });
      return;
    }

    borderControls.start({
      opacity: [0, 1, 0.3, 1, 0.8],
      transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity }
    });
  }, [borderControls, reducedMotion]);

  const words = "WELCOME TO VISIONARY CLUB".split(" ");

  if (!isMounted) return null;

  return (
    <motion.div
      ref={containerRef}
      animate={controls}
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999] overflow-hidden select-none"
      style={{ pointerEvents: isMounted ? 'auto' : 'none' }}
    >
      

      {/* Neon borders */}
      <motion.div
        animate={borderControls}
        className="absolute top-0 left-0 w-full h-1 bg-[#00f0ff] shadow-[0_0_15px_#00f0ff]"
      />
      <motion.div
        animate={borderControls}
        className="absolute bottom-0 left-0 w-full h-1 bg-[#ff00f0] shadow-[0_0_15px_#ff00f0]"
      />

      {/* Main content */}
      <div className="text-center px-4 relative z-[9999] max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: reducedMotion ? 0 : 0.3 * i, 
                duration: reducedMotion ? 0 : 0.7 
              }}
              className="inline-block mr-2 last:mr-0 hover:text-[#00f0ff] transition-colors cursor-default"
              onMouseEnter={(e) => glitchText(e.currentTarget)}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reducedMotion ? 0 : 0.5 }}
          className="mt-8 sm:mt-12 w-48 sm:w-64 h-1 bg-white/20 mx-auto overflow-hidden rounded-full"
        >
          <motion.div
            ref={progressRef}
            className="progress-bar-fill h-full bg-gradient-to-r from-[#00f0ff] to-[#ff00f0]"
            initial={{ width: 0 }}
            animate={{ width: `${loadingProgress}%` }}
            transition={{ 
              duration: reducedMotion ? 0 : 0.5,
              type: "spring",
              damping: 10,
              stiffness: 50
            }}
          />
        </motion.div>

        {/* Dynamic loading message */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentMessage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-[#00f0ff] text-sm sm:text-base h-6"
          >
            {currentMessage || " "}
          </motion.p>
        </AnimatePresence>

        {/* Enter button */}
        <AnimatePresence>
          {showEnterButton && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: reducedMotion ? 1 : [1, 1.05, 1],
                transition: { 
                  duration: 0.5,
                  scale: reducedMotion ? {} : { repeat: Infinity, duration: 2 }
                }
              }}
              exit={{ opacity: 0 }}
              whileHover={{ 
                scale: reducedMotion ? 1 : 1.1,
                textShadow: "0 0 15px #00f0ff"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnter}
              className="mt-8 sm:mt-12 px-6 sm:px-8 py-2 sm:py-3 bg-transparent border-2 border-white/30 text-white/80 font-bold rounded-full hover:border-[#00f0ff] hover:text-[#00f0ff] hover:shadow-[0_0_15px_#00f0ff] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff00f0] cursor-pointer text-sm sm:text-base"
            >
              PRESS ENTER
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Ambient lights */}
      {!reducedMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1, duration: 2 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#00f0ff] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-[#ff00f0] rounded-full blur-3xl" />
        </motion.div>
      )}
    </motion.div>
  );
}