'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './FastTrading.module.css';
import { fadeInUp } from '@/lib/utils/animations';

const features = [
  {
    title: 'Lightning Fast',
    description: 'Execute trades in milliseconds with our optimized Solana integration.',
    icon: '⚡'
  },
  {
    title: 'Zero Fees',
    description: 'No platform fees. Only network gas fees apply.',
    icon: '💎'
  },
  {
    title: 'Mobile First',
    description: 'Trade anywhere, anytime from your phone.',
    icon: '📱'
  }
];

export function FastTrading() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.heading}>Everything You Need to Trade</h2>
          <p className={styles.subtitle}>
            Built for speed, designed for simplicity. The fastest way to trade meme coins.
          </p>
        </motion.div>
        
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={styles.feature}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
