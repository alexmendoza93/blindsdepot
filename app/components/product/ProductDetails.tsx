"use client";

interface Props {
  description: string;
  advantages: string[];
  advice: string;
  image: string;
}

export default function ProductDetails({ description, advantages, advice, image }: Props) {
  return (
    <section className="bg-surface-container-low py-32 px-6 lg:px-12 relative z-10 -mt-1">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Image Column - Sticky */}
        <div className="relative w-full rounded-sm overflow-hidden order-2 lg:order-1 lg:sticky lg:top-32 shadow-2xl">
          <div className="aspect-[4/5] w-full">
            <img 
              src={image} 
              alt="Detalle del producto" 
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

        {/* Info Column */}
        <div className="order-1 lg:order-2 flex flex-col justify-center lg:py-10">
          <span className="font-sans text-secondary tracking-[0.3em] uppercase text-[10px] mb-4 block">
            Sobre el Producto
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-white mb-8 leading-tight">
            Diseño y Funcionalidad
          </h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="font-sans font-light tracking-wide text-gray-300 leading-relaxed mb-12 text-lg lg:text-xl">
              {description}
            </p>

            {advantages.length > 0 && (
              <div className="mb-12">
                <h3 className="font-serif text-2xl text-white mb-8 border-b border-white/10 pb-4">Ventajas Principales</h3>
                <ul className="space-y-6">
                  {advantages.map((adv, i) => (
                    <li key={i} className="flex items-start group">
                      <div className="bg-surface-container border border-white/10 p-2 rounded-sm mr-4 mt-1 transition-colors group-hover:bg-white/5 group-hover:border-white/30">
                        <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="font-sans text-gray-300 text-base lg:text-lg leading-relaxed">{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {advice && (
              <div className="bg-surface-container p-8 lg:p-10 rounded-sm border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <div className="flex items-center mb-6 relative z-10">
                  <h3 className="font-serif text-xl text-white text-secondary tracking-widest uppercase text-xs">Consejo del Experto</h3>
                </div>
                <p className="font-serif text-gray-200 text-xl lg:text-2xl italic leading-relaxed relative z-10">
                  "{advice}"
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
