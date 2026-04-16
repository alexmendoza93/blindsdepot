import React from 'react';

type ExperienceStepProps = {
  number: string;
  title: string;
  description: string;
};

function ExperienceStep({ number, title, description }: ExperienceStepProps) {
  return (
    <div>
      <span className="font-serif text-secondary text-5xl mb-6 block">{number}</span>
      <h4 className="font-sans tracking-widest uppercase text-sm text-white mb-4">{title}</h4>
      <p className="font-sans text-on-surface-variant text-sm leading-loose">{description}</p>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section className="bg-surface py-40 px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1 space-y-16">
          <ExperienceStep 
            number="01" 
            title="Initial Consultation" 
            description="We begin with an in-depth dialogue about your space, lighting needs, and architectural aesthetic." 
          />
          <ExperienceStep 
            number="02" 
            title="Material Selection" 
            description="Choose from our exclusive library of textiles, sustainable woods, and precision-engineered metals." 
          />
          <ExperienceStep 
            number="03" 
            title="Master Installation" 
            description="Our specialist team ensures a perfect, integrated fit with your home's unique structural elements." 
          />
        </div>
        <div className="flex-1">
          <div className="relative aspect-[3/4] overflow-hidden border border-outline-variant/10">
            <img 
              alt="Experience" 
              className="w-full h-full object-cover grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4r25hiSSgzyuhgeSohuqmVXuJqNp3LJ9o5H5wCuL1BTOEcrM6yzAv5K4uyrGwB8qaQy1zYD6r7EKdKpLaDScXD4Fl4jDYSOQryxgduyEEhdTIMSisDh4fUMInL9RCRodiulerVO567Iy94LqZ0U4qwJrFeAJRf_zWm3LCxWOR33-ZnH-DK7FpE2_TFqyhtPWWo_oy1rrKkFNcvsSkk12xyB0YMwLgyyX2SdXDrpP6Nly9YgMRlDbip17ph68UC4NS-OgzpciBuiW_"
            />
            <div className="absolute top-12 left-12 right-12 bottom-12 border border-white/10 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
