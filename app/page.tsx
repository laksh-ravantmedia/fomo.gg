import { Navigation } from '@/components/layout/Navigation/Navigation';
import { Footer } from '@/components/layout/Footer/Footer';
import { HeroSection } from '@/components/sections/HeroSection/HeroSection';
import { AssetTicker } from '@/components/sections/AssetTicker/AssetTicker';
import { HowItWorks } from '@/components/sections/HowItWorks/HowItWorks';
import { CreateCoin } from '@/components/sections/CreateCoin/CreateCoin';
import { TradingCoins } from '@/components/sections/TradingCoins/TradingCoins';
import { Momentum } from '@/components/sections/Momentum/Momentum';
import { TradeTools } from '@/components/sections/TradeTools/TradeTools';
import { FastTrading } from '@/components/sections/FastTrading/FastTrading';
import { Discovery } from '@/components/sections/Discovery/Discovery';
import { InstallCTA } from '@/components/sections/InstallCTA/InstallCTA';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
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
