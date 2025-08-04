'use client';

import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  <style jsx global>{`
  body {
    overflow: hidden !important;
    height: 100% !important;
  }
`}</style>

  return (
    <LayoutGroup>
      <AnimatePresence mode="wait">
        <motion.div
          key={path}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </LayoutGroup>
  );
}


