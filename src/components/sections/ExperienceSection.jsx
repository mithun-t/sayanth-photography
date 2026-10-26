import React from 'react';
import { DoodleCamera, DoodleHeart, DoodleArrow, LuggageTag } from '../ui/DoodleIcons';
import { MessageSquareHeart, CalendarCheck, Film, Image as ImageIcon } from 'lucide-react';

export default function ExperienceSection() {
  const steps = [
    {
      num: '01',
      title: 'CONNECT & DREAM',
      desc: 'Send an inquiry postcard with your date and vibe. We jump on a quick chai or call to chat about your vision.',
      icon: MessageSquareHeart,
      tapeColor: 'amber'
    },
    {
      num: '02',
      title: 'LOCK IT IN',
      desc: 'We secure your date with a simple agreement. No stress, clear communication, and excitement starts building!',
      icon: CalendarCheck,
      tapeColor: 'gold'
    },
    {
      num: '03',
      title: 'THE BIG DAY & HYPE',
      desc: 'I arrive with full energy, certified hype-man presence, and zero awkward poses. You just live and soak it all in.',
      icon: Film,
      tapeColor: 'kraft'
    },
    {
      num: '04',
      title: 'THE HEIRLOOM GALLERY',
      desc: 'Sneak peeks in 48 hours, followed by your full high-res color-graded digital gallery ready to relive forever.',
      icon: ImageIcon,
      tapeColor: 'blue'
    }
  ];

  return (
    <section className="relative py-14 sm:py-20 bg-[#EFE8DC] overflow-hidden border-t border-[#D8CABE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <span className="font-mono-editorial text-[10px] text-[#786E64] tracking-[0.25em] uppercase font-bold block mb-1">
            HOW WE MAKE MAGIC TOGETHER
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#1C1917] tracking-tight uppercase leading-tight">
            THE EXPERIENCE &<br />
            <span className="font-script text-3xl sm:text-5xl text-[#B94A3E] font-normal normal-case">
              Creative Journey
            </span>
          </h2>
        </div>

        {/* 4 Steps Scrapbook Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div 
                key={st.num}
                className="relative bg-[#FAF6F0] p-6 rounded-sm polaroid-shadow border border-[#DFCCA5] flex flex-col justify-between text-left"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between border-b border-[#E8DEC9] pb-3 mb-3">
                  <span className="font-display font-extrabold text-3xl text-[#1C1917]/25 leading-none">
                    {st.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#EFE5D7] flex items-center justify-center text-[#B94A3E]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-sm tracking-wider uppercase text-[#1C1917]">
                  {st.title}
                </h3>

                <p className="text-[#57534E] text-xs leading-relaxed mt-2 font-normal">
                  {st.desc}
                </p>

                <div className="mt-4 pt-2 border-t border-dashed border-[#DFCDB2] font-script text-base text-[#B94A3E] font-bold">
                  Step {st.num} of 04
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
