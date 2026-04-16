"use client";

import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAma9Piz55DHFHnOTztvungmXKMbhVS76mV9TjC34Cn7-JOssUKilCz_w51_V5fiHWtTwOjlW4PQtklZUqI1fzJ0QM0J5roguXr7Xkv1IHEa8RDGvcR12QP80wezWFQonRpejun1hgapjf90rSm-tSjGcbnBQ9dIjsonWn6N6OD5czx0G3bVH2VMhDorpCzaBrllQ7yEbf7anncNsjfZ6xwOglD1uR_Z3juALnwNshBIIywU-axnpD8kvVbBFkJPdxI-Lu2nqyrO0pm",
  "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=2560&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2560&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2560&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2560&auto=format&fit=crop"
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-12 overflow-hidden">
      {/* Background Images Slider */}
      <div className="absolute inset-0 z-0 bg-black">
        {HERO_IMAGES.map((src, idx) => (
          <img 
            key={idx}
            alt={`Interior design ${idx + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover brightness-50 transition-opacity duration-1000 ease-in-out ${
              idx === activeIndex ? "opacity-100" : "opacity-0"
            }`} 
            src={src}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl opacity-0 animate-[fade-in_800ms_forwards]">
        <h1 className="font-serif text-7xl md:text-9xl leading-[1.1] text-white mb-8 tracking-tighter">
          La Arquitectura <br /> de la Luz
        </h1>
        <p className="font-sans text-secondary tracking-[0.2em] uppercase text-sm md:text-base">
          Cubrimientos de ventanas a medida para el hogar moderno.
        </p>
        <div className="mt-12">
          <button className="border border-outline/30 px-12 py-5 text-xs tracking-widest uppercase hover:border-secondary transition-all duration-700 cursor-pointer">
            Explorar Galería
          </button>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-12 left-12 z-10 flex space-x-3">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-12 h-[2px] transition-all duration-500 cursor-pointer hover:bg-secondary ${
              idx === activeIndex ? "bg-secondary" : "bg-white/30"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
