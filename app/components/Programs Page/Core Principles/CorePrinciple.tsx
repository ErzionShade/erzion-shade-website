"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sword, BookOpen, Users, Star, Shield, Eye, Rocket } from "lucide-react";
import { useMemo } from "react";
import { Playfair_Display, Libre_Franklin } from 'next/font/google';

// Font loading
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-playfair'
});

const libre = Libre_Franklin({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  display: 'swap',
  variable: '--font-libre'
});

export default function CorePrinciples() {
  const principles = useMemo(() => [
    {
      id: 1,
      title: "BE CRYSTAL CLEAR",
      sub: "Clarity wins. Always.",
      url: "/articles/clarity-is-greater-than-virality",
      summary: "Confusion kills sales. Make your offer so clear a stranger gets it in 5 seconds.",
      icon: <Sword className="text-amber-500" size={24} />,
    },
    {
      id: 2,
      title: "WRITE LIKE YOU TALK",
      sub: "Your voice builds your brand.",
      url: "/articles/write-like-you-talk",
      summary: "Write like you're talking to a friend.",
      icon: <BookOpen className="text-amber-500" size={24} />,
    },
    {
      id: 3,
      title: "KNOW YOUR AUDIENCE",
      sub: "Speak to one, impact thousands.",
      url: "/articles/know-your-audience",
      summary: "Understand their fears and dreams.",
      icon: <Users className="text-amber-500" size={24} />,
    },
    {
      id: 4,
      title: "THINK LESS, TAKE ACTION",
      sub: "Overthinking kills empires.",
      url: "/articles/think-Less-take-action",
      summary: "Action beats perfection.",
      icon: <Star className="text-amber-500" size={24} />,
    },
    {
      id: 5,
      title: "SIMPLICITY IS POWER",
      sub: "The deeper the idea, the simpler the words.",
      url: "/articles/Simplicity-is-Power",
      summary: "Complex ideas lose customers.",
      icon: <Shield className="text-amber-500" size={24} />,
    },
    {
      id: 6,
      title: "STAND OUT FROM CROWD",
      sub: "Differentiate or die.",
      url: "/articles/stand-out-from-the-crowd",
      summary: "A bold brand commands attention.",
      icon: <Eye className="text-amber-500" size={24} />,
    },
    {
      id: 7,
      title: "JUST GET STARTED",
      sub: "Your first draft is your weapon.",
      url: "/articles/just-get-started",
      summary: "Launch now, improve later.",
      icon: <Rocket className="text-amber-500" size={24} />,
    },
  ], []);

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

    const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className={`w-full py-20 md:py-32 bg-black text-white px-4 sm:px-6 ${playfair.variable} ${libre.variable}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight font-playfair leading-tight"
            variants={titleVariants}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-amber-400">LESSONS I MASTER </span>
            <span className="text-amber-400 italic">FROM SILENCE</span>
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-libre font-light leading-relaxed"
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          >
            Forged in{" "}
            <Link 
              href="/life-lessons" 
              className="text-amber-500 hover:underline font-medium"
            >
              Life Lessons
            </Link>
            , these principles are my <span className="italic">timeless</span> blueprint.
          </motion.p>
        </motion.div>

        {/* Principles Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-50px" }}
        >
          {principles.map((principle) => (
            <motion.div
              key={principle.id}
              className="border border-gray-800 rounded-lg p-6 md:p-8 bg-gray-900/50 hover:bg-gray-900/70 transition-colors"
              variants={itemVariants}
            >
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    {principle.icon}
                    <h3 className="text-lg md:text-xl font-bold tracking-wide text-white font-playfair">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-amber-500 text-sm md:text-base font-libre font-medium mb-3">
                    {principle.sub}
                  </p>
                  <p className="text-gray-300 text-sm md:text-base font-libre leading-relaxed">
                    {principle.summary}
                  </p>
                </div>
                <Link
                  href={principle.url}
                  className="mt-6 inline-flex items-center text-amber-500 hover:text-white transition-colors font-libre font-medium"
                >
                  Explore Principle
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mt-16 md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          

          <motion.a
            href="/newsletter"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-amber-500 hover:bg-amber-500/10 text-amber-500 rounded-lg text-lg font-bold tracking-wider"
          >
            Get Weekly Insights
            <ArrowRight size={20} className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 