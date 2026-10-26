import React from 'react';
import BrandLogo from '../ui/BrandLogo';
import { ArrowUp, Mail, Heart, Camera } from 'lucide-react';
import { InstagramIcon } from '../ui/DoodleIcons';
import { PORTFOLIO_STORIES } from '../../data/portfolioData';

export default function Footer({ onOpenPhoto }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#151412] text-[#FAF6F0] pt-14 pb-24 md:pb-14 border-t border-amber-900/40 overflow-hidden">
      
      {/* Top Instagram Preview Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-800 gap-4 text-left">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-mono-editorial text-xs tracking-widest uppercase">
              <InstagramIcon className="w-4 h-4" />
              <span>FOLLOW THE JOURNEY</span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#FAF6F0] uppercase tracking-tight mt-1">
              @sayanth_photography
            </h3>
          </div>
          <a
            href="https://instagram.com/sayanth_photography/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF6F0] hover:bg-amber-400 text-[#1C1917] font-display font-bold text-xs tracking-widest uppercase transition-colors shrink-0 shadow-md"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Visit Instagram Profile</span>
          </a>
        </div>

        {/* 4 mini polaroid feed previews */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6">
          {PORTFOLIO_STORIES.slice(0, 4).map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenPhoto(item)}
              className="group relative bg-[#1F1E1B] p-1.5 rounded-sm overflow-hidden border border-neutral-800 cursor-pointer hover:border-amber-500/50 transition-colors"
            >
              <div className="aspect-square overflow-hidden bg-neutral-900">
                <img
                  src={item.thumbnail || item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-1 text-center font-mono-editorial text-[9px] text-amber-200/80 uppercase truncate">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-neutral-800/80 text-center md:text-left">
          
          {/* Logo & Bio */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <BrandLogo size="lg" />
            <div>
              <span className="font-display font-extrabold text-xl tracking-[0.2em] uppercase text-[#FAF6F0] block">
                SAYANTH PHOTOGRAPHY
              </span>
              <span className="font-script text-lg text-amber-400 font-bold block">
                Every Frame Tells A Story
              </span>
              <p className="font-mono-editorial text-[10px] text-neutral-400 uppercase tracking-widest mt-1">
                Events • Portraits • Candid • Capturing Emotions
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-display text-xs font-bold tracking-widest uppercase text-neutral-400">
            <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#stories" className="hover:text-amber-400 transition-colors">Stories</a>
            <a href="#packages" className="hover:text-amber-400 transition-colors">Packages</a>
            <a href="#reviews" className="hover:text-amber-400 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-700 text-xs font-mono-editorial transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright and credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 font-mono-editorial text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Sayanth Photography. All rights reserved. Captured in Kerala, India.
          </div>
          <div className="flex items-center gap-1 text-neutral-400">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-[#B94A3E] fill-[#B94A3E]" />
            <span>for authentic storytelling</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
