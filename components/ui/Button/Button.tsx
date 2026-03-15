import React from 'react';
import Image from 'next/image';
import styles from './Button.module.css';

interface ButtonProps {
  variant: 'app-store' | 'play-store' | 'primary';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button({ variant, children, onClick, className = '' }: ButtonProps) {
  return (
    <button 
      className={`${styles.button} ${styles[variant]} ${className}`}
      onClick={onClick}
      type="button"
      aria-label={variant === 'app-store' ? 'Download on App Store' : variant === 'play-store' ? 'Get it on Google Play' : undefined}
    >
      {children}
    </button>
  );
}

export function AppStoreButton() {
  return (
    <a 
      href="#" 
      className={styles.storeBadge}
      aria-label="Download on App Store"
    >
      <Image 
        src="/images/hero/ButtonAppStore.svg"
        alt="Download on the App Store"
        width={140}
        height={50}
        priority
      />
    </a>
  );
}

export function PlayStoreButton() {
  return (
    <a 
      href="#" 
      className={styles.storeBadge}
      aria-label="Get it on Google Play"
    >
      <Image 
        src="/images/hero/ButtonPlayStore.svg"
        alt="Get it on Google Play"
        width={140}
        height={50}
        priority
      />
    </a>
  );
}
