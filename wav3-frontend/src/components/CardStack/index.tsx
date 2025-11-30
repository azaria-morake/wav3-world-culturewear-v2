import React from 'react';
import { motion } from 'framer-motion';
import styles from './CardStack.module.css';

interface CardStackProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const CardStack: React.FC<CardStackProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <motion.div 
        className={styles.stackContainer}
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking content
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <button className={styles.closeBtn} onClick={onClose}>×</button>
        {children}
      </motion.div>
    </div>
  );
};
