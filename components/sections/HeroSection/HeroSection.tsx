'use client';

import React from 'react';
import styles from './HeroSection.module.css';
import { HeroCardGrid } from './HeroCardGrid';
import { HeroContent } from './HeroContent';

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <HeroCardGrid />
      </div>
      <div className={styles.gradientOverlay} />
      <HeroContent />
    </section>
  );
}
