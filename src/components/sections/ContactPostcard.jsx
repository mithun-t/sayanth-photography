import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import WashiTape from '../ui/WashiTape';
import { Send, CheckCircle2, Phone, MapPin, Sparkles } from 'lucide-react';
import { InstagramIcon } from '../ui/DoodleIcons';
import BrandLogo from '../ui/BrandLogo';

export default function ContactPostcard({ selectedPackage }) {
  const [formData, setFormData] = useState({
    names: '',
    email: '',
    phone: '',
    eventDate: '',
    category: selectedPackage ? selectedPackage.title : 'Events & Festival Story',
    location: '',
    vision: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Trigger celebratory confetti burst
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#B94A3E', '#FAF6F0', '#1C1917']
      });
    } catch {
      // safe fallback
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-14 sm:py-24 bg-paper-texture overflow-hidden border-t border-[#E5DACB]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <span className="font-mono-editorial text-[10px] text-[#786E64] tracking-[0.25em] uppercase font-bold block mb-1">
            LET'S BE BESTIES & CREATE MAGIC
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#1C1917] tracking-tight uppercase leading-none">
            SEND A POSTCARD<br />
            <span className="font-script text-4xl sm:text-6xl text-[#B94A3E] font-normal normal-case">
              Love Letter to Sayanth
            </span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#57534E] mt-2">
            Tell me about your temple festival, wedding, concert gig, or portrait session!
          </p>
        </div>

        {/* Vintage Postcard Container */}
        <div className="relative bg-[#FAF6F0] p-6 sm:p-10 rounded-sm polaroid-shadow border-2 border-[#D8C7B0] rotate-[-0.5deg]">
          
          {/* Washi Tape Corner Accents */}
          <WashiTape variant="gold" angle="rotate-[-3deg]" className="-top-3.5 left-10 w-28" />
          <WashiTape variant="amber" angle="rotate-[2deg]" className="-top-3.5 right-10 w-28" />

          {/* Top Postcard Header Strip */}
          <div className="flex items-center justify-between border-b-2 border-dashed border-[#D5C2A3] pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-mono-editorial text-xs sm:text-sm font-bold tracking-[0.25em] text-[#8C3A27] uppercase">
                AIR MAIL • POSTAL SERVICE
              </span>
              <span className="hidden sm:inline-block font-script text-base text-[#1C1917] font-bold">
                (Handle with Love & Film)
              </span>
            </div>
            <span className="font-mono-editorial text-[10px] text-[#786E64] tracking-widest uppercase">
              NO. 400-KL-2026
            </span>
          </div>

          {submitted ? (
            /* Submission Success State */
            <div className="text-center py-12 sm:py-16 space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#EBF3E8] text-[#3D7838] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1C1917] uppercase tracking-tight">
                POSTCARD RECEIVED!
              </h3>
              <p className="font-script text-2xl sm:text-3xl text-[#B94A3E] font-bold">
                "I can't wait to hear all about your story!"
              </p>
              <p className="text-xs sm:text-sm text-[#57534E] max-w-md mx-auto">
                Thank you so much! Sayanth personally reviews every inquiry and will write back to you within 24 hours.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-sm bg-[#FAF6F0] border border-[#D5C2A3] hover:bg-[#EFE5D7] text-[#1C1917] font-display text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  Send Another Note
                </button>
                <a
                  href="https://instagram.com/sayanth_photography/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-sm bg-[#1C1917] hover:bg-[#B94A3E] text-[#FAF6F0] font-display text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#E6C665]" />
                  <span>DM on Instagram</span>
                </a>
              </div>
            </div>
          ) : (
            /* Postcard Form Layout (Two Columns on Desktop) */
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Letter / Message Fields (Col 1-7) */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="font-script text-xl text-[#3E342B] font-bold">
                  Dear Sayanth,
                </div>

                {/* Names */}
                <div>
                  <label className="block font-mono-editorial text-[10px] text-[#786E64] uppercase tracking-wider mb-1">
                    YOUR NAME(S) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.names}
                    onChange={(e) => setFormData({ ...formData, names: e.target.value })}
                    placeholder="e.g. Adithya & Malavika / Rahul / Band Name"
                    className="w-full bg-[#FAF6F0] border-b-2 border-[#D5C2A3] focus:border-[#B94A3E] px-2 py-1.5 text-sm font-sans text-[#1C1917] outline-none transition-colors placeholder:text-[#A89C8C]"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono-editorial text-[10px] text-[#786E64] uppercase tracking-wider mb-1">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@email.com"
                      className="w-full bg-[#FAF6F0] border-b-2 border-[#D5C2A3] focus:border-[#B94A3E] px-2 py-1.5 text-sm font-sans text-[#1C1917] outline-none transition-colors placeholder:text-[#A89C8C]"
                    />
                  </div>
                  <div>
                    <label className="block font-mono-editorial text-[10px] text-[#786E64] uppercase tracking-wider mb-1">
                      WHATSAPP / PHONE
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#FAF6F0] border-b-2 border-[#D5C2A3] focus:border-[#B94A3E] px-2 py-1.5 text-sm font-sans text-[#1C1917] outline-none transition-colors placeholder:text-[#A89C8C]"
                    />
                  </div>
                </div>

                {/* Category & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono-editorial text-[10px] text-[#786E64] uppercase tracking-wider mb-1">
                      STORY / SERVICE CATEGORY
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-[#FAF6F0] border-b-2 border-[#D5C2A3] focus:border-[#B94A3E] px-2 py-1.5 text-sm font-sans text-[#1C1917] outline-none transition-colors"
                    >
                      <option>Events & Festival Story</option>
                      <option>Traditional & Kasavu Portraits</option>
                      <option>Live Concert & Stage Show</option>
                      <option>Wedding & Reception Celebration</option>
                      <option>Couples & Engagement Shoot</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono-editorial text-[10px] text-[#786E64] uppercase tracking-wider mb-1">
                      EVENT OR SHOOT DATE
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full bg-[#FAF6F0] border-b-2 border-[#D5C2A3] focus:border-[#B94A3E] px-2 py-1.5 text-sm font-sans text-[#1C1917] outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block font-mono-editorial text-[10px] text-[#786E64] uppercase tracking-wider mb-1">
                    LOCATION / VENUE
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Thrissur / Kochi / Palakkad / Open to suggestions"
                    className="w-full bg-[#FAF6F0] border-b-2 border-[#D5C2A3] focus:border-[#B94A3E] px-2 py-1.5 text-sm font-sans text-[#1C1917] outline-none transition-colors placeholder:text-[#A89C8C]"
                  />
                </div>

                {/* Message / Vision */}
                <div>
                  <label className="block font-mono-editorial text-[10px] text-[#786E64] uppercase tracking-wider mb-1">
                    THE VISION & DETAILS (TELL ME EVERYTHING!) *
                  </label>
                  <textarea
                    required
                    rows="3"
                    value={formData.vision}
                    onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                    placeholder="Tell me about your vibe, your music, any quirky details, or what makes your story special..."
                    className="w-full bg-[#FAF6F0] border-b-2 border-[#D5C2A3] focus:border-[#B94A3E] px-2 py-1.5 text-sm font-sans text-[#1C1917] outline-none transition-colors resize-none placeholder:text-[#A89C8C]"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#B94A3E] hover:bg-[#9B372B] text-[#FAF6F0] font-display font-bold text-xs tracking-widest uppercase transition-all shadow-md active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND POSTCARD LOVE LETTER</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Postcard Postage & Recipient Stamp (Col 8-12) */}
              <div className="lg:col-span-5 lg:border-l-2 lg:border-dashed lg:border-[#D5C2A3] lg:pl-8 space-y-6 text-left">
                
                {/* Postage Stamp Box */}
                <div className="flex justify-end">
                  <div className="w-28 h-32 border-2 border-dashed border-[#B94A3E] p-1.5 rounded-sm bg-[#F5EFE6] relative flex flex-col items-center justify-center text-center shadow-inner rotate-1">
                    {/* Sayanth Mini Emblem inside stamp */}
                    <BrandLogo size="sm" />
                    <span className="font-mono-editorial text-[8px] text-[#B94A3E] tracking-widest uppercase font-bold mt-1">
                      POSTAGE PAID
                    </span>
                    <span className="font-script text-xs text-[#1C1917] font-bold">
                      Kerala • 2026
                    </span>
                    {/* Wavy Postmark stamp over corner */}
                    <div className="absolute -left-3 bottom-2 text-[#786E64]/60 text-[9px] font-mono-editorial -rotate-12 pointer-events-none">
                      ≈≈ FIRST CLASS ≈≈
                    </div>
                  </div>
                </div>

                {/* Recipient Address Lines (Postcard style) */}
                <div className="space-y-3 pt-2">
                  <span className="font-mono-editorial text-[9px] text-[#786E64] uppercase tracking-wider block">
                    DELIVER TO:
                  </span>
                  
                  <div className="border-b border-[#D5C2A3] pb-1 font-display font-bold text-sm text-[#1C1917] uppercase tracking-wide">
                    SAYANTH PHOTOGRAPHY
                  </div>

                  <div className="border-b border-[#D5C2A3] pb-1 font-mono-editorial text-xs text-[#57534E]">
                    Kerala, South India
                  </div>

                  <div className="border-b border-[#D5C2A3] pb-1 font-mono-editorial text-xs text-[#57534E]">
                    Every Frame Tells A Story
                  </div>

                  <div className="border-b border-[#D5C2A3] pb-1 flex items-center justify-between text-xs text-[#1C1917] font-semibold">
                    <span>Instagram:</span>
                    <a 
                      href="https://instagram.com/sayanth_photography/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#B94A3E] hover:underline"
                    >
                      @sayanth_photography
                    </a>
                  </div>
                </div>

                {/* Polaroid Film Note on the right */}
                <div className="bg-[#EFE8DC] p-3 rounded-sm border border-[#D5C2A3] text-left">
                  <span className="font-script text-base text-[#1C1917] font-bold block">
                    "Available for travel worldwide."
                  </span>
                  <p className="font-mono-editorial text-[10px] text-[#786E64] mt-0.5">
                    Whether an intimate wedding in Kerala or a festival across borders, let's make it unforgettable.
                  </p>
                </div>

              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
