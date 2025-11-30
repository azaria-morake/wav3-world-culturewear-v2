import React from 'react';
import { motion } from 'framer-motion';
import styles from './CollectionPage.module.css';
// We'll import ItemCard later when verifying integration

interface CollectionPageProps {
  title: string;
  onClose: () => void;
}

export const CollectionPage: React.FC<CollectionPageProps> = ({ title, onClose }) => {
  return (
    <motion.div 
      className={styles.pageOverlay}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
    >
      <header className={styles.header}>
        <button onClick={onClose} className={styles.backBtn}>&larr; Back to World</button>
        <h2 style={{ marginLeft: '20px' }}>{title}</h2>
      </header>
      
      <div className={styles.itemsRow}>
        {/* Render ItemCards here */}
        <div style={{ width: '300px', height: '400px', background: '#333', borderRadius: '12px', flexShrink: 0, display:'flex', alignItems:'center', justifyContent:'center' }}>
          Item 1 Placeholder
        </div>
        <div style={{ width: '300px', height: '400px', background: '#333', borderRadius: '12px', flexShrink: 0, display:'flex', alignItems:'center', justifyContent:'center' }}>
          Item 2 Placeholder
        </div>
      </div>
    </motion.div>
  );
};
