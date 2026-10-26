import React, { useState } from 'react';
import BrandLogo from '../ui/BrandLogo';
import { Volume2, VolumeX, Menu, X, Home, Compass, User, Mail, Sparkles } from 'lucide-react';
import { InstagramIcon } from '../ui/DoodleIcons';

export default function Navbar({ soundEnabled, setSoundEnabled, onBookClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '#home', icon: Home },
    { label: 'STORIES', href: '#stories', icon: Compass },
    { label: 'ABOUT', href: '#about', icon: User },
    { label: 'REVIEWS', href: '#reviews', icon: Sparkles },
    { label: 'PACKAGES', href: '#packages', icon: Mail },
    { label: 'CONTACT', href: '#contact', icon: Mail }
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Desktop & Tablet Navigation */}
      <header className="sticky top-0 z-40 w-full bg-[#F5EFE6]/90 backdrop-blur-md border-b border-[#E5DACB] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="#home" className="flex items-center gap-3 group">
            <BrandLogo size="md" className="group-hover:scale-105 transition-transform" />
            <div className="text-left">
              <span className="font-display font-extrabold text-sm sm:text-base tracking-[0.2em] uppercase text-[#1C1917] block leading-none">
                SAYANTH
              </span>
              <span className="font-script text-xs sm:text-sm text-[#B94A3E] font-bold block leading-tight mt-0.5">
                Every Frame Tells A Story
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display text-xs font-bold tracking-[0.18em] text-[#3D3730] hover:text-[#B94A3E] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B94A3E] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Shutter Sound Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 text-[#786E64] hover:text-[#1C1917] hover:bg-[#EBE2D4] rounded-full transition-colors"
              title={soundEnabled ? 'Mute shutter sound fx' : 'Enable shutter sound fx'}
              aria-label="Toggle camera sound effects"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-[#B94A3E]" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Instagram Profile Link */}
            <a
              href="https://instagram.com/sayanth_photography/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A1816] text-[#FAF6F0] hover:bg-[#B94A3E] transition-colors text-xs font-display font-semibold tracking-wider shadow-sm"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-[#E6C665]" />
              <span>@sayanth_photography</span>
            </a>

            {/* Let's Connect CTA */}
            <button
              onClick={onBookClick}
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-sm bg-[#B94A3E] hover:bg-[#9B372B] text-[#FAF6F0] font-display font-bold text-xs tracking-widest uppercase transition-all shadow-[0_2px_8px_rgba(185,74,62,0.3)] active:scale-95"
            >
              Inquire
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1C1917] hover:bg-[#EBE2D4] rounded-sm transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF6F0] border-b border-[#DFCDB2] px-6 py-6 space-y-4 shadow-lg animate-fade-in text-left">
            <div className="font-script text-base text-[#B94A3E] font-bold pb-2 border-b border-[#E8DEC9]">
              Every Frame Tells A Story • Sayanth Photography
            </div>
            <div className="grid grid-cols-2 gap-3 pt-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={handleNavClick}
                    className="flex items-center gap-2.5 p-2 rounded-sm hover:bg-[#EFE7D8] text-[#1C1917] font-display font-bold text-xs tracking-widest"
                  >
                    <Icon className="w-4 h-4 text-[#B94A3E]" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
            <div className="pt-3 border-t border-[#DFCDB2] flex justify-between items-center">
              <a
                href="https://instagram.com/sayanth_photography/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#1C1917] hover:text-[#B94A3E]"
              >
                <InstagramIcon className="w-4 h-4 text-[#B94A3E]" />
                <span>Follow on Instagram</span>
              </a>
              <span className="font-mono-editorial text-[10px] text-[#786E64]">Kerala, India</span>
            </div>
          </div>
        )}
      </header>

      {/* Mobile-First Sticky Bottom Quick Nav Bar */}
      <nav className="md:hidden fixed bottom-3 left-3 right-3 z-40 bg-[#1A1816]/95 backdrop-blur-lg border border-amber-900/40 rounded-full px-5 py-2.5 shadow-2xl flex items-center justify-between text-[#FAF6F0]">
        <a href="#home" className="flex flex-col items-center text-[10px] font-mono-editorial text-amber-200/80 hover:text-white">
          <Home className="w-4 h-4 mb-0.5" />
          <span>Home</span>
        </a>
        <a href="#stories" className="flex flex-col items-center text-[10px] font-mono-editorial text-amber-200/80 hover:text-white">
          <Compass className="w-4 h-4 mb-0.5" />
          <span>Stories</span>
        </a>
        <a href="#about" className="flex flex-col items-center text-[10px] font-mono-editorial text-amber-200/80 hover:text-white">
          <User className="w-4 h-4 mb-0.5" />
          <span>Sayanth</span>
        </a>
        <button 
          onClick={onBookClick}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B94A3E] text-white text-[11px] font-display font-bold tracking-wider uppercase shadow-md active:scale-95"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Inquire</span>
        </button>
      </nav>
    </>
  );
}
