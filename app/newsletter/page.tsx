"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Lock, Gem } from "lucide-react";
import { Playfair_Display, Rajdhani } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair"
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-rajdhani"
});

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/manbdzba", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          _subject: "NEW EMPIRE BUILDER JOINED",
          _replyto: email, // Optional: Allows you to reply directly
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      alert("Failed to submit. Try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative w-full bg-black text-white py-24 md:py-44 px-6 md:px-16 overflow-hidden border-t border-yellow-600/20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/5 via-black to-black"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          className={`${playfair.variable} font-serif text-[clamp(1.75rem,10vw,3.75rem)] font-bold tracking-tight text-yellow-500 mb-12 md:mb-16`}
        >
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            EMPIRE BUILDING KNOWLEDGE
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`${rajdhani.variable} font-sans text-[clamp(1rem,4vw,1.5rem)] tracking-wider text-neutral-300 space-y-2`}
        >
          <p>LEAK-SNIPING SECRETS. ONE POWER THOUGHT. CEO MINDSET</p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-yellow-600/50"></div>
            <Gem className="text-yellow-500 h-5 w-5" />
            <div className="h-px w-16 bg-yellow-600/50"></div>
          </div>
          <p>FOR BUILDERS WHO MOVE IN SILENCE</p>
        </motion.div>

        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="relative w-full max-w-md">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-500/80 h-5 w-5" />
              <input
                type="email"
                required
                placeholder="ENTER YOUR EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12 pr-6 py-4 w-full rounded-lg bg-neutral-900/80 backdrop-blur-sm text-white border border-yellow-600/30 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-all placeholder:text-neutral-500 uppercase tracking-wider text-sm font-medium"
                disabled={isLoading}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="relative overflow-hidden group px-8 py-4 rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-700 text-black font-bold tracking-wider hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg hover:shadow-yellow-600/30 flex items-center gap-2 disabled:opacity-70"
            >
              {isLoading ? (
                <span className="relative z-10">SENDING...</span>
              ) : (
                <>
                  <span className="relative z-10">GAIN ACCESS</span>
                  <Lock className="h-4 w-4 relative z-10" />
                </>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 p-6 bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-yellow-600/30 max-w-md mx-auto"
          >
            <div className="flex items-center justify-center gap-3 text-yellow-500">
              <Lock className="h-5 w-5" />
              <p className="font-medium tracking-wider">
                WELCOME TO THE CODEX. FIRST DROP INCOMING. 🕯️
              </p>
            </div>
          </motion.div>
        )}

        {/* Trust indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-sm text-neutral-500 tracking-wider flex items-center justify-center gap-2"
        >
          <span className="h-px w-8 bg-neutral-700"></span>
          STRICT NO-SPAM POLICY • ONE DROP PER WEEK
          <span className="h-px w-8 bg-neutral-700"></span>
        </motion.p>
      </div>
    </section>
  );
}