'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import { HeroCardGrid } from './HeroCardGrid';
import { HeroContent } from './HeroContent';
import { GlowEffect } from '@/components/ui/GlowEffect/GlowEffect';

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <HeroCardGrid />
        <GlowEffect color="purple" size="lg" className={styles.heroGlow} />
      </div>
      <HeroContent />
      <div className={styles.overlay} />
    </section>
  );
}
