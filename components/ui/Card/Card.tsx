import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  variant?: 'default' | 'step' | 'metric' | 'token';
  glowColor?: string;
  children: React.ReactNode;
  className?: string;
}

export const Card = React.memo(function Card({ variant = 'default', glowColor, children, className = '' }: CardProps) {
  return (
    <div 
      className={`${styles.card} ${styles[variant]} ${className}`}
      style={glowColor ? { '--glow-color': glowColor } as React.CSSProperties : undefined}
    >
      {glowColor && <div className={styles.glow} />}
      {children}
    </div>
  );
});
