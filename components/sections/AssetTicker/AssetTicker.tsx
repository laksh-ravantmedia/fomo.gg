'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './AssetTicker.module.css';
import { TickerChip } from './TickerChip';
import { MOCK_CRYPTO_DATA } from '@/lib/constants/mockData';

export function AssetTicker() {
  return (
    <section className={styles.section}>
      <div className={styles.tickerWrapper}>
        <svg className={styles.connections} width="1440" height="160">
          <path d="M 0 50 L 259 139" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" fill="none" />
          <line x1="258" y1="59" x2="428" y2="59" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" />
          <line x1="736" y1="65" x2="906" y2="65" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" />
          <line x1="1177" y1="59" x2="1347" y2="59" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" />
          <path d="M 1440 50 L 1181 139" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" fill="none" />
        </svg>

        <div className={styles.glowNode} style={{ left: '238px', top: '51px' }} />
        <div className={styles.glowNode} style={{ left: '1214px', top: '43px' }} />

        <motion.div
          className={styles.chipContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {MOCK_CRYPTO_DATA.map((asset, index) => (
            <TickerChip key={asset.id} asset={asset} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
