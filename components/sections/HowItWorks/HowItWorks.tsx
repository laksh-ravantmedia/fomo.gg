'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './HowItWorks.module.css';
import { Card } from '@/components/ui/Card/Card';
import { PROCESS_STEPS } from '@/lib/constants/mockData';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';

export function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works" aria-labelledby="how-it-works-heading">
      <div className="container">
        <motion.h2 
          id="how-it-works-heading"
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>
        
        <motion.div 
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {PROCESS_STEPS.map((step, index) => (
            <motion.div key={step.number} variants={fadeInUp}>
              <Card variant="step" glowColor={index === 1 ? '#8b5cf6' : undefined}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
