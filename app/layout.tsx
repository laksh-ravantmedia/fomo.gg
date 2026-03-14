import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";

export const metadata: Metadata = {
  title: "FOMO.gg - Trade Meme Coins. Launch Your Own.",
  description: "Buy trending coins or launch your own in seconds. All directly from your phone.",
  openGraph: {
    title: "FOMO.gg - Trade Meme Coins. Launch Your Own.",
    description: "Buy trending coins or launch your own in seconds. All directly from your phone.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOMO.gg - Trade Meme Coins. Launch Your Own.",
    description: "Buy trending coins or launch your own in seconds. All directly from your phone.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
