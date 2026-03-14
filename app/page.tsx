import dynamic from 'next/dynamic';
import { Navigation } from '@/components/layout/Navigation/Navigation';
import { Footer } from '@/components/layout/Footer/Footer';
import { HeroSection } from '@/components/sections/HeroSection/HeroSection';
import { AssetTicker } from '@/components/sections/AssetTicker/AssetTicker';
import { HowItWorks } from '@/components/sections/HowItWorks/HowItWorks';

const CreateCoin = dynamic(() => import('@/components/sections/CreateCoin/CreateCoin').then(mod => ({ default: mod.CreateCoin })));
const TradingCoins = dynamic(() => import('@/components/sections/TradingCoins/TradingCoins').then(mod => ({ default: mod.TradingCoins })));
const Momentum = dynamic(() => import('@/components/sections/Momentum/Momentum').then(mod => ({ default: mod.Momentum })));
const TradeTools = dynamic(() => import('@/components/sections/TradeTools/TradeTools').then(mod => ({ default: mod.TradeTools })));
const FastTrading = dynamic(() => import('@/components/sections/FastTrading/FastTrading').then(mod => ({ default: mod.FastTrading })));
const Discovery = dynamic(() => import('@/components/sections/Discovery/Discovery').then(mod => ({ default: mod.Discovery })));
const InstallCTA = dynamic(() => import('@/components/sections/InstallCTA/InstallCTA').then(mod => ({ default: mod.InstallCTA })));

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <AssetTicker />
        <HowItWorks />
        <CreateCoin />
        <TradingCoins />
        <Momentum />
        <TradeTools />
        <FastTrading />
        <Discovery />
        <InstallCTA />
      </main>
      <Footer />
    </>
  );
}
