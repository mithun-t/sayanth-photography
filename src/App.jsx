import React, { useState } from 'react';
import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import PortfolioSection from './components/sections/PortfolioSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import PricingSection from './components/sections/PricingSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ContactPostcard from './components/sections/ContactPostcard';
import Footer from './components/sections/Footer';
import TickerMarquee from './components/ui/TickerMarquee';
import LightboxModal from './components/ui/LightboxModal';
import { PORTFOLIO_STORIES, playShutterSound } from './data/portfolioData';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleOpenPhoto = (photo) => {
    if (soundEnabled) playShutterSound();
    setSelectedPhoto(photo);
  };

  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#1C1917] flex flex-col font-sans selection:bg-[#E2D4BF] selection:text-[#1C1917]">
      
      {/* Navigation */}
      <Navbar 
        soundEnabled={soundEnabled} 
        setSoundEnabled={setSoundEnabled} 
        onBookClick={handleBookClick} 
      />

      <main className="flex-1">
        {/* 1. Hero Scrapbook Collage */}
        <HeroSection 
          onOpenPhoto={handleOpenPhoto} 
          onInquireClick={handleBookClick} 
        />

        {/* 2. Marquee Ticker 1 */}
        <TickerMarquee 
          variant="paper" 
          items={[
            'FOR THE WILD + UNAPOLOGETIC',
            'EVERY FRAME TELLS A STORY',
            'KERALA TEMPLE FESTIVALS & UTSAVAMS',
            'TRADITIONAL PORTRAITS IN KASAVU',
            'LIVE STAGE & CONCERT ENERGIES',
            'CAPTURING RAW EMOTIONS'
          ]}
        />

        {/* 3. Meet Sayanth / About & Philosophy */}
        <AboutSection 
          onOpenPhoto={handleOpenPhoto} 
          onInquireClick={handleBookClick} 
        />

        {/* 4. Marquee Ticker 2 (Reverse direction & Dark contrast) */}
        <TickerMarquee 
          variant="dark" 
          reverse={true} 
          items={[
            'KIND WORDS',
            'LOVE LETTERS',
            'UNSCRIPTED SOULS',
            'IMMORTALIZING FLEETING MOMENTS',
            'AUTHENTIC VISUAL STORYTELLING',
            'EST. KERALA 2024'
          ]}
        />

        {/* 5. Filterable Portfolio Moodboard */}
        <PortfolioSection 
          onOpenPhoto={handleOpenPhoto} 
        />

        {/* 6. Client Love & Reviews */}
        <TestimonialsSection />

        {/* 7. Investment & Packages */}
        <PricingSection 
          onSelectPackage={handleSelectPackage} 
        />

        {/* 8. The 4-Step Journey */}
        <ExperienceSection />

        {/* 9. Interactive Postcard Love Letter Form */}
        <ContactPostcard 
          selectedPackage={selectedPackage} 
        />
      </main>

      {/* 10. Scrapbook Footer */}
      <Footer onOpenPhoto={handleOpenPhoto} />

      {/* Global Fullscreen Lightbox Modal */}
      {selectedPhoto && (
        <LightboxModal 
          photo={selectedPhoto} 
          allPhotos={PORTFOLIO_STORIES}
          onClose={() => setSelectedPhoto(null)} 
          onSelectPhoto={(p) => setSelectedPhoto(p)}
        />
      )}

    </div>
  );
}
