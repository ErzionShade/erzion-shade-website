"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronUp, Home, BookText, Briefcase, Mail, User, Lamp, Phone, Sparkles, Activity } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Animation variants
const desktopDropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const mobileDropdownVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 },
};

// Nav data
const navLinks = [{ name: "Newsletter", path: "/newsletter", icon: <Mail size={18} className="mr-2" /> }];
const aboutSubLinks = [
  { name: "My Story", path: "/story", icon: <User size={16} className="mr-2" /> },
];
const workSubLinks = [
  { name: "Case Study", path: "/case-study", icon: <Briefcase size={16} className="mr-2" /> },
  { name: "Contact Me", path: "/Contact", icon: <Phone size={16} className="mr-2" /> },
];
const programsSubLinks = [{ name: "Core Principles", path: "/principles", icon: <Lamp size={16} className="mr-2" /> }];
const wisdomSubLinks = [
  { name: "Life Lessons", path: "/life-lessons", icon: <BookText size={16} className="mr-2" /> },
];

export default function Navbar() {
  // State management
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isWorkHovered, setIsWorkHovered] = useState(false);
  const [isProgramsHovered, setIsProgramsHovered] = useState(false);
  const [isWisdomHovered, setIsWisdomHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktopCompact, setIsDesktopCompact] = useState(false);
  const [mobileMenuState, setMobileMenuState] = useState({
    about: false,
    work: false,
    programs: false,
    wisdom: false,
  });

   // Enhanced device detection with scroll lock cleanup
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;
      
      const newIsMobile = width < 1024 || (width >= 1024 && width <= 1280 && isPortrait);
      const newIsDesktopCompact = width >= 1024 && width <= 1280 && !isPortrait;

      // If we're transitioning from mobile to desktop, ensure scroll is unlocked
      if (isMobile && !newIsMobile) {
        document.body.style.overflow = "";
        document.body.style.touchAction = "";
        setIsOpen(false); // Close mobile menu when transitioning to desktop
      }

      setIsMobile(newIsMobile);
      setIsDesktopCompact(newIsDesktopCompact);
    };

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkDevice, 100);
    };

    checkDevice();
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      clearTimeout(resizeTimeout);
      // Cleanup scroll lock
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isMobile]); // Add isMobile to dependency array

  // Optimized scroll lock with viewport change consideration
  useEffect(() => {
    // Only apply scroll lock if in mobile view or compact desktop with menu open
    if ((isMobile || isDesktopCompact) && isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen, isMobile, isDesktopCompact]); // Add all relevant dependencies


  // Hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 10) {
        setVisible(true);
        setIsScrolled(false);
        return;
      }
      setIsScrolled(true);
      setVisible(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileDropdown = (menu: string) => {
    setMobileMenuState(prev => ({ ...prev, [menu]: !prev[menu] }));
  };

  // Quick menu for compact desktop
  const toggleQuickMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className={`
      fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800 
      transition-all duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}
      h-[clamp(4rem,8vw,5rem)]
    `}>
      <div className={`
        mx-auto h-full flex justify-between items-center relative
        px-[clamp(1rem,5vw,2rem)]
        max-w-[min(90rem,95vw)]
      `}>
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 hover:scale-105 transition-all z-50">
          <motion.div 
            className={`relative w-[clamp(2.5rem,6vw,3.5rem)] h-[clamp(2.5rem,6vw,3.5rem)]`} 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Image 
              src="/Shade-logo.png" 
              alt="Logo" 
              fill 
              className="object-contain" 
              priority 
              sizes="(max-width: 768px) 3rem, 3.5rem" 
            />
          </motion.div>
          <div className="flex flex-col leading-none">
            <span className="font-cinematic text-[clamp(1.5rem,4vw,2.25rem)] tracking-widest text-white text-shadow-gold-glow">
              ERZION
            </span>
            <span className="font-mono text-[clamp(0.5rem,1.5vw,0.875rem)] tracking-[0.5em] text-gold-500 ml-1 opacity-90">
              SHADE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && !isDesktopCompact && (
          <div className="absolute left-[27%] top-0 h-full flex items-center">
            <div className="hidden lg:flex items-center gap-5 h-full pl-8">
              {/* About */}
              <div className="relative h-full flex items-center group" 
                onMouseEnter={() => setIsAboutHovered(true)} 
                onMouseLeave={() => setIsAboutHovered(false)}
              >
                <div className="flex items-center text-gray-300 hover:text-white font-medium cursor-pointer h-full px-4 py-2 transition-all duration-200 group-hover:bg-gray-800/50 rounded-lg">
                  <Home size={20} className="mr-3" />
                  <span className="text-[clamp(0.875rem,1.1vw,1.05rem)] tracking-wide">About</span>
                  <ChevronDown size={18} className={`ml-2 transition-transform ${isAboutHovered ? "rotate-180" : ""}`} />
                </div>
                <AnimatePresence>
                  {isAboutHovered && (
                    <motion.div 
                      className="absolute top-full left-0 mt-0 w-56 bg-black border border-gray-800 rounded-b-md shadow-lg z-50 overflow-hidden" 
                      initial="hidden" 
                      animate="visible" 
                      exit="exit" 
                      variants={desktopDropdownVariants} 
                      transition={{ duration: 0.1 }}
                    >
                      <div className="py-2 space-y-1">
                        {aboutSubLinks.map(link => (
                          <Link 
                            key={link.path} 
                            href={link.path} 
                            className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                          >
                            {link.icon}
                            <span className="ml-2 text-[0.95rem] tracking-wide">{link.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Work */}
              <div className="relative h-full flex items-center group" 
                onMouseEnter={() => setIsWorkHovered(true)} 
                onMouseLeave={() => setIsWorkHovered(false)}
              >
                <div className="flex items-center text-gray-300 hover:text-white font-medium cursor-pointer h-full px-4 py-2 transition-all duration-200 group-hover:bg-gray-800/50 rounded-lg">
                  <Briefcase size={20} className="mr-3" />
                  <span className="text-[clamp(0.875rem,1.1vw,1.05rem)] tracking-wide">Work</span>
                  <ChevronDown size={18} className={`ml-2 transition-transform ${isWorkHovered ? "rotate-180" : ""}`} />
                </div>
                <AnimatePresence>
                  {isWorkHovered && (
                    <motion.div 
                      className="absolute top-full left-0 mt-0 w-56 bg-black border border-gray-800 rounded-b-md shadow-lg z-50 overflow-hidden" 
                      initial="hidden" 
                      animate="visible" 
                      exit="exit" 
                      variants={desktopDropdownVariants} 
                      transition={{ duration: 0.1 }}
                    >
                      <div className="py-2 space-y-1">
                        {workSubLinks.map(link => (
                          <Link 
                            key={link.path} 
                            href={link.path} 
                            className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                          >
                            {link.icon}
                            <span className="ml-2 text-[0.95rem] tracking-wide">{link.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Programs */}
              <div className="relative h-full flex items-center group" 
                onMouseEnter={() => setIsProgramsHovered(true)} 
                onMouseLeave={() => setIsProgramsHovered(false)}
              >
                <div className="flex items-center text-gray-300 hover:text-white font-medium cursor-pointer h-full px-4 py-2 transition-all duration-200 group-hover:bg-gray-800/50 rounded-lg">
                  <BookText size={20} className="mr-3" />
                  <span className="text-[clamp(0.875rem,1.1vw,1.05rem)] tracking-wide">Programs</span>
                  <ChevronDown size={18} className={`ml-2 transition-transform ${isProgramsHovered ? "rotate-180" : ""}`} />
                </div>
                <AnimatePresence>
                  {isProgramsHovered && (
                    <motion.div 
                      className="absolute top-full left-0 mt-0 w-56 bg-black border border-gray-800 rounded-b-md shadow-lg z-50 overflow-hidden" 
                      initial="hidden" 
                      animate="visible" 
                      exit="exit" 
                      variants={desktopDropdownVariants} 
                      transition={{ duration: 0.1 }}
                    >
                      <div className="py-2 space-y-1">
                        {programsSubLinks.map(link => (
                          <Link 
                            key={link.path} 
                            href={link.path} 
                            className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                          >
                            {link.icon}
                            <span className="ml-2 text-[0.95rem] tracking-wide">{link.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Wisdom */}
              <div className="relative h-full flex items-center group" 
                onMouseEnter={() => setIsWisdomHovered(true)} 
                onMouseLeave={() => setIsWisdomHovered(false)}
              >
                <div className="flex items-center text-gray-300 hover:text-white font-medium cursor-pointer h-full px-4 py-2 transition-all duration-200 group-hover:bg-gray-800/50 rounded-lg">
                  <Sparkles size={20} className="mr-3" />
                  <span className="text-[clamp(0.875rem,1.1vw,1.05rem)] tracking-wide">Wisdom</span>
                  <ChevronDown size={18} className={`ml-2 transition-transform ${isWisdomHovered ? "rotate-180" : ""}`} />
                </div>
                <AnimatePresence>
                  {isWisdomHovered && (
                    <motion.div 
                      className="absolute top-full left-0 mt-0 w-56 bg-black border border-gray-800 rounded-b-md shadow-lg z-50 overflow-hidden" 
                      initial="hidden" 
                      animate="visible" 
                      exit="exit" 
                      variants={desktopDropdownVariants} 
                      transition={{ duration: 0.1 }}
                    >
                      <div className="py-2 space-y-1">
                        {wisdomSubLinks.map(link => (
                          <Link 
                            key={link.path} 
                            href={link.path} 
                            className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                          >
                            {link.icon}
                            <span className="ml-2 text-[0.95rem] tracking-wide">{link.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Newsletter */}
              {navLinks.map(link => (
                <Link 
                  key={link.path} 
                  href={link.path} 
                  className="flex items-center text-gray-300 hover:text-gold-400 font-medium px-5 py-2 rounded-lg border border-gray-700 hover:border-gold-400 transition-all duration-300"
                >
                  {link.icon}
                  <span className="ml-2 text-[clamp(0.875rem,1.1vw,1.05rem)] tracking-wider">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Compact Desktop Menu (1024px-1280px landscape) */}
        {isDesktopCompact && (
          <div className="flex items-center gap-4">
            <Link 
              href="/newsletter" 
              className="flex items-center text-gray-300 hover:text-gold-400 font-medium px-4 py-2 rounded-lg border border-gray-700 hover:border-gold-400 transition-all duration-300"
            >
              <Mail size={18} className="mr-2" />
              <span className="text-[clamp(0.875rem,1.1vw,1.05rem)] tracking-wider">Newsletter</span>
            </Link>
            
            <motion.button 
              className="text-white z-50 p-2 rounded-lg border border-gray-700 hover:bg-gray-800/50"
              style={{ minWidth: "44px", minHeight: "44px" }}
              onClick={toggleQuickMenu} 
              whileTap={{ scale: 0.9 }} 
              aria-label="Toggle quick menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <motion.button 
            className="text-white z-50 p-[clamp(0.5rem,1.5vw,0.75rem)]"
            style={{ minWidth: "44px", minHeight: "44px" }}
            onClick={() => setIsOpen(!isOpen)} 
            whileTap={{ scale: 0.9 }} 
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        )}

        {/* Mobile/Compact Desktop Menu */}
        <AnimatePresence>
  {(isOpen && (isMobile || isDesktopCompact)) && (
    <motion.div
      className="fixed inset-0 h-[100dvh] w-full z-40 bg-black" // 🔥 Changed from bg-black/98 to full black
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ 
        type: "spring", 
        damping: 30, 
        stiffness: 300, 
        mass: 0.5 
      }}
    >
              <div className="h-full flex flex-col pt-[clamp(6rem,15vw,8rem)] pb-8">
                <div className="flex-1 overflow-y-auto px-[clamp(1rem,5vw,1.5rem)] space-y-1">
                  {/* About */}
                  <div className="border-b border-gray-800/50 pb-2">
                    <motion.button 
                      className="w-full flex items-center justify-between text-white text-lg font-medium px-4 py-3 rounded-lg" 
                      onClick={() => toggleMobileDropdown("about")} 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      transition={{ delay: 0.1 }}
                    >
                      <div className="flex items-center">
                        <Home size={20} className="mr-3 text-gray-400" />
                        <span className="text-[clamp(1rem,4vw,1.125rem)]">About</span>
                      </div>
                      {mobileMenuState.about ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                    </motion.button>
                    <AnimatePresence>
                      {mobileMenuState.about && (
                        <motion.div 
                          className="pl-10 space-y-1" 
                          initial="hidden" 
                          animate="visible" 
                          exit="exit" 
                          variants={mobileDropdownVariants} 
                          transition={{ duration: 0.2 }}
                        >
                          {aboutSubLinks.map((link, index) => (
                            <motion.div 
                              key={link.path} 
                              initial={{ opacity: 0, x: 10 }} 
                              animate={{ opacity: 1, x: 0 }} 
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link 
                                href={link.path} 
                                className="flex items-center text-gray-400 hover:text-white px-4 py-2.5 rounded-md transition-colors" 
                                onClick={() => setIsOpen(false)}
                              >
                                <span className="w-6 h-6 flex items-center justify-center">{link.icon}</span>
                                <span className="ml-3 text-[clamp(0.875rem,3vw,1rem)]">{link.name}</span>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Work */}
                  <div className="border-b border-gray-800/50 pb-2">
                    <motion.button 
                      className="w-full flex items-center justify-between text-white text-lg font-medium px-4 py-3 rounded-lg" 
                      onClick={() => toggleMobileDropdown("work")} 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      transition={{ delay: 0.15 }}
                    >
                      <div className="flex items-center">
                        <Briefcase size={20} className="mr-3 text-gray-400" />
                        <span className="text-[clamp(1rem,4vw,1.125rem)]">Work</span>
                      </div>
                      {mobileMenuState.work ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                    </motion.button>
                    <AnimatePresence>
                      {mobileMenuState.work && (
                        <motion.div 
                          className="pl-10 space-y-1" 
                          initial="hidden" 
                          animate="visible" 
                          exit="exit" 
                          variants={mobileDropdownVariants} 
                          transition={{ duration: 0.2 }}
                        >
                          {workSubLinks.map((link, index) => (
                            <motion.div 
                              key={link.path} 
                              initial={{ opacity: 0, x: 10 }} 
                              animate={{ opacity: 1, x: 0 }} 
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link 
                                href={link.path} 
                                className="flex items-center text-gray-400 hover:text-white px-4 py-2.5 rounded-md transition-colors" 
                                onClick={() => setIsOpen(false)}
                              >
                                <span className="w-6 h-6 flex items-center justify-center">{link.icon}</span>
                                <span className="ml-3 text-[clamp(0.875rem,3vw,1rem)]">{link.name}</span>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Programs */}
                  <div className="border-b border-gray-800/50 pb-2">
                    <motion.button 
                      className="w-full flex items-center justify-between text-white text-lg font-medium px-4 py-3 rounded-lg" 
                      onClick={() => toggleMobileDropdown("programs")} 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex items-center">
                        <BookText size={20} className="mr-3 text-gray-400" />
                        <span className="text-[clamp(1rem,4vw,1.125rem)]">Programs</span>
                      </div>
                      {mobileMenuState.programs ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                    </motion.button>
                    <AnimatePresence>
                      {mobileMenuState.programs && (
                        <motion.div 
                          className="pl-10 space-y-1" 
                          initial="hidden" 
                          animate="visible" 
                          exit="exit" 
                          variants={mobileDropdownVariants} 
                          transition={{ duration: 0.2 }}
                        >
                          {programsSubLinks.map((link, index) => (
                            <motion.div 
                              key={link.path} 
                              initial={{ opacity: 0, x: 10 }} 
                              animate={{ opacity: 1, x: 0 }} 
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link 
                                href={link.path} 
                                className="flex items-center text-gray-400 hover:text-white px-4 py-2.5 rounded-md transition-colors" 
                                onClick={() => setIsOpen(false)}
                              >
                                <span className="w-6 h-6 flex items-center justify-center">{link.icon}</span>
                                <span className="ml-3 text-[clamp(0.875rem,3vw,1rem)]">{link.name}</span>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Wisdom */}
                  <div className="border-b border-gray-800/50 pb-2">
                    <motion.button 
                      className="w-full flex items-center justify-between text-white text-lg font-medium px-4 py-3 rounded-lg" 
                      onClick={() => toggleMobileDropdown("wisdom")} 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      transition={{ delay: 0.25 }}
                    >
                      <div className="flex items-center">
                        <Sparkles size={20} className="mr-3 text-gray-400" />
                        <span className="text-[clamp(1rem,4vw,1.125rem)]">Wisdom</span>
                      </div>
                      {mobileMenuState.wisdom ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                    </motion.button>
                    <AnimatePresence>
                      {mobileMenuState.wisdom && (
                        <motion.div 
                          className="pl-10 space-y-1" 
                          initial="hidden" 
                          animate="visible" 
                          exit="exit" 
                          variants={mobileDropdownVariants} 
                          transition={{ duration: 0.2 }}
                        >
                          {wisdomSubLinks.map((link, index) => (
                            <motion.div 
                              key={link.path} 
                              initial={{ opacity: 0, x: 10 }} 
                              animate={{ opacity: 1, x: 0 }} 
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link 
                                href={link.path} 
                                className="flex items-center text-gray-400 hover:text-white px-4 py-2.5 rounded-md transition-colors" 
                                onClick={() => setIsOpen(false)}
                              >
                                <span className="w-6 h-6 flex items-center justify-center">{link.icon}</span>
                                <span className="ml-3 text-[clamp(0.875rem,3vw,1rem)]">{link.name}</span>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Newsletter */}
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.3 }}
                  >
                    <Link 
                      href="/newsletter" 
                      className="flex items-center text-white text-lg font-medium px-4 py-3 rounded-lg border-b border-gray-800/50" 
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="w-6 h-6 flex items-center justify-center text-gray-400">
                        <Mail size={20} />
                      </span>
                      <span className="ml-3 text-[clamp(1rem,4vw,1.125rem)]">Newsletter</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}