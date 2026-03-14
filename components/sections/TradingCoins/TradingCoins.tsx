'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './TradingCoins.module.css';
import { TRENDING_TOKENS } from '@/lib/constants/mockData';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';

export function TradingCoins() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.h2 
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trade Trending Coins
        </motion.h2>
        
        <motion.div 
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {TRENDING_TOKENS.map((token, index) => (
            <motion.div 
              key={token.symbol} 
              className={styles.card}
              variants={fadeInUp}
            >
              <div className={styles.cardGlow} />
              <div className={styles.cardHeader}>
                <div className={styles.tokenAvatar}>
                  {token.symbol.charAt(0)}
                </div>
                <div className={styles.tokenInfo}>
                  <div className={styles.tokenName}>{token.name}</div>
                  <div className={styles.tokenSymbol}>{token.symbol}</div>
                </div>
                <div className={styles.change} data-positive={token.change.startsWith('+')}>
                  {token.change}
                </div>
              </div>
              
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Price</span>
                  <span className={styles.statValue}>{token.price}</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Market Cap</span>
                  <span className={styles.statValue}>{token.marketCap}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
