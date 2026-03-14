import React from 'react';
import styles from './GlowEffect.module.css';

interface GlowEffectProps {
  color?: 'purple' | 'blue' | 'green';
  size?: 'sm' | 'md' | 'lg';
  intensity?: number;
  className?: string;
}

export function GlowEffect({ 
  color = 'purple', 
  size = 'md', 
  intensity = 0.3,
  className = '' 
}: GlowEffectProps) {
  return (
    <div 
      className={`${styles.glow} ${styles[color]} ${styles[size]} ${className}`}
      style={{ opacity: intensity }}
      aria-hidden="true"
    />
  );
}
