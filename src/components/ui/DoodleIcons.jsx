import React from 'react';

// Retro Roller Skates Doodle (from the reference image)
export function DoodleSkates({ className = 'w-16 h-16 text-[#1C1917]' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Boot 1 */}
      <path d="M25 55 L25 32 C25 28 28 25 32 25 L45 25 C48 25 50 28 52 35 L56 46 L70 48 C74 48 76 52 75 56 L72 65 L25 65 Z" />
      {/* Laces */}
      <path d="M38 33 L45 37" />
      <path d="M36 40 L44 44" />
      <path d="M34 47 L43 51" />
      {/* Sole & Plate */}
      <path d="M22 65 L76 65 L74 70 L20 70 Z" />
      {/* Wheels */}
      <circle cx="28" cy="78" r="7" />
      <circle cx="28" cy="78" r="2.5" fill="currentColor" />
      <circle cx="66" cy="78" r="7" />
      <circle cx="66" cy="78" r="2.5" fill="currentColor" />
      {/* Toe stopper */}
      <path d="M72 70 L78 76 L74 78" />
    </svg>
  );
}

// Vintage Camera with Botanicals Doodle (from reference)
export function DoodleCamera({ className = 'w-20 h-20 text-[#1C1917]' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Camera Body */}
      <rect x="20" y="32" width="60" height="42" rx="4" />
      {/* Pentaprism / Viewfinder Top */}
      <path d="M38 32 L44 23 L56 23 L62 32 Z" />
      <circle cx="50" cy="27" r="1.5" fill="currentColor" />
      {/* Shutter button & dial */}
      <rect x="25" y="27" width="8" height="5" rx="1" />
      <rect x="68" y="28" width="6" height="4" rx="1" />
      {/* Lens with concentric rings */}
      <circle cx="50" cy="53" r="15" />
      <circle cx="50" cy="53" r="11" />
      <circle cx="50" cy="53" r="6" fill="currentColor" />
      {/* Botanical leaves sprouting from camera */}
      <path d="M72 32 Q82 22 88 20 Q84 28 77 34" fill="currentColor" fillOpacity="0.15" />
      <path d="M80 24 Q87 15 93 14 Q90 22 83 27" fill="currentColor" fillOpacity="0.15" />
      <path d="M18 36 Q10 28 8 20 Q15 24 21 33" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

// Black Cat Silhouette with Botanicals (from reference)
export function DoodleCat({ className = 'w-20 h-20 text-[#1C1917]' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Cat head silhouette */}
      <path 
        d="M32 60 C30 52 32 40 38 34 L34 20 L48 26 C53 25 59 25 64 26 L78 20 L74 34 C80 40 82 52 80 60 C78 72 68 80 56 80 C44 80 34 72 32 60 Z" 
        fill="currentColor"
      />
      {/* Cat Eyes */}
      <ellipse cx="46" cy="46" rx="4" ry="2.5" fill="#FAF6F0" />
      <ellipse cx="66" cy="46" rx="4" ry="2.5" fill="#FAF6F0" />
      <circle cx="46" cy="46" r="1.5" fill="currentColor" />
      <circle cx="66" cy="46" r="1.5" fill="currentColor" />
      {/* Whiskers */}
      <path d="M30 50 L16 48" stroke="#1C1917" strokeWidth="1.8" />
      <path d="M30 54 L14 56" stroke="#1C1917" strokeWidth="1.8" />
      <path d="M82 50 L96 48" stroke="#1C1917" strokeWidth="1.8" />
      <path d="M82 54 L98 56" stroke="#1C1917" strokeWidth="1.8" />
      {/* Floral wreath surrounding right ear */}
      <path d="M72 18 Q80 10 88 12 Q84 20 76 22" fill="#D4AF37" stroke="#D4AF37" />
      <path d="M78 26 Q86 24 90 28 Q84 32 79 30" fill="#D4AF37" stroke="#D4AF37" />
    </svg>
  );
}

// Traditional Kerala Brass Oil Lamp (Nilavilakku / Diya)
export function DoodleLamp({ className = 'w-16 h-16 text-[#B94A3E]' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Flame */}
      <path d="M50 12 C46 22 42 27 50 35 C58 27 54 22 50 12 Z" fill="#D4AF37" stroke="#D4AF37" />
      {/* Lamp Bowl (Thattu) */}
      <path d="M30 38 Q50 48 70 38 L66 43 Q50 52 34 43 Z" fill="currentColor" fillOpacity="0.2" />
      {/* Column Stem */}
      <path d="M48 43 L48 75 L52 75 L52 43 Z" />
      <circle cx="50" cy="56" r="3.5" fill="currentColor" />
      <circle cx="50" cy="66" r="4.5" />
      {/* Base */}
      <path d="M32 82 Q50 76 68 82 L72 87 Q50 82 28 87 Z" fill="currentColor" fillOpacity="0.3" />
      {/* Rays of warmth */}
      <path d="M36 22 L30 18" stroke="#D4AF37" strokeWidth="1.5" />
      <path d="M64 22 L70 18" stroke="#D4AF37" strokeWidth="1.5" />
    </svg>
  );
}

