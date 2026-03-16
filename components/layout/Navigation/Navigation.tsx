import React from 'react';
import Image from 'next/image';
import styles from './Navigation.module.css';

export function Navigation() {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image 
            src="/images/icons/BrandLogoMain.svg"
            alt="FOMO.gg"
            width={142}
            height={50}
            priority
          />
        </div>
      </div>
      <div className={styles.gradientFade} />
    </nav>
  );
}
