"use client";

import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "https://images.pexels.com/photos/10114997/pexels-photo-10114997.jpeg",
  "https://images.pexels.com/photos/34277709/pexels-photo-34277709.jpeg",
  "https://images.pexels.com/photos/15860802/pexels-photo-15860802.jpeg",
  "https://images.pexels.com/photos/34538282/pexels-photo-34538282.jpeg",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2560&auto=format&fit=crop",
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
            className={`absolute inset-0 w-full h-full object-cover brightness-75 transition-opacity duration-1000 ease-in-out ${
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