// Stage Microphone & Musical Notes (for Live Concerts)
export function DoodleMusic({ className = 'w-16 h-16 text-[#1C1917]' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Mic head */}
      <rect x="42" y="16" width="16" height="24" rx="8" />
      <line x1="42" y1="24" x2="58" y2="24" />
      <line x1="42" y1="32" x2="58" y2="32" />
      <line x1="50" y1="16" x2="50" y2="40" />
      {/* Mic holder */}
      <path d="M36 28 C36 44 64 44 64 28" />
      <line x1="50" y1="44" x2="50" y2="60" />
      <path d="M38 60 L62 60" />
      {/* Music Note 1 */}
      <circle cx="24" cy="40" r="4" fill="currentColor" />
      <line x1="28" y1="40" x2="28" y2="24" />
      <path d="M28 24 Q35 22 36 28" />
      {/* Music Note 2 */}
      <circle cx="76" cy="32" r="3.5" fill="currentColor" />
      <line x1="79.5" y1="32" x2="79.5" y2="18" />
      <circle cx="88" cy="28" r="3.5" fill="currentColor" />
      <line x1="91.5" y1="28" x2="91.5" y2="14" />
      <line x1="79.5" y1="18" x2="91.5" y2="14" strokeWidth="2.5" />
    </svg>
  );
}

// Hand-drawn Curved Arrow with handwritten label
export function DoodleArrow({ direction = 'right', className = 'w-12 h-12 text-[#1C1917]' }) {
  return (
    <svg className={className} viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {direction === 'right' ? (
        <>
          <path d="M15 45 Q50 10 82 28" />
          <path d="M72 18 L84 28 L72 38" />
        </>
      ) : (
        <>
          <path d="M85 45 Q50 10 18 28" />
          <path d="M28 18 L16 28 L28 38" />
        </>
      )}
    </svg>
  );
}

// Hand-drawn Cute Hearts
export function DoodleHeart({ className = 'w-8 h-8 text-[#B94A3E]' }) {
  return (
    <svg className={className} viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M25 40 C14 30 6 22 6 14 C6 8 11 4 17 4 C21 4 24 7 25 10 C26 7 29 4 33 4 C39 4 44 8 44 14 C44 22 36 30 25 40 Z" />
    </svg>
  );
}

// Coffee Stain Ring Graphic (from reference)
export function CoffeeRing({ className = 'w-32 h-32 opacity-25 pointer-events-none' }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" stroke="#8A5A2B" strokeLinecap="round">
      <circle cx="60" cy="60" r="48" strokeWidth="3" strokeDasharray="3 7 15 4 8 3" opacity="0.6" />
      <circle cx="61" cy="59" r="46" strokeWidth="1.5" strokeDasharray="20 4 8 12" opacity="0.4" />
      <circle cx="58" cy="62" r="50" strokeWidth="2" strokeDasharray="5 15 2 8" opacity="0.3" />
      {/* Splatter dots */}
      <circle cx="102" cy="42" r="1.5" fill="#8A5A2B" opacity="0.5" />
      <circle cx="22" cy="85" r="2" fill="#8A5A2B" opacity="0.4" />
      <circle cx="88" cy="98" r="1.2" fill="#8A5A2B" opacity="0.6" />
    </svg>
  );
}

// Vintage Luggage Tag Graphic
export function LuggageTag({ text = 'ROMANTIC MOMENTS', className = '' }) {
  return (
    <div className={`relative inline-block bg-[#F8F3EA] border border-[#D5C7B0] text-[#1C1917] px-4 py-2 shadow-sm rounded-sm ${className}`}>
      {/* Tag hole with brass eyelet */}
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#E5D7BE] border border-[#9A825B] flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-[#FAF6F0]" />
      </div>
      <span className="font-script text-base md:text-lg font-bold text-[#2B231A] pl-1 tracking-wide">
        {text}
      </span>
    </div>
  );
}

// Instagram Brand Icon
export function InstagramIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}
