import { CryptoAsset, ProcessStep, TokenCard } from '../types';

export const MOCK_CRYPTO_DATA: CryptoAsset[] = [
  {
    id: 'sol',
    name: 'Solana',
    symbol: 'SOL',
    price: '$142.50',
    marketCap: '$65.2B',
    athValue: '8 months ago',
    avatar: '/images/crypto/sol.png',
    glowColor: '#14f195'
  },
  {
    id: 'pepe',
    name: 'Pepe',
    symbol: 'PEPE',
    price: '$0.000012',
    marketCap: '$5.1B',
    athValue: '3 months ago',
    avatar: '/images/crypto/pepe.png',
    glowColor: '#4caf50'
  },
  {
    id: 'doge',
    name: 'Dogecoin',
    symbol: 'DOGE',
    price: '$0.089',
    marketCap: '$12.8B',
    athValue: '12 months ago',
    avatar: '/images/crypto/doge.png',
    glowColor: '#c2a633'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Choose Trending Coins',
    description: 'Browse our curated list of the hottest meme coins trending right now.'
  },
  {
    number: '02',
    title: 'Start Trading Instantly',
    description: 'Buy, sell, and trade meme coins directly from your mobile device in seconds.'
  },
  {
    number: '03',
    title: 'Launch Your Own Coin',
    description: 'Create and launch your own meme coin with our easy-to-use bonding curve system.'
  }
];

export const TRENDING_TOKENS: TokenCard[] = [
  {
    name: 'Wojak',
    symbol: 'WOJAK',
    price: '$0.00045',
    change: '+24.5%',
    marketCap: '$850K',
    avatar: '/images/crypto/wojak.png'
  },
  {
    name: 'Based Pepe',
    symbol: 'BPEPE',
    price: '$0.00012',
    change: '+156.3%',
    marketCap: '$1.2M',
    avatar: '/images/crypto/bpepe.png'
  },
  {
    name: 'Moon Cat',
    symbol: 'MCAT',
    price: '$0.00089',
    change: '+89.7%',
    marketCap: '$2.1M',
    avatar: '/images/crypto/mcat.png'
  }
];
