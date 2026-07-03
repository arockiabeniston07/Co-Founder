import React from 'react';
import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-[10000]"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(to right, #F7E7CE, #D4AF37)',
      }}
    />
  );
}
