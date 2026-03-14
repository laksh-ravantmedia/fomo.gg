import React from 'react';
import styles from './Navigation.module.css';

export function Navigation() {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.container}>
        <div className={styles.logo} role="img" aria-label="FOMO.gg logo">
          <span className={styles.logoText}>FOMO</span>
          <span className={styles.logoAccent}>.gg</span>
        </div>
      </div>
    </nav>
  );
}
