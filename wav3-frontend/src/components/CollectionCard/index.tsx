import React from 'react';
import styles from './CollectionCard.module.css';

interface CollectionCardProps {
  title: string;
  theme: string;
  image?: string; // URL
  onClick: () => void;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({ title, theme, image, onClick }) => {
  return (
    <div 
      className={styles.card} 
      onClick={onClick}
      style={{ backgroundImage: image ? `url(${image})` : 'none', backgroundColor: '#112233' }}
    >
      <div className={styles.overlay}>
        <span className={styles.badge}>{theme}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
};
