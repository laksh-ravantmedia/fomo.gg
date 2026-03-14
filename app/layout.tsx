import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://fomo.gg'),
  title: {
    default: "FOMO.gg - Trade Meme Coins. Launch Your Own.",
    template: "%s | FOMO.gg"
  },
  description: "Buy trending coins or launch your own in seconds. Fair bonding curves, instant deployment on Solana. All directly from your phone.",
  keywords: ["meme coins", "crypto trading", "solana", "bonding curve", "launch token", "defi", "trading app"],
  authors: [{ name: "FOMO.gg Team" }],
  creator: "FOMO.gg",
  publisher: "FOMO.gg",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fomo.gg",
    title: "FOMO.gg - Trade Meme Coins. Launch Your Own.",
    description: "Buy trending coins or launch your own in seconds. Fair bonding curves, instant deployment on Solana.",
    siteName: "FOMO.gg",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FOMO.gg - Meme Coin Trading Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "FOMO.gg - Trade Meme Coins. Launch Your Own.",
    description: "Buy trending coins or launch your own in seconds. Fair bonding curves on Solana.",
    images: ["/og-image.png"],
    creator: "@fomogg"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
