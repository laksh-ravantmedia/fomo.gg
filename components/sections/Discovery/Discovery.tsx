'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Discovery.module.css';

export function Discovery() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div 
            className={styles.visual}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.discoveryCard}>
              <div className={styles.searchGlow} />
              <div className={styles.searchIcon}>🔍</div>
              <div className={styles.pulseRings}>
                <div className={styles.pulseRing} style={{ animationDelay: '0s' }} />
                <div className={styles.pulseRing} style={{ animationDelay: '1s' }} />
                <div className={styles.pulseRing} style={{ animationDelay: '2s' }} />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.heading}>Find the Next Big Coin</h2>
            <p className={styles.description}>
              Discover hidden gems before they moon. Our advanced algorithms scan thousands 
              of tokens to bring you the most promising opportunities.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🎯</div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>Smart Filters</h3>
                  <p className={styles.featureText}>Filter by market cap, volume, and momentum</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>📊</div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>Analytics</h3>
                  <p className={styles.featureText}>Deep dive into tokenomics and holder data</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>⚡</div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>Early Alerts</h3>
                  <p className={styles.featureText}>Get notified of new launches instantly</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
