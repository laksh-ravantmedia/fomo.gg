'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './CreateCoin.module.css';
import { fadeInUp } from '@/lib/utils/animations';

export function CreateCoin() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div 
            className={styles.visual}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.visualCard}>
              <div className={styles.visualGlow} />
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <span className={styles.metricLabel}>Price</span>
                  <span className={styles.metricValue}>$0.00045</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricLabel}>Volume</span>
                  <span className={styles.metricValue}>$850K</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricLabel}>Market Cap</span>
                  <span className={styles.metricValue}>$2.1M</span>
                </div>
              </div>
              
              <div className={styles.avatar}>
                <div className={styles.avatarGlow} />
                <div className={styles.avatarCore}>🚀</div>
              </div>
              
              <div className={styles.bondingCurve}>
                <div className={styles.bondingHeader}>
                  <span>Bonding Curve</span>
                  <span className={styles.bondingPercent}>16.9%</span>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: '16.9%' }} />
                </div>
                <div className={styles.bondingStats}>
                  <span>Raised 31.6 SOL</span>
                  <span>68.4 SOL Remaining</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.content}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className={styles.heading}>Create Your Own Coin</h2>
            <p className={styles.description}>
              Launch your meme coin in seconds with our fair bonding curve system. 
              No coding required, no hidden fees. Just pure meme energy.
            </p>
            <ul className={styles.features}>
              <li>✨ Instant deployment on Solana</li>
              <li>📊 Fair bonding curve mechanism</li>
              <li>🔒 Liquidity automatically locked</li>
              <li>🎯 Trade immediately after launch</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
