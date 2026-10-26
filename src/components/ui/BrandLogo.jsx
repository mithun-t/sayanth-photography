import React from 'react';

export default function BrandLogo({ size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28'
  };

  return (
    <div className={`relative flex items-center justify-center rounded-full bg-[#121214] border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.45)] select-none shrink-0 ${sizeClasses[size] || sizeClasses.md} ${className}`}>
      {/* Subtle outer glow ring */}
      <div className="absolute inset-0 rounded-full border border-[#F5D77F]/60 animate-pulse pointer-events-none" />

      {/* Center content */}
      <div className="text-center flex flex-col items-center justify-center px-1">
        <span className="font-script text-[#E6C665] font-bold tracking-wide leading-none text-sm md:text-base -mb-0.5">
          Sayanth
        </span>
        <div className="flex items-center gap-0.5 my-0.5">
          <div className="w-2.5 h-[1px] bg-[#D4AF37]/70" />
          {/* Mini Camera icon */}
          <svg className="w-2.5 h-2.5 text-[#E6C665]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
            <circle cx="12" cy="13" r="3"/>
          </svg>
          <div className="w-2.5 h-[1px] bg-[#D4AF37]/70" />
        </div>
        <span className="font-mono-editorial text-[6px] md:text-[7px] text-[#A39985] tracking-[0.22em] uppercase leading-none">
          PHOTOGRAPHY
        </span>
      </div>
    </div>
  );
}
