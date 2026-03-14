import { Navigation } from '@/components/layout/Navigation/Navigation';
import { Footer } from '@/components/layout/Footer/Footer';
import { HeroSection } from '@/components/sections/HeroSection/HeroSection';
import { AssetTicker } from '@/components/sections/AssetTicker/AssetTicker';
import { HowItWorks } from '@/components/sections/HowItWorks/HowItWorks';
import { InstallCTA } from '@/components/sections/InstallCTA/InstallCTA';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AssetTicker />
        <HowItWorks />
        <InstallCTA />
      </main>
      <Footer />
    </>
  );
}
