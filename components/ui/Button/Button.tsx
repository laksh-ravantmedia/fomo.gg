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
    <Button variant="app-store">
      <div className={styles.appStoreContent}>
        <Image 
          src="https://www.figma.com/api/mcp/asset/17e0169f-6376-46cb-bc3c-f9a0ad0f8021" 
          alt=""
          width={20}
          height={24}
          className={styles.appStoreIcon}
        />
        <div className={styles.appStoreText}>
          <span className={styles.appStoreSubtext}>Download on the</span>
          <span className={styles.appStoreTitle}>App Store</span>
        </div>
      </div>
    </Button>
  );
}

export function PlayStoreButton() {
  return (
    <Button variant="play-store">
      <div className={styles.playStoreContent}>
        <Image 
          src="https://www.figma.com/api/mcp/asset/0ba4618a-ce22-4520-ad14-96831023cf31" 
          alt=""
          width={21}
          height={24}
          className={styles.playStoreIcon}
        />
        <div className={styles.playStoreText}>
          <span className={styles.playStoreSubtext}>GET IT ON</span>
          <Image 
            src="https://www.figma.com/api/mcp/asset/f2c7a07a-3254-43c3-99a3-d5eef13169cf" 
            alt=""
            width={74}
            height={15}
            className={styles.playStoreLogo}
          />
        </div>
      </div>
    </Button>
  );
}
