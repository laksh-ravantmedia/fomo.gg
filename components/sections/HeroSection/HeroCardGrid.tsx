'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './HeroCardGrid.module.css';
import { FIGMA_ASSETS } from '@/lib/constants/assets';

const cards = [
  { image: FIGMA_ASSETS.hero.card01, width: 204, height: 646, delay: 0 },
  { image: FIGMA_ASSETS.hero.card02, width: 204, height: 691, delay: 0.1 },
  { image: FIGMA_ASSETS.hero.card03, width: 204, height: 632, delay: 0.2 },
  { image: FIGMA_ASSETS.hero.card04, width: 220, height: 587, delay: 0.3 },
  { image: FIGMA_ASSETS.hero.card05, width: 204, height: 632, delay: 0.4, flip: true },
  { image: FIGMA_ASSETS.hero.card06, width: 204, height: 691, delay: 0.5 },
  { image: FIGMA_ASSETS.hero.card07, width: 204, height: 646, delay: 0.6, flip: true }
];

export function HeroCardGrid() {
  return (
    <div className={styles.grid}>
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className={styles.cardWrapper}
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: 0.2, 
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: card.delay },
            y: {
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <Image 
            src={card.image}
            alt=""
            width={card.width}
            height={card.height}
            className={`${styles.card} ${card.flip ? styles.flip : ''}`}
            priority={index < 3}
            quality={85}
            sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 204px"
          />
        </motion.div>
      ))}
    </div>
  );
}
