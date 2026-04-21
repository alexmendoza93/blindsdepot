interface TechSpec {
  title: string;
  description: string;
}

export default function ProductTech({ techSpecs }: { techSpecs: TechSpec[] }) {
  if (!techSpecs || techSpecs.length === 0) return null;

  return (
    <section className="bg-surface-container py-32 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="font-sans text-secondary tracking-[0.3em] uppercase text-[10px] mb-4 block">
            Especificaciones
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-white">
            Tecnología y Calidad
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {techSpecs.map((spec, index) => (
            <div key={index} className="border-l border-secondary pl-8">
              <h3 className="font-serif text-2xl text-white mb-3">{spec.title}</h3>
              <p className="font-sans text-gray-400 font-light leading-relaxed">
                {spec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
