// src/components/ScrollToTopButton.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react'; // npm install lucide-react

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling ~350px (you can adjust this value)
      setIsVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // Very smooth scroll with longer duration on long pages
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.12, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          className={`
            fixed bottom-6 right-6 z-50
            bg-gradient-to-br from-blue-600 to-blue-800
            text-white p-4 rounded-full
            shadow-2xl hover:shadow-xl
            focus:outline-none focus:ring-4 focus:ring-blue-300/50
            transition-all duration-300
          `}
          aria-label="Scroll back to top"
        >
          <ChevronUp size={28} strokeWidth={2.8} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTopButton;