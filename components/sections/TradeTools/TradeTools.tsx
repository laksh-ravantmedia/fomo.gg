'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './TradeTools.module.css';
import { TRENDING_TOKENS } from '@/lib/constants/mockData';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';

export function TradeTools() {
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
          Everything You Need to Trade
        </motion.h2>
        
        <motion.div 
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {TRENDING_TOKENS.map((token) => (
            <motion.div 
              key={token.symbol} 
              className={styles.tokenCard}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <div className={styles.tokenHeader}>
                <div className={styles.tokenAvatar}>
                  {token.symbol.charAt(0)}
                </div>
                <div className={styles.tokenInfo}>
                  <div className={styles.tokenName}>{token.name}</div>
                  <div className={styles.tokenSymbol}>{token.symbol}</div>
                </div>
              </div>
              
              <div className={styles.tokenStats}>
                <div className={styles.stat}>
                  <span className={styles.statValue}>{token.price}</span>
                  <span className={styles.statChange} data-positive={token.change.startsWith('+')}>
                    {token.change}
                  </span>
                </div>
                <div className={styles.statLabel}>Current Price</div>
              </div>
              
              <div className={styles.tokenActions}>
                <button className={styles.buyButton} aria-label={`Buy ${token.name}`}>Buy</button>
                <button className={styles.sellButton} aria-label={`Sell ${token.name}`}>Sell</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
