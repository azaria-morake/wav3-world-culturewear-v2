import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './ItemCard.module.css';

type ViewState = 'front' | 'back' | 'label';

export const ItemCard: React.FC = () => {
  const [view, setView] = useState<ViewState>('front');

  // Hotspot Handlers
  const showFront = () => setView('front');
  const showBack = () => setView('back');
  const showLabel = () => setView('label');

  return (
    <div className={styles.card}>
      <div className={styles.imageArea}>
        {/* Visual Layer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {/* Placeholder Visuals */}
            {view === 'front' && <span>FRONT VIEW</span>}
            {view === 'back' && <span>BACK VIEW</span>}
            {view === 'label' && <span>LABEL DETAIL</span>}
          </motion.div>
        </AnimatePresence>

        {/* Invisible Interaction Layer */}
        <div className={styles.hotspotGrid}>
          {/* Top Row: Back View Trigger */}
          <div className={styles.hotspot} onClick={showBack} style={{ gridColumn: '1 / -1' }} aria-label="Show Back" />
          
          {/* Middle Row */}
          <div className={styles.hotspot} onClick={showLabel} aria-label="Show Label" /> {/* Left */}
          <div className={styles.hotspot} onClick={showFront} aria-label="Show Front" /> {/* Center */}
          <div className={styles.hotspot} aria-label="Details" /> {/* Right (Future Use) */}
        </div>

        {/* Action Icons */}
        <div className={styles.actions}>
          <button className={styles.iconBtn}>♥</button>
          <button className={styles.iconBtn}>+</button>
        </div>
      </div>
      
      <div className={styles.info}>
        <h4>Wav3 Runner Tee</h4>
        <div className={styles.price}>R 850.00</div>
      </div>
    </div>
  );
};
