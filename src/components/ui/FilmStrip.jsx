import React from 'react';
import WashiTape from './WashiTape';
import { playShutterSound } from '../../data/portfolioData';

export default function FilmStrip({
  frames = [],
  orientation = 'vertical', // 'vertical' or 'horizontal'
  filmName = 'SAYANTH FILM 400',
  className = '',
  onSelectFrame
}) {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div className={`relative bg-[#151412] p-2.5 rounded-sm shadow-xl border border-neutral-800 text-neutral-400 select-none ${className}`}>
      {/* Top/Left Tape */}
      <WashiTape 
        variant="amber" 
        angle="rotate-2" 
        className={isHorizontal ? '-top-3 left-6' : '-top-3 left-1/2 -translate-x-1/2'} 
      />

      {/* Film Strip Header Markings */}
      <div className="flex items-center justify-between px-2 py-1 border-b border-neutral-800/80 mb-2 font-mono-editorial text-[9px] tracking-widest text-amber-500/80 uppercase">
        <span>● {filmName}</span>
        <span>ISO 400 • 35MM</span>
        <span>EXP 36</span>
      </div>

      {/* Frames container */}
      <div className={`flex ${isHorizontal ? 'flex-row overflow-x-auto gap-3 pb-2 scrollbar-none' : 'flex-col gap-3'}`}>
        {frames.map((item, index) => {
          const frameNum = item.frame || String(index + 1).padStart(2, '0');
          return (
            <div 
              key={index} 
              className="group relative cursor-pointer"
              onClick={() => {
                playShutterSound();
                if (onSelectFrame) onSelectFrame(item);
              }}
            >
              {/* Sprocket Holes top/left */}
              <div className="flex justify-between items-center px-1 py-0.5 text-[8px] font-mono-editorial text-amber-500/70">
                <span className="flex items-center gap-1">
                  <span className="inline-block w-2.5 h-1.5 bg-[#FAF6F0] rounded-[1px] opacity-75" />
                  <span className="inline-block w-2.5 h-1.5 bg-[#FAF6F0] rounded-[1px] opacity-75" />
                </span>
                <span>▲ {frameNum}</span>
                <span className="flex items-center gap-1">
                  <span className="inline-block w-2.5 h-1.5 bg-[#FAF6F0] rounded-[1px] opacity-75" />
                  <span className="inline-block w-2.5 h-1.5 bg-[#FAF6F0] rounded-[1px] opacity-75" />
                </span>
              </div>

              {/* Photo Frame */}
              <div className="relative overflow-hidden bg-neutral-900 border border-neutral-700/60 rounded-[1px] aspect-[4/3] w-48 sm:w-56">
                <img 
                  src={item.image} 
                  alt={item.title || `Frame ${frameNum}`} 
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-amber-500/10 mix-blend-color pointer-events-none" />
                <div className="absolute bottom-1 right-1.5 px-1 bg-black/75 rounded text-[8px] font-mono-editorial text-amber-400">
                  #{frameNum}
                </div>
              </div>

              {/* Sprocket Holes bottom */}
              <div className="flex justify-between items-center px-1 py-0.5 text-[7px] font-mono-editorial text-amber-500/50">
                <span className="flex items-center gap-1">
                  <span className="inline-block w-2.5 h-1.5 bg-[#FAF6F0] rounded-[1px] opacity-75" />
                  <span className="inline-block w-2.5 h-1.5 bg-[#FAF6F0] rounded-[1px] opacity-75" />
                </span>
                <span>SAFETY FILM</span>
                <span className="flex items-center gap-1">
                  <span className="inline-block w-2.5 h-1.5 bg-[#FAF6F0] rounded-[1px] opacity-75" />
                  <span className="inline-block w-2.5 h-1.5 bg-[#FAF6F0] rounded-[1px] opacity-75" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
