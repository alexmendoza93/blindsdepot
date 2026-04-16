export default function FeaturesSection() {
  const features = [
    {
      id: "warranty",
      title: "Hasta 10 Años de Garantía",
      description: "En Blinds Depot, ofrecemos una garantía de hasta 10 años, asegurando la máxima durabilidad y calidad en cada producto. Confíe en nuestra promesa de elegancia duradera.",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: "home",
      title: "Asesoría a Domicilio",
      description: "Agende una cita personalizada. Mediremos sus espacios y le presentaremos opciones exclusivas en tejidos y colores. Descubra el lujo, a su medida.",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: "manufacturing",
      title: "Fabricación Personalizada",
      description: "Confeccionamos persianas y toldos que garantizan un ajuste perfecto. Cada pieza es confeccionada artesanalmente para integrarse a su proyecto arquitectónico.",
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 px-12 bg-background relative border-b border-outline/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10">
          {/* Horizontal connecting line (hidden on mobile) */}
          <div className="hidden md:block absolute top-[44px] left-[16.66%] right-[16.66%] h-[1px] bg-outline/40 -z-10" />

          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center">
              <div className="w-[88px] h-[88px] rounded-full border border-secondary/30 bg-background flex items-center justify-center mb-8 relative">
                {/* Inner shadow or subtle glow to match luxury feel */}
                <div className="absolute inset-2 rounded-full border border-outline/20"></div>
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-white mb-4">
                {feature.title}
              </h3>
              <p className="font-sans text-white/70 text-sm leading-relaxed max-w-sm px-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
