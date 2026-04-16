export default function CollectionsSection() {
  return (
    <section className="bg-surface-container-low py-40 px-12">
      <div className="mb-20 text-center">
        <span className="font-sans text-secondary tracking-[0.3em] uppercase text-[10px] mb-4 block">Selección</span>
        <h2 className="font-serif text-5xl text-white">Colecciones Curadas</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[1000px] md:h-[800px]">
        {/* Roller Blinds */}
        <div className="md:col-span-8 relative group overflow-hidden">
          <img 
            alt="Roller Blinds" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfyVzVb-kU_GpbvpnR8saANJQ4vuZIr02JgXFZlwUPYkz3NB6eXi7pgLJcMB2Y397ZrM0c-QEwnSBInH05U7-BP0S7u8szkTeT543yWjtn0Nq3t0bVKxPiGfQOXC5Q8IYGmOtyEcBxMw27u7TpxiZ3Pgdj-kcFAetJW_AgCzDmsc3Lb6N-Gmb-j9lxhwCQp441vVgAvb5x0s3DvSY_NTmWFTsGcTMLAXKbFLh89AzeACNe6yKKU2tS8MicK5wija4kcT5YhJlHWUfu"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-700 flex flex-col justify-end p-12">
            <h3 className="font-serif text-4xl text-white mb-2">Persianas Enrollables</h3>
            <p className="font-sans text-on-surface-variant text-xs tracking-widest uppercase">Minimalismo Puro</p>
          </div>
        </div>
        
        {/* Venetian */}
        <div className="md:col-span-4 relative group overflow-hidden">
          <img 
            alt="Venetian Blinds" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvNbwdjQHntKFCSvAgjY4vTCFl1ZLaoT0DBUj-eiQ5xFOCbyJHnflIbzVQNHsAsO5IuitztIn15PtB6dngJtV9xgmV4rKTYdy8-S1wFrB2vnGYWMBjHKIJIwve5n8xb4WDBhmd1ewz32eiUqjKob8rZeiKCSyNmq1txLE4Xd21qixNbKEsi668c2Q2sHtNlvy3aF4mfzvlY1BxuRGK9UEqpurrzlPf0DI7-KkfYiOOPFj02DXTcaEgs_3zSr13WgpjreuOggNY5cNA"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-700 flex flex-col justify-end p-12">
            <h3 className="font-serif text-4xl text-white mb-2">Persianas Venecianas</h3>
            <p className="font-sans text-on-surface-variant text-xs tracking-widest uppercase">Precisión Estructural</p>
          </div>
        </div>

        {/* Plantation Shutters */}
        <div className="md:col-span-12 relative group overflow-hidden">
          <img 
            alt="Plantation Shutters" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsvb7sXB6b6hi2raT5Uy4daSpjMOQLd0P20SzQIVFOmrh1PIOeDV-Mf1eoSLf5ZQa9ey9PEWp3ybgfIT0xODc_XWTCAAJLL4Yy_w6pjzD3gIzUGS4ok3XdAAGPg47GXeDQe3BrbUaYGClv9KD8tPLjHdLvT5Q2VpXu2zrt9DsisMpfRMtLp7pjf5PHpUe1ZhGtNDfALSdMdE_y-7LS6WydGQ7XB9A-dStv07dh0zux1tGAcKerBgGuLiDHglsSOHRAHdEZZa9KVTbR"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-700 flex flex-col justify-end p-12">
            <h3 className="font-serif text-4xl text-white mb-2">Contraventanas</h3>
            <p className="font-sans text-on-surface-variant text-xs tracking-widest uppercase">Elegancia Clásica</p>
          </div>
        </div>
      </div>
    </section>
  );
}
