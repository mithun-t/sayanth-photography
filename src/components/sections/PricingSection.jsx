import React from 'react';
import WashiTape from '../ui/WashiTape';
import { PACKAGES } from '../../data/portfolioData';
import { Check, Sparkles, Tag, Calendar } from 'lucide-react';
import { LuggageTag } from '../ui/DoodleIcons';

export default function PricingSection({ onSelectPackage }) {
  return (
    <section id="packages" className="relative py-14 sm:py-20 bg-paper-texture overflow-hidden border-t border-[#E5DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#D5C2A3] text-[#B94A3E] font-mono-editorial text-[10px] tracking-widest uppercase mb-3 shadow-sm">
            <Tag className="w-3.5 h-3.5" />
            <span>INVESTMENT & PACKAGES • SAYANTH PHOTOGRAPHY</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1C1917] tracking-tight uppercase leading-none">
            CURATED STORIES &<br />
            <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#B94A3E] font-normal normal-case">
              Heirloom Experiences
            </span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#57534E] mt-3 leading-relaxed">
            Transparent, all-inclusive coverage tailored for cultural festivals, intimate portraits, and live events. Every package includes high-res edited files, color grading, and personal direction.
          </p>
        </div>

        {/* Vintage Postcard Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg, idx) => (
            <div 
              key={pkg.id}
              className={`relative bg-[#FAF6F0] p-6 sm:p-7 rounded-sm polaroid-shadow flex flex-col justify-between border border-[#DFCDB2] transition-transform duration-300 hover:-translate-y-2 ${
                idx === 0 ? '-rotate-1' : idx === 1 ? 'rotate-1 border-[#D4AF37]' : '-rotate-1'
              }`}
            >
              {/* Washi Tape on package top */}
              <WashiTape 
                variant={idx === 1 ? 'gold' : 'default'} 
                angle={idx === 1 ? 'rotate-[-2deg]' : 'rotate-2'} 
                className="-top-3 left-1/2 -translate-x-1/2" 
              />

              <div>
                {/* Header with Luggage Code badge */}
                <div className="flex items-center justify-between border-b border-[#E8DEC9] pb-3 mb-4">
                  <span className="font-mono-editorial text-[10px] text-[#8C3A27] tracking-widest font-bold uppercase">
                    ● {pkg.luggageCode}
                  </span>
                  <span className="inline-block px-2 py-0.5 bg-[#EDE4D5] text-[#1C1917] font-display text-[9px] font-bold tracking-widest uppercase rounded-sm">
                    {pkg.tag}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#1C1917] tracking-tight uppercase">
                  {pkg.title}
                </h3>

                <p className="font-script text-lg text-[#B94A3E] font-bold mt-0.5">
                  {pkg.subtitle}
                </p>

                <div className="my-4 p-2.5 bg-[#F5EFE6] rounded-sm border border-[#E0D3C1] text-left">
                  <span className="font-mono-editorial text-[9px] text-[#786E64] uppercase tracking-wider block">
                    THE VIBE
                  </span>
                  <p className="font-display text-xs font-semibold text-[#1C1917] mt-0.5">
                    {pkg.vibe}
                  </p>
                </div>

                {/* Features checklist */}
                <div className="space-y-2.5 my-6 text-left">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#3E342B]">
                      <span className="w-4 h-4 rounded-full bg-[#E8DEC9] text-[#1C1917] flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#E8DEC9]">
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className="w-full py-3 rounded-sm bg-[#1C1917] hover:bg-[#B94A3E] text-[#FAF6F0] font-display font-bold text-xs tracking-widest uppercase transition-all shadow-md active:scale-98"
                >
                  CHECK DATE AVAILABILITY ⟶
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
