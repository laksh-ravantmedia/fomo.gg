import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image 
            src="/images/icons/BrandLogoMain.svg"
            alt="FOMO.gg"
            width={142}
            height={50}
          />
        </div>
        
        <nav className={styles.links} aria-label="Footer navigation">
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
