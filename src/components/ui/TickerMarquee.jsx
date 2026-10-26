import React from 'react';

export default function TickerMarquee({
  text = 'EVERY FRAME TELLS A STORY',
  items,
  variant = 'paper', // 'paper' or 'dark'
  reverse = false,
  className = ''
}) {
  const defaultItems = [
    'FOR THE AUTHENTIC & UNAPOLOGETIC',
    'EVERY FRAME TELLS A STORY',
    'KERALA TEMPLE FESTIVALS & UTSAVAMS',
    'TRADITIONAL PORTRAITS IN KASAVU',
    'LIVE STAGE & CONCERT ENERGIES',
    'UNSCRIPTED RAW EMOTIONS'
  ];

  const phraseList = items || defaultItems;
  const repeatCount = 4; // Ensure seamless infinite loop

  const styleVariants = {
    paper: 'bg-[#EDE4D5] text-[#1C1917] border-y border-[#D8CABE]',
    dark: 'bg-[#151412] text-[#E8D4A8] border-y border-amber-900/40',
    cream: 'bg-[#FAF6F0] text-[#1C1917] border-y-2 border-dashed border-[#DFCDB2]'
  };

  return (
    <div className={`overflow-hidden py-2.5 sm:py-3.5 select-none ${styleVariants[variant] || styleVariants.paper} ${className}`}>
      <div className={reverse ? 'animate-marquee-reverse' : 'animate-marquee'}>
        {[...Array(repeatCount)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center shrink-0">
            {phraseList.map((phrase, idx) => (
              <span key={idx} className="flex items-center mx-4 sm:mx-6 font-display font-bold text-xs sm:text-sm tracking-[0.22em] uppercase">
                <span>{phrase}</span>
                <span className="ml-4 sm:ml-6 text-[#B94A3E] font-script text-lg sm:text-xl font-normal">
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
