import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Camera, Calendar } from 'lucide-react';
import { InstagramIcon } from './DoodleIcons';
import WashiTape from './WashiTape';
import { playShutterSound } from '../../data/portfolioData';

export default function LightboxModal({
  photo,
  allPhotos = [],
  onClose,
  onSelectPhoto
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && allPhotos.length > 0) handleNext();
      if (e.key === 'ArrowLeft' && allPhotos.length > 0) handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, allPhotos]);

  if (!photo) return null;

  const currentIndex = allPhotos.findIndex((p) => p.id === photo.id);

  const handleNext = () => {
    if (currentIndex < allPhotos.length - 1) {
      playShutterSound();
      onSelectPhoto(allPhotos[currentIndex + 1]);
    } else {
      playShutterSound();
      onSelectPhoto(allPhotos[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      playShutterSound();
      onSelectPhoto(allPhotos[currentIndex - 1]);
    } else {
      playShutterSound();
      onSelectPhoto(allPhotos[allPhotos.length - 1]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Lightbox Card */}
      <div 
        className="relative z-10 max-w-4xl w-full max-h-[92vh] overflow-y-auto bg-[#FAF6F0] rounded-sm p-4 sm:p-7 polaroid-shadow flex flex-col md:flex-row gap-6 items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Washi Tape */}
        <WashiTape variant="gold" angle="-rotate-2" className="-top-3 left-1/2 -translate-x-1/2" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 p-2 text-[#57534E] hover:text-[#1C1917] hover:bg-[#EFE5D7] rounded-full transition-colors z-20"
          aria-label="Close photo view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Photo Area with Navigation */}
        <div className="relative w-full md:w-3/5 shrink-0 bg-[#121214] rounded-sm overflow-hidden flex items-center justify-center min-h-[320px] max-h-[65vh]">
          <img 
            src={photo.image} 
            alt={photo.title || 'Sayanth Photography'} 
            className="w-full h-full object-contain max-h-[62vh]"
          />

          {/* Nav arrows */}
          {allPhotos.length > 1 && (
            <>
              <button 
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-[#FAF6F0]/85 hover:bg-[#FAF6F0] text-[#1C1917] rounded-full shadow-md transition-transform active:scale-95"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#FAF6F0]/85 hover:bg-[#FAF6F0] text-[#1C1917] rounded-full shadow-md transition-transform active:scale-95"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Story & Metadata details */}
        <div className="w-full md:w-2/5 flex flex-col justify-between self-stretch text-left">
          <div>
            {photo.categoryLabel && (
              <span className="inline-block px-2.5 py-0.5 bg-[#EDE4D5] text-[#8C3A27] font-mono-editorial text-[10px] tracking-widest uppercase font-semibold rounded-sm">
                {photo.categoryLabel}
              </span>
            )}

            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1C1917] tracking-tight mt-2 uppercase">
              {photo.title}
            </h3>

            {photo.caption && (
              <p className="font-script text-xl text-[#B94A3E] font-bold mt-1 leading-snug">
                "{photo.caption}"
              </p>
            )}

            <p className="text-[#57534E] text-xs sm:text-sm mt-3 leading-relaxed border-t border-[#E8DEC9] pt-3">
              {photo.description || 'Every frame tells an authentic story, preserving the real soul and fleeting beauty of this Kerala moment.'}
            </p>
          </div>

          {/* Specs & Tags */}
          <div className="mt-5 space-y-2 border-t border-[#E8DEC9] pt-3 text-xs font-mono-editorial text-[#786E64]">
            {photo.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B94A3E] shrink-0" />
                <span>{photo.location}</span>
              </div>
            )}
            {photo.device && (
              <div className="flex items-center gap-2">
                <Camera className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>{photo.device}</span>
              </div>
            )}
            {photo.date && (
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#7B8267] shrink-0" />
                <span>{photo.date}</span>
              </div>
            )}
          </div>

          {/* Social connection CTA */}
          <div className="mt-5 pt-3 border-t border-dashed border-[#DFCDB2] flex items-center justify-between">
            <a 
              href="https://instagram.com/sayanth_photography/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-display font-bold tracking-wider text-[#1C1917] hover:text-[#B94A3E] transition-colors"
            >
              <InstagramIcon className="w-4 h-4 text-[#B94A3E]" />
              <span>@sayanth_photography</span>
            </a>
            <span className="font-script text-sm text-[#8C7A68]">
              Frame #{String(currentIndex + 1).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
