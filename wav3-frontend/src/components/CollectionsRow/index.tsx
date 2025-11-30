import React from 'react';
import { motion } from 'framer-motion';
import styles from './CollectionsRow.module.css';

// Mock Data
const COLLECTIONS = [
  { id: '1', title: 'Genesis', color: '#58c1ff' },
  { id: '2', title: 'Impact', color: '#ff5858' },
  { id: '3', title: 'Silence', color: '#c9a24f' },
];

export const CollectionsRow: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      {COLLECTIONS.map((col) => (
        <motion.div 
          key={col.id} 
          className={styles.card}
          whileTap={{ scale: 0.98 }}
        >
          <div style={{ width: '100%', height: '100%', background: col.color, opacity: 0.2 }} />
          <div className={styles.cardContent}>
            <h3>{col.title}</h3>
            <span style={{ color: col.color }}>View Collection &rarr;</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
