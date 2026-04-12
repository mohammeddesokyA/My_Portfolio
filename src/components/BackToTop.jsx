import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-slate-900 border border-emerald-500/50 text-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/20 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 group"
        >
          {/* السهم لفوق */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}