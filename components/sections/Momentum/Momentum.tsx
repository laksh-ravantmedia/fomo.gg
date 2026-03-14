'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Momentum.module.css';
import { fadeInUp } from '@/lib/utils/animations';

export function Momentum() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div 
            className={styles.content}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className={styles.heading}>Ride the Momentum</h2>
            <p className={styles.description}>
              Catch the wave before it peaks. Our real-time momentum indicators help you 
              spot trending coins before they explode.
            </p>
            <ul className={styles.features}>
              <li>📈 Real-time price tracking</li>
              <li>🔥 Trending coins dashboard</li>
              <li>⚡ Instant buy notifications</li>
              <li>💰 Smart entry/exit signals</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className={styles.visual}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.chart}>
              <div className={styles.chartGlow} />
              <div className={styles.chartBars}>
                {[65, 45, 80, 55, 90, 70, 95].map((height, i) => (
                  <motion.div
                    key={i}
                    className={styles.bar}
                    style={{ height: `${height}%` }}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  />
                ))}
              </div>
              <div className={styles.trendLine}>
                <svg viewBox="0 0 300 100" className={styles.trendSvg}>
                  <motion.path
                    d="M 0 80 Q 50 60 100 40 T 200 20 L 300 10"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
