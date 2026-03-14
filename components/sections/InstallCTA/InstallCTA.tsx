'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './InstallCTA.module.css';
import { AppStoreButton, PlayStoreButton } from '@/components/ui/Button/Button';
import { fadeInUp } from '@/lib/utils/animations';

export function InstallCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.heading}>Install Now and Start Trading</h2>
          <p className={styles.description}>
            Available on iOS and Android. Start trading meme coins in seconds.
          </p>
          
          <div className={styles.actions}>
            <AppStoreButton />
            <PlayStoreButton />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
