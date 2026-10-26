import React from 'react';

export default function WashiTape({ 
  className = '', 
  variant = 'default', 
  angle = 'rotate-[-3deg]',
  width = 'w-24 md:w-32',
  height = 'h-5 md:h-6'
}) {
  const colorMap = {
    default: 'bg-[#DFCCA5]/85 border-[#C4B28B]/60 text-[#736345]',
    amber: 'bg-[#E5C28F]/85 border-[#CBA46C]/60 text-[#6B4B18]',
    gold: 'bg-[#E3D19E]/85 border-[#C5B074]/60 text-[#5F4E1D]',
    kraft: 'bg-[#D6C2A1]/85 border-[#B59F7C]/60 text-[#544327]',
    blue: 'bg-[#BFD4DB]/80 border-[#9BB9C4]/60 text-[#305361]'
  };

  return (
    <div 
      className={`absolute z-20 pointer-events-none backdrop-blur-[1px] shadow-[0_1px_3px_rgba(0,0,0,0.12)] border-l-[3px] border-r-[3px] border-dashed transition-transform duration-300 ${width} ${height} ${angle} ${colorMap[variant] || colorMap.default} ${className}`}
      style={{
        clipPath: 'polygon(0% 0%, 100% 0%, 98% 100%, 2% 100%)'
      }}
    >
      <div className="w-full h-full opacity-15 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:4px_4px]" />
    </div>
  );
}
