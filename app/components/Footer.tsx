// components/Footer.js
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Row: Logo + Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex flex-col items-start">
            <span className="font-cinematic text-2xl md:text-4xl tracking-widest text-white text-shadow-gold-glow">
              ERZION
            </span>
            <span className="font-mono text-xs md:text-sm tracking-[0.5em] text-gold-500 opacity-90 mt-1 ml-[0.25em]">
              SHADE
            </span>
             
          </Link>
          
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="hover:text-gold-500 transition-colors">
              <FaTwitter size={24} />
            </a>
            
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gold-500/30 my-6" />

        {/* Bottom Row: Links + Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-gold-500 transition-colors">Privacy</Link>
            <Link href="/terms-and-conditions" className="hover:text-gold-500 transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-gold-500 transition-colors">Contact</Link>
          </div>
          <p>© {new Date().getFullYear()} Erzion Shade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}  