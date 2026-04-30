"use client";

import { useRef } from "react";

const StarIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const ChevronLeftIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const testimonials = [
  {
    initials: "M",
    name: "Mireya AlPadilla",
    text: "¡Soy una clienta feliz! Tuve la suerte de encontrar a Blinds Depot y el resultado final es perfecto. La calidad de los materiales y diseños superó nuestras expectativas. ¡Les aseguro que sus ventanas quedarán hermosas!",
  },
  {
    initials: "R",
    name: "Ricardo Sánchez",
    text: "Decorar con persianas mi departamento nuevo nunca fue tan fácil. El equipo es muy atento y la entrega/instalación fue muy rápida. Sin duda los volvería a considerar en el futuro para los demás cuartos.",
  },
  {
    initials: "V",
    name: "Valentina R.",
    text: "La atención al detalle arquitectónico es excepcional. Transformaron completamente la acústica y el ambiente de nuestra sala de estar. Además, el motor de sus persianas inteligentes es imperceptible.",
  },
  {
    initials: "F",
    name: "Fernando Gómez",
    text: "Buscábamos algo extremadamente específico para un ventanal con doble altura y nos ofrecieron la solución a medida perfecta. Los tejidos europeos premium superan por mucho a lo que hay en el mercado normal.",
  },
  {
    initials: "S",
    name: "Sofía Montes",
    text: "Desde la precisa asesoría en casa hasta el montaje impecable, recibimos un nivel de servicio de primera clase. Recomiendo ampliamente sus cortinas sheer, permiten una entrada de luz simplemente celestial.",
  },
];

export default function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-surface-container-lowest py-32 px-6 md:px-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <p className="font-sans text-secondary tracking-[0.2em] uppercase text-xs mb-4">
              Nuestros Clientes
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              Reseñas Destacadas
            </h2>
          </div>

          {/* Custom Navigation */}
          <div className="flex gap-4">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-outline/50 flex items-center justify-center text-white hover:border-secondary hover:text-secondary transition-all cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-outline/50 flex items-center justify-center text-white hover:border-secondary hover:text-secondary transition-all cursor-pointer"
              aria-label="Siguiente"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[400px] p-8 md:p-10 border border-outline/30 bg-surface snap-center flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary font-serif text-xl flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <h5 className="font-serif text-white text-xl">{t.name}</h5>
                    <span className="text-white/40 text-xs font-sans uppercase tracking-[0.1em]">
                      Cliente Confirmado
                    </span>
                  </div>
                </div>

                {/* 5 Stars using Native SVG */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-secondary" />
                  ))}
                </div>

                <p className="font-sans text-white/70 text-lg leading-relaxed mb-6">
                  "{t.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
