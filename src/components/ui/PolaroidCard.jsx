import React from 'react';
import WashiTape from './WashiTape';
import { playShutterSound } from '../../data/portfolioData';
import { ZoomIn } from 'lucide-react';

export default function PolaroidCard({
  image,
  title,
  caption,
  date,
  location,
  device,
  rotation = 'rotate-0',
  tape = true,
  tapeVariant = 'default',
  tapeAngle = '-rotate-3',
  onClick,
  className = '',
  aspectRatio = 'aspect-[4/5]'
}) {
  const handleClick = (e) => {
    playShutterSound();
    if (onClick) onClick(e);
  };

  return (
    <div 
      className={`group relative bg-[#FAF6F0] p-3 pb-5 sm:p-3.5 sm:pb-6 rounded-sm polaroid-shadow polaroid-shadow-hover cursor-pointer transition-all duration-300 ${rotation} ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(e); }}
    >
      {/* Optional Washi Tape */}
      {tape && (
        <WashiTape 
          variant={tapeVariant} 
          angle={tapeAngle} 
          className="-top-3 left-1/2 -translate-x-1/2" 
        />
      )}

      {/* Image Container with Film Grain */}
      <div className={`relative overflow-hidden rounded-[2px] bg-[#1E1B18] ${aspectRatio}`}>
        <img 
          src={image} 
          alt={title || caption || 'Sayanth Photography'} 
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Film grain wash */}
        <div className="absolute inset-0 bg-amber-950/5 mix-blend-multiply pointer-events-none" />

        {/* Hover Zoom Indicator */}
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <div className="w-10 h-10 rounded-full bg-[#FAF6F0]/90 text-[#1C1917] flex items-center justify-center shadow-md scale-75 group-hover:scale-100 transition-transform">
            <ZoomIn className="w-5 h-5" />
          </div>
        </div>

        {/* Device badge if available */}
        {device && (
          <div className="absolute bottom-2 left-2 px-1.5 py-0.5 bg-black/60 backdrop-blur-sm rounded text-[9px] font-mono-editorial text-amber-200/90 tracking-wide">
            {device.split('•')[0]}
          </div>
        )}
      </div>

      {/* Handwritten Caption Area */}
      <div className="mt-3 px-1 text-center">
        {title && (
          <h4 className="font-display font-semibold text-xs tracking-wider uppercase text-[#1C1917] line-clamp-1">
            {title}
          </h4>
        )}
        {caption && (
          <p className="font-script text-base sm:text-lg text-[#3E342B] font-bold leading-tight mt-0.5">
            {caption}
          </p>
        )}
        <div className="flex items-center justify-center gap-2 mt-1 font-mono-editorial text-[9px] text-[#786E64] uppercase tracking-wider">
          {location && <span>{location}</span>}
          {location && date && <span>•</span>}
          {date && <span>{date}</span>}
        </div>
      </div>
    </div>
  );
}
