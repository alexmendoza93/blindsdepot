import React from 'react';

type ExperienceStepProps = {
  number: string;
  title: string;
  description: string;
};

function ExperienceStep({ number, title, description }: ExperienceStepProps) {
  return (
    <div className="relative pl-12">
      <span className="absolute left-0 top-0 font-serif text-secondary text-2xl mb-6 block opacity-50">{number}</span>
      <h4 className="font-sans tracking-widest uppercase text-sm text-white mb-2">{title}</h4>
      <p className="font-sans text-on-surface-variant text-sm leading-loose">{description}</p>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section className="bg-surface py-40 px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1">
          <div className="mb-16">
            <h2 className="font-serif text-4xl text-white mb-6">Transforma tu Hogar en 3 Sencillos Pasos</h2>
            <p className="font-sans text-on-surface-variant text-sm leading-relaxed">
              Ayudamos a personas con estilo a decorar con persianas y cortinas de lujo. Ofrecemos soluciones elegantes para mayor privacidad, mantener tu hogar fresco y crear un ambiente exclusivo.
            </p>
          </div>
          
          <div className="space-y-12">
            <ExperienceStep 
              number="01" 
              title="Agenda tu Cita Personalizada" 
              description="¿Listo para transformar tus espacios? Programa una visita a domicilio para elegir modelos y tejidos mientras tomamos medidas. Si prefieres, también podemos ayudarte vía chat o email. ¡Fácil y cómodo!" 
            />
            <ExperienceStep 
              number="02" 
              title="Revisa y Confirma tu Cotización" 
              description="Recibe tu cotización personalizada y revisa las opciones a tu gusto. Elige los productos que más te encanten y confirma el presupuesto. Con tu aprobación, ¡nos ponemos manos a la obra para hacer realidad tu proyecto!" 
            />
            <ExperienceStep 
              number="03" 
              title="Entrega e Instalación" 
              description="Recibe tus productos Blinds Depot directamente en tu hogar, listos para transformar tus espacios. Si te encuentras en una zona VIP, disfruta de nuestro servicio de instalación profesional. ¡Relájate y déjanos hacerlo todo por ti!" 
            />
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="relative aspect-[3/4] overflow-hidden border border-outline-variant/10">
            <img 
              alt="Instalación y diseño de interiores" 
              className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 hover:grayscale-0 hover:scale-105" 
              src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2000&auto=format&fit=crop"
            />
            <div className="absolute top-8 left-8 right-8 bottom-8 border border-white/20 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
