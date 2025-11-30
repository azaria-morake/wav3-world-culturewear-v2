import React from 'react';
import { motion } from 'framer-motion';
import styles from './SpiritZone.module.css';

export const SpiritZone: React.FC = () => {
  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.logoBox}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.titleMain}>
          <div>WAV3</div>
          <div>WORLD</div>
        </h1>
      </motion.div>

      <motion.p 
        className={styles.tagline}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Embrace the challenge.
      </motion.p>

      <motion.button 
        className={styles.shopBtn}
        whileTap={{ scale: 0.98 }}
      >
        Shop Now
      </motion.button>
    </div>
  );
};