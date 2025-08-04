// app/terms/page.tsx
"use client";
import { motion } from "framer-motion";
import { Shield, ScrollText, Link, Repeat2, Gavel, Mail, ExternalLink } from "lucide-react";

export default function TermsPage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen bg-gray-950 text-gray-100 px-6 md:px-24 py-32 space-y-12"
    >
      <section className="max-w-3xl mx-auto">
        {/* CLEAR HEADER WITH YOUR BRAND ENERGY */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">
            Straightforward Terms
          </h1>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <ScrollText size={14} /> Last Updated: July 30, 2025 • No Hidden Clauses
          </p>
        </motion.div>

        {/* PLAIN LANGUAGE INTRO */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <p className="text-xl text-gray-300">
            This isn't a trap - just clear rules for using our services. 
            By accessing our site, you agree to these terms.
          </p>
        </motion.div>

        <div className="space-y-10 leading-relaxed text-gray-200">
          {/* SECTION 1 - ACCEPTANCE */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="border-b border-gray-800 pb-8"
          >
            <h2 className="text-2xl font-bold text-gold-400 mb-4">
              1. The Basics
            </h2>
            <p className="mb-3">
              Using this site means you accept these terms. 
              If you don't agree, please exit now - no hard feelings.
            </p>
          </motion.div>

          {/* SECTION 2 - OWNERSHIP */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="border-b border-gray-800 pb-8"
          >
            <h2 className="text-2xl font-bold text-gold-400 mb-4">
              2. What Belongs to Us
            </h2>
            <p className="mb-3">
              Everything you see here is ours:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-gold-500">
              <li>All text, images, and designs</li>
              <li>Business strategies and frameworks</li>
              <li>Code and technical implementations</li>
            </ul>
            <p className="mt-4">
              You can learn from it, but don't steal it.
            </p>
          </motion.div>

          {/* SECTION 3 - PROPER USE */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="border-b border-gray-800 pb-8"
          >
            <h2 className="text-2xl font-bold text-gold-400 mb-4">
              3. Fair Play Rules
            </h2>
            <p className="mb-3">
              <strong>Good uses:</strong> Learning, research, business growth
            </p>
            <p>
              <strong>Not allowed:</strong> Copying, scraping, or any shady stuff
            </p>
          </motion.div>

          {/* SECTION 4 - DISCLAIMER */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="border-b border-gray-800 pb-8"
          >
            <h2 className="text-2xl font-bold text-gold-400 mb-4">
              4. No Magic Promises
            </h2>
            <p>
              We provide value, but can't guarantee specific results. 
              Use our advice wisely in your unique situation.
            </p>
          </motion.div>

          {/* SECTION 5 - LIMITATION OF LIABILITY */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="border-b border-gray-800 pb-8"
          >
            <h2 className="text-2xl font-bold text-gold-400 mb-4">
              5. Your Responsibility
            </h2>
            <p>
              You own your business decisions. We're not liable for how you implement our advice.
            </p>
          </motion.div>

          {/* SECTION 6 - EXTERNAL LINKS */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="border-b border-gray-800 pb-8"
          >
            <h2 className="text-2xl font-bold text-gold-400 mb-4 flex items-center gap-2">
              <Link size={20} /> 6. Third-Party Links
            </h2>
            <p>
              We may link to other sites. We don't control them - visit at your own risk.
            </p>
          </motion.div>

          {/* SECTION 7 - CHANGES */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="border-b border-gray-800 pb-8"
          >
            <h2 className="text-2xl font-bold text-gold-400 mb-4 flex items-center gap-2">
              <Repeat2 size={20} /> 7. We May Update These
            </h2>
            <p>
              Terms can change. The current version always lives here.
            </p>
          </motion.div>

          {/* SECTION 8 - GOVERNING LAW */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.0 }}
            className="border-b border-gray-800 pb-8"
          >
            <h2 className="text-2xl font-bold text-gold-400 mb-4 flex items-center gap-2">
              <Gavel size={20} /> 8. Legal Jurisdiction
            </h2>
            <p>
              These terms follow Bangladesh law.
            </p>
          </motion.div>

          {/* SECTION 9 - CONTACT */}
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            <h2 className="text-2xl font-bold text-gold-400 mb-4">9. Questions?</h2>
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
              <div className="space-y-3">
                <a 
                  href="mailto:legal@erzionshade.com" 
                  className="flex items-center gap-3 text-gold-400 hover:text-gold-300 transition-colors"
                >
                  <Mail size={18} />
                  legal@erzionshade.com
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
                We respond within 5 business days.
              </p>
            </div>
          </motion.div>
        </div>

        {/* FINAL ACKNOWLEDGMENT */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.4 }}
          className="mt-16 p-6 bg-gray-900/50 border border-gray-800 rounded-lg"
        >
          <h3 className="text-lg font-bold text-gold-400 mb-3">
            That's It - No Surprises
          </h3>
          <p>
            Still here? You understand and accept these terms. 
            They replace any previous agreements.
          </p>
        </motion.div>
      </section>
    </motion.main>
  )
}