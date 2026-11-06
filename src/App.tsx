import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PlatformSection } from './components/PlatformSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { MarketPricingSection } from './components/MarketPricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PilotModal } from './components/PilotModal';

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);

  const handleOpenPilotModal = (triggerElem?: HTMLElement | null) => {
    if (triggerElem) {
      triggerRef.current = triggerElem;
    }
    setIsModalOpen(true);
  };

  const handleClosePilotModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app-root">
      {/* Compact Sticky Header */}
      <Header onRequestPilot={handleOpenPilotModal} />

      {/* Main Content: Exactly 7 main sections in order */}
      <main id="main-content">
        {/* 1. Home */}
        <HeroSection onRequestPilot={handleOpenPilotModal} />

        {/* 2. About */}
        <AboutSection />

        {/* 3. Platform */}
        <PlatformSection />

        {/* 4. How It Works */}
        <HowItWorksSection />

        {/* 5. Market & Pricing */}
        <MarketPricingSection onRequestPilot={handleOpenPilotModal} />

        {/* 6. FAQ */}
        <FaqSection />
      </main>

      {/* 7. Footer */}
      <Footer onRequestPilot={handleOpenPilotModal} />

      {/* Accessible Request a Pilot Modal (Local storage only) */}
      <PilotModal
        isOpen={isModalOpen}
        onClose={handleClosePilotModal}
        triggerRef={triggerRef}
      />
    </div>
  );
};

export default App;
