interface Feature {
  title: string;
  description: string;
  icon: string;
}

export default function ProductFeatures({ features }: { features: Feature[] }) {
  if (!features || features.length === 0) return null;

  return (
    <section className="bg-surface-container-low py-32 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto text-center mb-16">
        <span className="font-sans text-secondary tracking-[0.3em] uppercase text-[10px] mb-4 block">
          Beneficios Clave
        </span>
        <h2 className="font-serif text-4xl lg:text-5xl text-white">
          Por qué elegir este diseño
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-8 bg-surface-container rounded-sm border border-white/5 hover:border-white/20 transition-colors">
            <div className="w-16 h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center mb-8 text-secondary">
              {/* Mapping some common icons. Fallback to a star */}
              {feature.icon === "waves" ? (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              ) : feature.icon === "ruler" ? (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              ) : feature.icon === "zap" ? (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              )}
            </div>
            <h3 className="font-serif text-2xl text-white mb-4">{feature.title}</h3>
            <p className="font-sans text-gray-400 font-light leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
