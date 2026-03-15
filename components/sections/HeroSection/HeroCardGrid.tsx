'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './HeroCardGrid.module.css';
import { FIGMA_ASSETS } from '@/lib/constants/assets';

const cards = [
  { image: '/images/hero-grid/HeroCardImage01.png', width: 106, height: 646, delay: 0, offsetTop: 80 },
  { image: '/images/hero-grid/HeroCardImage02.png', width: 204, height: 691, delay: 0.1, offsetTop: 40 },
  { image: '/images/hero-grid/HeroCardImage03.png', width: 204, height: 632, delay: 0.2, offsetTop: 0 },
  { image: '/images/hero-grid/HeroCardImage04.png', width: 220, height: 587, delay: 0.3, offsetTop: 0 },
  { image: '/images/hero-grid/HeroCardImage05.png', width: 204, height: 632, delay: 0.4, offsetTop: 0, flip: true },
  { image: '/images/hero-grid/HeroCardImage06.png', width: 204, height: 691, delay: 0.5, offsetTop: 40 },
  { image: '/images/hero-grid/HeroCardImage07.png', width: 106, height: 646, delay: 0.6, offsetTop: 80, flip: true }
];

export function HeroCardGrid() {
  return (
    <div className={styles.grid}>
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className={styles.cardWrapper}
          style={{ paddingTop: `${card.offsetTop}px` }}
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
            style={{ width: `${card.width}px`, height: 'auto' }}
            priority={index < 3}
            quality={85}
            sizes={`(max-width: 640px) ${Math.round(card.width * 0.6)}px, (max-width: 1024px) ${Math.round(card.width * 0.8)}px, ${card.width}px`}
          />
        </motion.div>
      ))}
    </div>
  );
}
