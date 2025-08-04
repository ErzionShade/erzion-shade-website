// app/components/GrowthMethods.tsx
'use client'

import { motion } from 'framer-motion'
import { Playfair_Display, Inter } from 'next/font/google'
import { Sword, Zap, DollarSign, TrendingUp, BookOpen } from 'lucide-react'

// Optimized font loading
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  weight: ['700'],
  display: 'swap',
  variable: '--font-playfair',
  preload: true
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true
})

export default function GrowthMethods() {
  // Enhanced motion variants with reduced motion support
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section 
      className={`bg-black text-gray-100 py-[clamp(5rem,10vw,10rem)] px-[clamp(1rem,5vw,3rem)] ${inter.variable} ${playfair.variable}`} 
      id="growth-methods"
    >
      <div className="max-w-[min(90rem,95vw)] mx-auto">
        {/* Header with fluid typography */}
        <motion.div 
          className="text-center mb-[clamp(3rem,8vw,5rem)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants} 
            className={`text-[clamp(2rem,5vw,3.75rem)] font-bold mb-[clamp(1rem,3vw,1.5rem)] font-playfair leading-[1.1]`}
          >
            <span className="text-gold-500">Your profit is leaking.</span> Here's Why:
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="text-[clamp(1rem,1.5vw,1.25rem)] text-gray-400 max-w-[clamp(20rem,70vw,50rem)] mx-auto leading-relaxed"
          >
            Real reasons your revenue's stuck
          </motion.p>
        </motion.div>

        {/* The Problem Section */}
        <motion.div
          className="mb-[clamp(4rem,10vw,6rem)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.h3 
            variants={itemVariants} 
            className={`text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-gold-500 mb-[clamp(1rem,3vw,1.5rem)] font-playfair flex items-center`}
          >
            Where You're Losing Money
          </motion.h3>
          <motion.p 
            variants={itemVariants} 
            className="text-[clamp(1rem,1.25vw,1.125rem)] text-gray-300 leading-relaxed mb-[clamp(1rem,3vw,2rem)]"
          >
            Most businesses waste money without knowing it. These hidden problems drain your profits:
          </motion.p>
          
          <ul className="space-y-3 text-[clamp(1rem,1.1vw,1.05rem)] text-gray-400">
            {[
              "Burning cash on underperforming ads",
              "Team drowning in tasks that don't move revenue",
              "Charging too little",
              "Systems that can't grow"
            ].map((item, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                className="flex items-start"
              >
                <span className="text-gold-500 mr-2">•</span> {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* The Solution Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.h3 
            variants={itemVariants} 
            className={`text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-gold-500 mb-[clamp(1rem,3vw,2rem)] font-playfair flex items-center`}
          >
            <Sword size={32} className="mr-3 text-gold-600" /> How We Fix It
          </motion.h3>

          <ul className="space-y-[clamp(2rem,5vw,3rem)]">
            {[
              {
                icon: <DollarSign size={36} className="text-gold-400" />,
                title: "1. Find The Leaks",
                description: "We show you exactly where money is disappearing"
              },
              {
                icon: <TrendingUp size={36} className="text-gold-300" />,
                title: "2. Stop The Bleeding",
                description: "Quick fixes to save money immediately"
              },
              {
                icon: <BookOpen size={36} className="text-gold-500" />,
                title: "3. Grow Properly",
                description: "Systems that make more money as you expand"
              }
            ].map((step, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                className="flex flex-col md:flex-row items-start md:items-center gap-[clamp(1rem,2vw,1.5rem)] border-l-4 border-gold-500 pl-[clamp(1rem,2vw,1.5rem)] py-[clamp(0.5rem,1vw,1rem)]"
              >
                <div className="flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-[clamp(1.25rem,2vw,1.5rem)] font-bold text-white mb-[clamp(0.5rem,1vw,0.75rem)]">
                    {step.title}
                  </h4>
                  <p className="text-gray-300 text-[clamp(1rem,1.1vw,1.05rem)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* RESPONSIVE TWEAKS */}
      <style jsx global>{`
        /* SMALL PHONES */
        @media (max-width: 360px) {
          .problem-list li {
            font-size: 0.95rem !important;
          }
          
          .solution-step {
            padding-left: 1rem !important;
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
  )
}