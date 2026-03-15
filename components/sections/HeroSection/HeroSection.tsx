'use client';

import React from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';
import { HeroCardGrid } from './HeroCardGrid';
import { HeroContent } from './HeroContent';

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <HeroCardGrid />
      </div>
      <div className={styles.gradientOverlay}>
        <Image
          src="https://www.figma.com/api/mcp/asset/880ec90d-3dd3-464f-b22a-a4bb3f6b4a5c"
          alt=""
          fill
          priority
          quality={100}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <HeroContent />
      <div className={styles.overlay} />
    </section>
  );
}
