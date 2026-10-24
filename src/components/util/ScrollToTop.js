import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Only offer the button once the first screen has been scrolled past
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const style = {
    position: 'fixed',
    bottom: 30,
    right: 30,
    zIndex: 105,
    width: 52,
    height: 52,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: '3px solid #4fecec',
    background: '#141c3a',
    color: '#4fecec',
    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.35)',
    cursor: 'pointer',
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          type="button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          aria-label="Back to top"
          whileHover={{ scale: 1.12, backgroundColor: '#4fecec', color: '#141c3a' }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={style}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
