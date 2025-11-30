import React from 'react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>WAV3 WORLD</div>
      <nav className={styles.nav}>
        <a className={styles.navLink}>Home</a>
        <a className={styles.navLink}>Collections</a>
        <a className={styles.navLink}>About</a>
        <a className={styles.navLink}>Contact</a>
      </nav>
    </header>
  );
};
