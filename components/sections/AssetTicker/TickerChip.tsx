'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './TickerChip.module.css';
import { CryptoAsset } from '@/lib/types';

interface TickerChipProps {
  asset: CryptoAsset;
  index: number;
}

export function TickerChip({ asset, index }: TickerChipProps) {
  return (
    <motion.div
      className={styles.chip}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      <div className={styles.glow} style={{ background: `radial-gradient(circle, ${asset.glowColor}40 0%, transparent 70%)` }} />
      
      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.avatar} style={{ background: asset.glowColor }}>
            {asset.symbol.charAt(0)}
          </div>
          <div className={styles.info}>
            <div className={styles.name}>{asset.name}</div>
            <div className={styles.price}>{asset.price}</div>
          </div>
        </div>
        
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statLabel}>Market Cap</div>
            <div className={styles.statValue}>{asset.marketCap}</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statLabel}>ATH</div>
            <div className={styles.statValue}>{asset.athValue}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
