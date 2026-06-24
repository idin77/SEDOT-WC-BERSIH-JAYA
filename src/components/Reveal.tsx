import React from 'react';
import { motion } from 'motion/react';

export default function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  );
}
