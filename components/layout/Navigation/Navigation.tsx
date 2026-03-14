import React from 'react';
import styles from './Navigation.module.css';

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>FOMO</span>
          <span className={styles.logoAccent}>.gg</span>
        </div>
      </div>
    </nav>
  );
}
