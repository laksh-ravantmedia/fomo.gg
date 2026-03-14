import React from 'react';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>FOMO</span>
          <span className={styles.logoAccent}>.gg</span>
        </div>
        
        <nav className={styles.links}>
          <a href="#how-it-works" className={styles.link}>How It Works</a>
          <a href="#trade" className={styles.link}>Trade</a>
          <a href="#launch" className={styles.link}>Launch</a>
        </nav>
        
        <p className={styles.copyright}>
          © 2024 FOMO.gg. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
