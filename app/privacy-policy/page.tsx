'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, ScrollText, Mail, ExternalLink, Lock, Download, Shield, Eraser, Compass, Repeat } from 'lucide-react'
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] })
const inter = Inter({ subsets: ['latin'] })

export default function PrivacyPolicy() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen bg-gray-950 text-gray-100 px-6 md:px-24 py-32 space-y-12"
    >
      <section className="max-w-3xl mx-auto">
        {/* Clear, friendly header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gold-500 mb-2 flex items-center gap-3">
            <ShieldCheck className="text-gold-500 w-8 h-8" /> Privacy Made Simple
          </h1>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <ScrollText size={14} /> Last Updated: July 30, 2025 • Easy to understand
          </p>
        </motion.div>

        {/* Plain language intro */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-10 border-l-4 border-gold-500 pl-4 py-2 bg-gray-900/30 rounded-r-lg"
        >
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            We respect your privacy just like we respect our own. Here's the simple truth about how we handle your data.
          </p>
        </motion.div>

        <div className="space-y-10 leading-relaxed text-base md:text-lg text-gray-200">
          {/* SECTION 1 - INTRODUCTION */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="border-b border-gray-800 pb-8"
          >
            <h3 className="text-2xl font-bold text-gold-400 mb-4 flex items-center gap-2">
              <Lock size={20} /> 1. Privacy Matters
            </h3>
            <p>
              Your privacy is important to us. This policy explains what we collect, why we need it, and how we protect it - in plain English.
            </p>
          </motion.div>

          {/* SECTION 2 - INFORMATION WE COLLECT */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="border-b border-gray-800 pb-8"
          >
            <h3 className="text-2xl font-bold text-gold-400 mb-4 flex items-center gap-2">
              <Download size={20} /> 2. What We Collect
            </h3>
            <p className="mb-3">
              Just the basics: your email if you sign up, and anonymous usage data to improve our service. We don't collect anything sensitive.
            </p>
          </motion.div>

          {/* SECTION 3 - HOW WE USE DATA */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="border-b border-gray-800 pb-8"
          >
            <h3 className="text-2xl font-bold text-gold-400 mb-4 flex items-center gap-2">
              <Shield size={20} /> 3. How We Use Your Data
            </h3>
            <p>
              Only to make our service better for you. We never sell your data or use it for anything you wouldn't expect.
            </p>
          </motion.div>

          {/* SECTION 4 - THIRD-PARTY SHIELD */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="border-b border-gray-800 pb-8"
          >
            <h3 className="text-2xl font-bold text-gold-400 mb-4 flex items-center gap-2">
              <ShieldCheck size={20} /> 4. No Data Sharing
            </h3>
            <p>
              We don't share your data with third parties except for essential services (like email providers), and we make sure they protect your data too.
            </p>
          </motion.div>

          {/* SECTION 5 - DATA CLEANUP */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="border-b border-gray-800 pb-8"
          >
            <h3 className="text-2xl font-bold text-gold-400 mb-4 flex items-center gap-2">
              <Eraser size={20} /> 5. Delete Your Data
            </h3>
            <p>
              Want us to delete your information? Just ask. We'll remove everything we have about you, no questions asked.
            </p>
          </motion.div>

          {/* SECTION 6 - YOUR RIGHTS */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="border-b border-gray-800 pb-8"
          >
            <h3 className="text-2xl font-bold text-gold-400 mb-4 flex items-center gap-2">
              <Compass size={20} /> 6. Your Rights
            </h3>
            <p>
              You're in control. You can ask what data we have, correct it, or delete it anytime.
            </p>
          </motion.div>

          {/* SECTION 7 - POLICY CHANGES */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="border-b border-gray-800 pb-8"
          >
            <h3 className="text-2xl font-bold text-gold-400 mb-4 flex items-center gap-2">
              <Repeat size={20} /> 7. Policy Updates
            </h3>
            <p>
              If we change this policy, we'll update this page. We won't reduce your rights without telling you.
            </p>
          </motion.div>

          {/* SECTION 8 - CONTACT */}
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2.0 }}
          >
            <h3 className="text-2xl font-bold text-gold-400 mb-4 flex items-center gap-2">
              <Mail size={20} /> 8. Questions?
            </h3>
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
              <div className="space-y-3">
                <a 
                  href="mailto:contact@erzionshade.com" 
                  className="flex items-center gap-3 text-gold-400 hover:text-gold-300 transition-colors"
                >
                  <Mail size={18} />
                  contact@erzionshade.com
                </a>
                <a 
                  href="/Contact" 
                  className="flex items-center gap-3 text-gold-400 hover:text-gold-300 transition-colors"
                >
                  <ExternalLink size={18} />
                  Contact page
                </a>
              </div>
              <p className="mt-3 text-sm text-gray-400">
                We're happy to answer any questions about your privacy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}