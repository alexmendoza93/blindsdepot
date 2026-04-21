"use client";

import { useState } from "react";

export default function ProductGallery({ images }: { images: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    // document.body.style.overflow = 'hidden'; // Optional: disable scrolling
  };

  const closeLightbox = () => {
    setIsOpen(false);
    // document.body.style.overflow = 'auto'; // Optional: enable scrolling
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-[#0a0c0b] py-32 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-20 text-center">
          <span className="font-sans text-secondary tracking-[0.3em] uppercase text-[10px] mb-4 block">
            Inspiración visual
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-white">
            Galería del Producto
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {images.map((src, index) => (
            <div 
              key={index}
              className="relative aspect-[4/3] sm:aspect-square cursor-pointer group overflow-hidden rounded-sm"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={src} 
                alt={`Galería ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-50 group-hover:scale-100 ease-[cubic-bezier(0.4,0,0.2,1)]" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col justify-center items-center backdrop-blur-xl transition-all duration-300">
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/50 hover:text-white transition-colors z-[110] p-2 bg-black/50 rounded-full"
          >
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Main Image Container */}
          <div className="relative w-full h-full max-w-7xl max-h-[85vh] flex items-center justify-center p-4 select-none">
            <img 
              src={images[currentIndex]} 
              alt="Vista ampliada" 
              className="max-w-full max-h-full object-contain shadow-2xl transition-opacity animate-in fade-in zoom-in-95 duration-500"
              key={currentIndex} // forces re-render for simple animation
            />
          </div>

          {/* Navigation Controls */}
          {images.length > 1 && (
            <>
              {/* Prev Button */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-2 lg:left-10 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all bg-black/20"
              >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              
              {/* Next Button */}
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-2 lg:right-10 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all bg-black/20"
              >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
              
              {/* Counter underneath */}
              <div className="absolute bottom-8 text-white/50 font-sans tracking-[0.3em] text-[10px] uppercase bg-black/50 px-4 py-2 rounded-full">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
}
