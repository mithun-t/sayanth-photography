import React from 'react';
import WashiTape from '../ui/WashiTape';
import { 
  DoodleSkates, 
  DoodleCamera, 
  DoodleCat, 
  DoodleLamp, 
  DoodleArrow, 
  DoodleHeart, 
  CoffeeRing, 
  LuggageTag 
} from '../ui/DoodleIcons';
import { playShutterSound } from '../../data/portfolioData';

export default function HeroSection({ onOpenPhoto, onInquireClick }) {
  return (
    <section id="home" className="relative pt-6 pb-16 sm:py-20 overflow-hidden bg-paper-texture">
      
      {/* Background Subtle Coffee Stains & Accents */}
      <CoffeeRing className="absolute -top-10 -right-10 w-44 h-44 sm:w-64 sm:h-64 opacity-20 pointer-events-none" />
      <CoffeeRing className="absolute bottom-20 -left-12 w-48 h-48 opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Scrapbook Collage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          
          {/* Left Column: Brand Navigation & Torn Paper Photo (Col 1-3) */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Vintage Editorial Brand Title (as in reference top-left) */}
            <div className="border-b-2 border-dashed border-[#D6C2A1] pb-4 w-full">
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1C1917] tracking-tight uppercase leading-none">
                SAYANTH
              </h1>
              <span className="font-script text-2xl text-[#B94A3E] font-bold block -mt-1">
                photo & cinema
              </span>
              <p className="font-mono-editorial text-[9px] text-[#786E64] tracking-[0.25em] uppercase mt-1">
                EST. 2024 • KERALA
              </p>
            </div>

            {/* Reference-style Editorial Nav List (Desktop) */}
            <nav className="hidden lg:flex flex-col space-y-2.5 font-display text-xs font-bold tracking-[0.22em] text-[#3E342B] uppercase">
              <a href="#home" className="hover:text-[#B94A3E] transition-colors">HOME</a>
              <a href="#about" className="hover:text-[#B94A3E] transition-colors">ABOUT</a>
              <a href="#stories" className="hover:text-[#B94A3E] transition-colors">PORTFOLIO</a>
              <a href="#packages" className="hover:text-[#B94A3E] transition-colors">SERVICES</a>
              <a href="#reviews" className="hover:text-[#B94A3E] transition-colors">KIND WORDS</a>
              <a href="#contact" className="hover:text-[#B94A3E] transition-colors">CONTACT</a>
            </nav>

            {/* Left Photo 1: Torn Paper Scrap Photo with Washi Tape */}
            <div 
              className="relative bg-[#FAF6F0] p-2.5 rounded-sm shadow-md rotate-[-2deg] hover:rotate-0 transition-transform cursor-pointer max-w-[240px] sm:max-w-[280px]"
              onClick={() => {
                playShutterSound();
                onOpenPhoto({
                  id: 'hero-mundu',
                  title: 'Traditional Kasavu Heritage',
                  image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85',
                  caption: 'Kasavu linen & temple memories',
                  location: 'Kerala, India',
                  device: 'Captured with Vivo V40 • Zeiss Portrait'
                });
              }}
            >
              <WashiTape variant="amber" angle="rotate-[-6deg]" className="-top-3 left-4" />
              <div className="overflow-hidden aspect-[3/4] bg-[#1E1B18]">
                <img 
                  src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80" 
                  alt="Traditional Portrait" 
                  className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="mt-2 text-center">
                <span className="font-script text-base text-[#3E342B] font-bold block">
                  Heritage in Kasavu Linen
                </span>
                <span className="font-mono-editorial text-[8px] text-[#786E64] uppercase tracking-widest">
                  Palakkad, Kerala
                </span>
              </div>
            </div>

            {/* Small Candid Negative Frame below */}
            <div 
              className="relative hidden sm:block bg-[#121214] p-2 rounded-sm text-amber-400 rotate-[3deg] shadow-lg max-w-[200px] cursor-pointer"
              onClick={() => {
                playShutterSound();
                onOpenPhoto({
                  id: 'hero-candid-detail',
                  title: 'Intimate Detail Framing',
                  image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85',
                  caption: 'Jasmine & temple bells',
                  location: 'Alappuzha',
                  device: 'iQOO Neo 9 Pro'
                });
              }}
            >
              <WashiTape variant="kraft" angle="rotate-[-2deg]" className="-top-2 right-2 w-16" />
              <div className="aspect-square overflow-hidden bg-neutral-900 border border-neutral-700">
                <img 
                  src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=500&q=80" 
                  alt="Detail shot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[7px] font-mono-editorial tracking-widest text-center mt-1 text-amber-500/80">
                ● SAYANTH 400 • FRAME 09
              </div>
            </div>

          </div>

          {/* Center Column: Main Hero Couple Photo + Manifesto (Col 4-8) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Center Big Framed Photo (matching reference top center) */}
            <div 
              className="relative w-full max-w-[420px] bg-[#FAF6F0] p-3 sm:p-4 rounded-sm polaroid-shadow rotate-[1deg] hover:rotate-0 transition-all duration-300 cursor-pointer"
              onClick={() => {
                playShutterSound();
                onOpenPhoto({
                  id: 'hero-main-couple',
                  title: 'Unscripted Raw Connection',
                  image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85',
                  caption: 'That feel good type of love',
                  location: 'Munnar Valleys, Kerala',
                  device: 'Vivo V40 • Natural Bokeh'
                });
              }}
            >
              {/* Top Washi Tape */}
              <WashiTape variant="gold" angle="-rotate-1" className="-top-3.5 left-1/2 -translate-x-1/2 w-36" />
              
              {/* Photo */}
              <div className="aspect-[4/3] overflow-hidden rounded-[2px] bg-[#1E1B18]">
                <img 
                  src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=85" 
                  alt="Couple embracing candidly" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Polaroids bottom badge */}
              <div className="mt-3 flex items-center justify-between px-1">
                <span className="font-script text-lg sm:text-xl text-[#1C1917] font-bold">
                  "Every frame tells our story"
                </span>
                <span className="font-mono-editorial text-[9px] text-[#8C3A27] font-semibold uppercase tracking-wider">
                  Munnar, Kerala
                </span>
              </div>
            </div>

            {/* Doodles & Headline Section (faithful to reference center) */}
            <div className="mt-10 text-center relative w-full">
              
              {/* Roller Skates Doodle & Camera Doodle */}
              <div className="flex items-center justify-center gap-6 mb-2">
                <DoodleSkates className="w-14 h-14 sm:w-16 sm:h-16 text-[#1C1917]" />
                <DoodleCamera className="w-14 h-14 sm:w-16 sm:h-16 text-[#1C1917]" />
              </div>

              {/* Bold Headline: THAT FEEL GOOD TYPE OF LOVE YOU ALWAYS Dreamt of! */}
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#1C1917] tracking-tight uppercase leading-tight max-w-xl mx-auto">
                THAT FEEL GOOD TYPE OF STORY YOU ALWAYS{' '}
                <span className="font-script text-3xl sm:text-4xl md:text-5xl text-[#B94A3E] font-normal normal-case block sm:inline">
                  Dreamt of!
                </span>
              </h2>

              {/* Hand-drawn arrow & heart */}
              <div className="flex items-center justify-center gap-2 my-2">
                <DoodleHeart className="w-5 h-5 text-[#B94A3E] animate-pulse" />
                <DoodleArrow direction="right" className="w-12 h-6 text-[#1C1917]" />
              </div>

              {/* Manifesto Paragraph (Word for word adapted authentically) */}
              <p className="text-[#3E342B] text-xs sm:text-sm leading-relaxed max-w-lg mx-auto text-justify sm:text-center font-normal px-2">
                Love and stories look and feel different within each person; no two relationships or moments are ever the same. Your unique, authentic, unapologetic story is what I'm here for. If you're looking for a photographer who captures in-the-moment, non-traditional and nostalgic frames, then <strong>HEY HEY!</strong> Whether you're tying the knot in your hometown, witnessing sacred temple festival lights across Kerala, or rocking out at a live concert stage... I'm here for it all! Why? Because I'm here for YOU. I want your day, all the days leading up to it and all the memories following, to be something you thought you could only dream of. Can we be besties now? I'm ready to make a new friend!
              </p>

              {/* Call to action question & button */}
              <div className="mt-6">
                <p className="font-display font-bold text-xs sm:text-sm tracking-[0.16em] uppercase text-[#1C1917] mb-3">
                  ARE YOU READY TO HAVE THE BEST DAY OF YOUR LIFE?
                </p>
                <button
                  onClick={onInquireClick}
                  className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 rounded-sm bg-[#1C1917] hover:bg-[#B94A3E] text-[#FAF6F0] font-display font-bold text-xs tracking-widest uppercase transition-all shadow-lg active:scale-95"
                >
                  <span>LET'S CONNECT & MAKE MAGIC</span>
                  <span>⟶</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Tall Vertical Portrait, Luggage Tag, & Polaroid (Col 9-12) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end space-y-6">
            
            {/* Tall Vertical Couple / Temple Portrait with Handwritten Vertical Annotation */}
            <div className="relative flex items-center">
              
              {/* Handwritten vertical script: for the wild + unapologetic ⟶ */}
              <div className="hidden sm:block absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap">
                <span className="font-script text-xl sm:text-2xl text-[#1C1917] font-bold tracking-wide">
                  for the wild + authentic ⟶
                </span>
              </div>

              {/* Tall Photo Card */}
              <div 
                className="relative bg-[#FAF6F0] p-2.5 sm:p-3 rounded-sm shadow-xl rotate-[2deg] hover:rotate-0 transition-transform cursor-pointer max-w-[260px] sm:max-w-[290px]"
                onClick={() => {
                  playShutterSound();
                  onOpenPhoto({
                    id: 'hero-temple-tall',
                    title: 'The Grand Utsavam Chariot',
                    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=85',
                    caption: 'Temple lights & divine echo',
                    location: 'Thrissur, Kerala',
                    device: 'iQOO Neo 9 Pro • 50MP'
                  });
                }}
              >
                <WashiTape variant="gold" angle="rotate-[-3deg]" className="-top-3 right-4" />
                <div className="aspect-[3/4] overflow-hidden bg-[#1E1B18] rounded-[2px]">
                  <img 
                    src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=85" 
                    alt="Kerala Temple Festival Ratham" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-2 text-center">
                  <span className="font-script text-base text-[#1C1917] font-bold block">
                    The Grand Utsavam Chariot
                  </span>
                  <span className="font-mono-editorial text-[8px] text-[#786E64] uppercase tracking-widest">
                    Thrissur Temple Festival
                  </span>
                </div>
              </div>
            </div>

            {/* Black Cat Doodle & Vintage Polaroid with Luggage Tag */}
            <div className="relative w-full max-w-[280px] pt-4">
              
              {/* Black Cat Illustration with Botanicals (from reference) */}
              <div className="absolute -top-6 left-0 z-10 pointer-events-none">
                <DoodleCat className="w-16 h-16 sm:w-20 sm:h-20 text-[#1C1917]" />
              </div>

              {/* Live Concert / Stage Polaroid */}
              <div 
                className="relative bg-[#FAF6F0] p-3 rounded-sm shadow-lg rotate-[-3deg] hover:rotate-0 transition-transform cursor-pointer"
                onClick={() => {
                  playShutterSound();
                  onOpenPhoto({
                    id: 'hero-concert-live',
                    title: 'Stage Echo & Vocal Harmony',
                    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85',
                    caption: 'Live concert magic',
                    location: 'Kochi Stage Festival',
                    device: 'iQOO Neo 9 Pro'
                  });
                }}
              >
                <WashiTape variant="blue" angle="rotate-4" className="-top-2 left-1/2 -translate-x-1/2" />
                <div className="aspect-square overflow-hidden bg-neutral-900 rounded-[2px]">
                  <img 
                    src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80" 
                    alt="Live Concert" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2 text-center">
                  <span className="font-script text-sm sm:text-base text-[#1C1917] font-bold">
                    Two Voices • Live Stage
                  </span>
                </div>
              </div>

              {/* Handwritten Luggage Tag Quote (from reference) */}
              <div className="mt-4 -rotate-2 flex justify-center">
                <LuggageTag 
                  text="Unscripted, soulful & emotional moments captured forever" 
                  className="max-w-[260px] text-center"
                />
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
