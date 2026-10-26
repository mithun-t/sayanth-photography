import React, { useState } from 'react';
import PolaroidCard from '../ui/PolaroidCard';
import { PORTFOLIO_STORIES } from '../../data/portfolioData';
import { Camera, Sparkles, SlidersHorizontal } from 'lucide-react';

export default function PortfolioSection({ onOpenPhoto }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stories' },
    { id: 'cultural', label: 'Temple & Heritage' },
    { id: 'portraits', label: 'Traditional Portraits' },
    { id: 'concerts', label: 'Live Events & Stage' },
    { id: 'candid', label: 'Candid Emotions' }
  ];

  const filteredStories = activeCategory === 'all' 
    ? PORTFOLIO_STORIES 
    : PORTFOLIO_STORIES.filter(item => item.category === activeCategory);

  return (
    <section id="stories" className="relative py-14 sm:py-20 bg-paper-texture overflow-hidden border-t border-[#E5DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#D5C2A3] text-[#B94A3E] font-mono-editorial text-[10px] tracking-widest uppercase mb-3 shadow-sm">
            <Camera className="w-3.5 h-3.5" />
            <span>PORTFOLIO STORIES • SAYANTH PHOTOGRAPHY</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1C1917] tracking-tight uppercase leading-none">
            EVERY FRAME TELLS<br />
            <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#B94A3E] font-normal normal-case">
              A Soulful Story
            </span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#57534E] mt-3 leading-relaxed">
            From the grand wooden chariots and lamps of Kerala temple festivals, to relaxed portraits in Kasavu linen, and raw adrenaline on concert stages. Click any frame to inspect the story.
          </p>

          {/* Filter Pills - Mobile-friendly horizontal scroll */}
          <div className="flex items-center justify-start sm:justify-center gap-2 mt-6 overflow-x-auto pb-2 scrollbar-none px-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-sm font-display text-xs font-bold tracking-wider uppercase transition-all shrink-0 cursor-pointer ${
                    isActive 
                      ? 'bg-[#1C1917] text-[#FAF6F0] shadow-md scale-105' 
                      : 'bg-[#FAF6F0] text-[#57534E] hover:text-[#1C1917] hover:bg-[#EFE5D7] border border-[#DFCDB2]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrapbook Masonry Grid of Polaroids */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
          {filteredStories.map((story) => (
            <PolaroidCard
              key={story.id}
              image={story.thumbnail || story.image}
              title={story.title}
              caption={story.caption}
              location={story.location}
              date={story.date}
              device={story.device}
              rotation={story.rotation}
              tapeVariant={story.tapeColor}
              tapeAngle={story.rotation === 'rotate-1' ? '-rotate-3' : 'rotate-2'}
              onClick={() => onOpenPhoto(story)}
            />
          ))}
        </div>

        {/* Bottom Instagram Prompt */}
        <div className="mt-12 text-center">
          <p className="font-script text-xl sm:text-2xl text-[#3E342B] font-bold">
            Want to see daily stories & behind-the-scenes?
          </p>
          <a
            href="https://instagram.com/sayanth_photography/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 px-5 py-2 rounded-full bg-[#1C1917] hover:bg-[#B94A3E] text-[#FAF6F0] font-display font-bold text-xs tracking-widest uppercase transition-colors shadow-md"
          >
            <span>Follow @sayanth_photography on Instagram</span>
            <span>⟶</span>
          </a>
        </div>

      </div>
    </section>
  );
}
