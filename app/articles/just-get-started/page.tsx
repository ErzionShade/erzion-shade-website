// app/articles/just-get-started/page.tsx
'use client';

import { Inter, Space_Mono, Playfair_Display } from 'next/font/google';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const spaceMono = Space_Mono({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-space-mono'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
});

export default function JustGetStarted() {
  return (
    <main className={`min-h-screen bg-gray-950 text-gray-100 ${inter.variable} font-sans py-20 sm:py-24 md:py-32 lg:py-40 px-4`}>
      <motion.article 
        className="container mx-auto max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Article Header */}
        <header className="mb-16">
            
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight ${playfair.variable} font-serif`}>
            Just Get Started — <span className="text-red-400">Or Disappear</span>
          </h1>
          <p className={`text-lg sm:text-xl md:text-2xl opacity-85 leading-relaxed ${spaceMono.variable} font-mono`}>
            You don't need motivation.<br />
            You need <span className="text-white font-bold">motion</span>.
          </p>
        </header>

        {/* Main Content */}
        <section className={`space-y-8 mb-16 ${spaceMono.variable} font-mono`}>
          <div className="border-l-4 border-red-500 pl-6 sm:pl-8 py-2">
            <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
              Most wait for perfect timing.<br />
              But time doesn't wait back.
            </p>
          </div>

          <div className="border-b-2 border-gray-800 pb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-red-400">Action Solves Everything</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-400 mr-3 text-2xl">•</span>
                <span className="text-lg sm:text-xl opacity-90">
                  <span className="text-white font-bold">Clarity</span> comes from doing, not thinking
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3 text-2xl">•</span>
                <span className="text-lg sm:text-xl opacity-90">
                  <span className="text-white font-bold">Confidence</span> comes from repetition, not waiting
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3 text-2xl">•</span>
                <span className="text-lg sm:text-xl opacity-90">
                  <span className="text-white font-bold">Results</span> come from starting, then sharpening
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 sm:p-10 border border-gray-800">
            <p className="text-xl sm:text-2xl italic text-gray-200 leading-relaxed">
              "If you're not embarrassed by your first attempt —<br />
              you <span className="text-red-400">waited too long</span> to begin."
            </p>
          </div>

          <div className="border-t-2 border-gray-800 pt-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">The Silent Builder's Code</h2>
            <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
              Start before ready. Build before known.<br />
              Move before validated. Speak before heard.<br />
              <span className="text-red-400">No masterpiece began perfect</span> — but it began.
            </p>
          </div>
        </section>

        {/* Article Footer */}
        <footer className="mt-20 border-t-2 border-gray-800 pt-10 sm:pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <p className={`text-lg sm:text-xl text-gray-300 ${spaceMono.variable} font-mono leading-relaxed`}>
              ❝Perfection is the enemy of progress.<br />
              <span className="text-white">Movement is the weapon.</span>❞
            </p>
            
          </div>
        </footer>
      </motion.article>
    </main>
  );
}