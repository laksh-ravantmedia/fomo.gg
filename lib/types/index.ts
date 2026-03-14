export interface CryptoAsset {
  id: string;
  name: string;
  symbol: string;
  price: string;
  marketCap: string;
  athValue: string;
  avatar: string;
  glowColor: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface MetricCard {
  label: string;
  value: string;
}

export interface TokenCard {
  name: string;
  symbol: string;
  price: string;
  change: string;
  marketCap: string;
  avatar: string;
}
