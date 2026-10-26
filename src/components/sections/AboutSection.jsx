import React from 'react';
import WashiTape from '../ui/WashiTape';
import FilmStrip from '../ui/FilmStrip';
import { DoodleArrow, DoodleHeart, DoodleLamp, DoodleMusic, InstagramIcon } from '../ui/DoodleIcons';
import { ABOUT_FILM_STRIP, playShutterSound } from '../../data/portfolioData';
import { Sparkles, Smartphone, HeartHandshake } from 'lucide-react';

export default function AboutSection({ onOpenPhoto, onInquireClick }) {
  return (
    <section id="about" className="relative py-12 sm:py-20 bg-paper-texture overflow-hidden">
      
      {/* Top Wide Panoramic Photo with Torn Paper Borders (Reference top of about section) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="relative rounded-sm overflow-hidden shadow-xl bg-[#1C1917] max-h-[380px] sm:max-h-[460px]">
          {/* Top Washi Tape */}
          <WashiTape variant="gold" angle="-rotate-1" className="-top-3 left-1/4 w-32 z-20" />
          <WashiTape variant="amber" angle="rotate-2" className="-top-3 right-1/4 w-32 z-20" />

          {/* Panoramic Image */}
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85" 
            alt="Misty landscape of Kerala Western Ghats" 
            className="w-full h-full object-cover grayscale contrast-125 min-h-[260px] sm:min-h-[360px]"
          />

          {/* Torn Paper Overlays & Vintage Scraps */}
          <div className="absolute inset-x-0 bottom-0 h-10 bg-[#F5EFE6] torn-edge-top" />
          <div className="absolute inset-x-0 top-0 h-8 bg-[#F5EFE6] torn-edge-bottom" />

          {/* Center Quote on Panoramic Photo */}
          <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/35 backdrop-blur-[0.5px]">
            <div className="bg-[#FAF6F0]/90 backdrop-blur-md px-6 py-4 sm:px-10 sm:py-6 rounded-sm shadow-2xl border border-[#D5C2A3] text-center max-w-xl rotate-[-1deg]">
              <span className="font-mono-editorial text-[9px] sm:text-[10px] text-[#B94A3E] tracking-[0.28em] uppercase font-bold block mb-1">
                CINEMATIC PERSPECTIVE • BASED IN KERALA
              </span>
              <p className="font-display font-extrabold text-base sm:text-2xl text-[#1C1917] tracking-tight uppercase leading-snug">
                "We don't take photos with just a lens. We take them with our heart, our music, and the stories we share."
              </p>
              <span className="font-script text-lg sm:text-xl text-[#3E342B] font-bold block mt-1">
                — Sayanth
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Meet Sayanth Section Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: 3-Shot Vertical Film Strip (Reference Left) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-6">
            <div className="rotate-[-2deg] hover:rotate-0 transition-transform">
              <FilmStrip 
                frames={ABOUT_FILM_STRIP} 
                filmName="SAYANTH FILM 400" 
                orientation="vertical"
                onSelectFrame={(frame) => {
                  onOpenPhoto({
                    id: frame.frame,
                    title: frame.title,
                    image: frame.image,
                    caption: frame.caption,
                    location: 'Kerala, India',
                    device: 'Sayanth Photography Kit'
                  });
                }}
              />
            </div>

            {/* Handwritten note below film strip */}
            <div className="text-center lg:text-left pl-2">
              <span className="font-script text-xl text-[#3E342B] font-bold block">
                behind the lens & in the wild ⟶
              </span>
              <span className="font-mono-editorial text-[10px] text-[#786E64] uppercase tracking-wider">
                Raw • Unscripted • Real Moments
              </span>
            </div>
          </div>

          {/* Center Column: Bio Manifesto & Story (Reference Center) */}
          <div className="lg:col-span-5 text-left space-y-4">
            
            {/* Handwritten script annotation with doodle arrow */}
            <div className="flex items-center gap-2">
              <DoodleLamp className="w-10 h-10 text-[#B94A3E]" />
              <div>
                <span className="font-script text-2xl sm:text-3xl text-[#1C1917] font-bold block -mb-1">
                  It's your guy, Sayanth!
                </span>
                <span className="font-mono-editorial text-[10px] text-[#786E64] uppercase tracking-widest">
                  VISUAL STORYTELLER & CREATIVE
                </span>
              </div>
            </div>

            {/* Big Bold Headline: HEY THERE NEW BESTIE!! */}
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] tracking-tight uppercase leading-none">
              HEY THERE<br />
              <span className="text-[#B94A3E]">NEW BESTIE!!</span>
            </h2>

            {/* Bio Body Paragraphs (faithful adaptation of reference voice) */}
            <div className="space-y-3.5 text-[#3E342B] text-xs sm:text-sm leading-relaxed font-normal">
              <p>
                It's me, Sayanth! A visual storyteller based in the lush greenery and timeless heritage of <strong>Kerala, India</strong>, and ready to travel anywhere your love or event takes us. I'm best described as a passionate creator who lives for authentic stories: from the thunderous rhythm of temple festival <em>chenda melams</em> and sacred evening lamps, to high-energy live concerts under vivid stage lights, and effortless candid portraits in traditional Kasavu.
              </p>
              
              <p>
                Candid love is what I'm all about. Capturing your badass authentic emotions, even the quiet, joyful, unposed moments between poses that mean everything. I want you to look back at your photos and recognize not just how you looked, but the laughter, the goosebumps, the music, and all those feelings.
              </p>

              <p>
                Whether it's capturing breathtaking high-speed live stage action on the <strong>iQOO Neo 9 Pro</strong>, natural cinematic portrait depth with the <strong>Vivo V40 Zeiss optics</strong>, or classic framing, my philosophy is simple: <em>Every Frame Tells A Story</em>. If you're a fan of soulful memories, good music, and real connection, we might just be the perfect match.
              </p>
            </div>

            {/* Gear & Philosophy Badges */}
            <div className="grid grid-cols-2 gap-3 pt-3">
              <div className="bg-[#FAF6F0] p-3 rounded-sm border border-[#E0D3C1] shadow-sm">
                <div className="flex items-center gap-1.5 text-[#B94A3E] font-display font-bold text-xs uppercase mb-1">
                  <Smartphone className="w-4 h-4" />
                  <span>The Creative Edge</span>
                </div>
                <p className="text-[11px] text-[#57534E]">
                  iQOO Neo 9 Pro • Vivo V40 Zeiss • Mobile Filmmaking Mastery
                </p>
              </div>

              <div className="bg-[#FAF6F0] p-3 rounded-sm border border-[#E0D3C1] shadow-sm">
                <div className="flex items-center gap-1.5 text-[#D4AF37] font-display font-bold text-xs uppercase mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>The Vibe</span>
                </div>
                <p className="text-[11px] text-[#57534E]">
                  Zero stiff posing • 100% genuine laughter & raw emotions
                </p>
              </div>
            </div>

            {/* Question & Call to action */}
            <div className="pt-4 border-t border-dashed border-[#DFCDB2]">
              <p className="font-display font-bold text-xs sm:text-sm tracking-[0.18em] uppercase text-[#1C1917] mb-2">
                ARE YOU READY TO MAKE MEMORIES TOGETHER?
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={onInquireClick}
                  className="px-5 py-2.5 rounded-sm bg-[#B94A3E] hover:bg-[#9B372B] text-[#FAF6F0] font-display font-bold text-xs tracking-widest uppercase transition-all shadow-md active:scale-95"
                >
                  LET'S BE BESTIES ⟶
                </button>
                <a
                  href="https://instagram.com/sayanth_photography/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#FAF6F0] hover:bg-[#EFE4D3] text-[#1C1917] border border-[#D5C2A3] font-display font-semibold text-xs tracking-wider transition-colors shadow-sm"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#B94A3E]" />
                  <span>@sayanth_photography</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Sayanth Portrait Polaroid & Negative Detail (Reference Right) */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end space-y-6">
            
            {/* Medium Portrait Polaroid */}
            <div 
              className="relative bg-[#FAF6F0] p-3 pb-6 rounded-sm polaroid-shadow rotate-[2deg] hover:rotate-0 transition-transform cursor-pointer max-w-[260px]"
              onClick={() => {
                playShutterSound();
                onOpenPhoto({
                  id: 'sayanth-portrait',
                  title: 'Meet Sayanth',
                  image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85',
                  caption: 'Sayanth • Your visual storyteller',
                  location: 'Kerala, India',
                  device: 'Sayanth Photography'
                });
              }}
            >
              <WashiTape variant="gold" angle="-rotate-2" className="-top-3 left-1/2 -translate-x-1/2" />
              <div className="aspect-[4/5] overflow-hidden bg-neutral-900 rounded-[2px]">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85" 
                  alt="Sayanth Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="font-script text-lg text-[#1C1917] font-bold block">
                  "Let's create something timeless."
                </span>
                <span className="font-mono-editorial text-[8px] text-[#786E64] uppercase tracking-widest">
                  Sayanth Photography
                </span>
              </div>
            </div>

            {/* Negative Film Frame 400 FG (Reference Bottom Right Frame) */}
            <div 
              className="relative bg-[#151412] p-2 rounded-sm text-neutral-400 rotate-[-3deg] shadow-lg max-w-[240px] cursor-pointer"
              onClick={() => {
                playShutterSound();
                onOpenPhoto({
                  id: 'concert-detail-frame',
                  title: 'Concert Stage Adrenaline',
                  image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=85',
                  caption: 'Electric strings & stage smoke',
                  location: 'Live Concert Stage',
                  device: 'iQOO Neo 9 Pro'
                });
              }}
            >
              <WashiTape variant="kraft" angle="rotate-4" className="-top-2 left-4 w-20" />
              <div className="text-[7px] font-mono-editorial tracking-widest text-amber-500/80 mb-1 flex justify-between">
                <span>● MUZA FILM 400 FG</span>
                <span>▲ 14</span>
              </div>
              <div className="aspect-[4/3] overflow-hidden bg-neutral-900 border border-neutral-700 rounded-[1px]">
                <img 
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80" 
                  alt="Concert stage detail" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[7px] font-mono-editorial tracking-widest text-amber-500/60 mt-1 text-center">
                SAFETY FILM • SAYANTH
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
