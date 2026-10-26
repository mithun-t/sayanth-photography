import React from 'react';
import WashiTape from '../ui/WashiTape';
import { REVIEWS } from '../../data/portfolioData';
import { Star, Heart } from 'lucide-react';
import { DoodleHeart, DoodleArrow } from '../ui/DoodleIcons';

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="relative py-14 sm:py-20 bg-paper-texture overflow-hidden border-t border-[#E5DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference typography */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <DoodleHeart className="w-6 h-6 text-[#B94A3E]" />
            <span className="font-mono-editorial text-[10px] text-[#786E64] tracking-[0.25em] uppercase font-bold">
              KIND WORDS & LOVE LETTERS
            </span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#1C1917] tracking-tight uppercase leading-tight">
            SAYANTH WAS INCREDIBLE<br />
            <span className="text-[#B94A3E]">TO WORK WITH!!</span>
          </h2>

          <p className="font-script text-xl sm:text-2xl text-[#3E342B] font-bold mt-2">
            Real love notes from real humans & artists
          </p>
        </div>

        {/* Testimonials Scrapbook Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {REVIEWS.map((rev) => (
            <div 
              key={rev.id}
              className={`relative bg-[#FAF6F0] p-4 sm:p-5 pb-6 rounded-sm polaroid-shadow transition-transform duration-300 hover:rotate-0 hover:-translate-y-1.5 ${rev.rotation}`}
            >
              {/* Washi tape at top */}
              <WashiTape 
                variant={rev.id === 'rev-2' ? 'amber' : 'gold'} 
                angle={rev.rotation === 'rotate-2' ? '-rotate-3' : 'rotate-2'} 
                className="-top-3 left-1/2 -translate-x-1/2" 
              />

              {/* Client Photo Thumbnail */}
              <div className="aspect-[4/3] overflow-hidden rounded-[2px] bg-[#1E1B18] mb-4">
                <img 
                  src={rev.image} 
                  alt={rev.client} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-2 text-[#D4AF37]">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                ))}
              </div>

              {/* Handwritten Note Accent */}
              {rev.note && (
                <div className="mb-2">
                  <span className="inline-block px-2 py-0.5 bg-[#EDE4D5] text-[#8C3A27] font-script text-sm font-bold rounded-[2px] -rotate-1">
                    ★ {rev.note}
                  </span>
                </div>
              )}

              {/* Quote */}
              <p className="font-sans text-xs sm:text-sm text-[#3E342B] leading-relaxed italic">
                "{rev.quote}"
              </p>

              {/* Client & Event Info */}
              <div className="mt-4 pt-3 border-t border-[#E8DEC9] text-left">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#1C1917]">
                  {rev.client}
                </h4>
                <p className="font-mono-editorial text-[9px] text-[#786E64] uppercase tracking-wider mt-0.5">
                  {rev.event}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
