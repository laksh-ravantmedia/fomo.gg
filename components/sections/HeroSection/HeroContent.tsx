'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './HeroContent.module.css';
import { AppStoreButton, PlayStoreButton } from '@/components/ui/Button/Button';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';

export function HeroContent() {
  return (
    <motion.div 
      className={styles.content}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div className={styles.textStack} variants={fadeInUp}>
        <h1 className={styles.title}>
          Trade Meme Coins. Launch Your Own.
        </h1>
        <p className={styles.subtitle}>
          Buy trending coins or launch your own in seconds.
          <br />
          All directly from your phone.
        </p>
      </motion.div>
      
      <motion.div className={styles.actions} variants={fadeInUp}>
        <AppStoreButton />
        <PlayStoreButton />
      </motion.div>
    </motion.div>
  );
}
