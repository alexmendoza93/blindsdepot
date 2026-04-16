export default function AboutSection() {
  return (
    <section className="bg-surface py-32 px-12 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
      <div className="order-2 md:order-1">
        <h2 className="font-serif text-5xl md:text-6xl text-white mb-10 leading-tight">
          Calidad Refinada, <br /> Diseño Atemporal.
        </h2>
        <p className="font-sans text-on-surface-variant text-lg leading-relaxed mb-12 max-w-md">
          En Blinds Depot, vemos el cubrimiento de ventanas como la capa arquitectónica final. Cada pieza es meticulosamente elaborada para modular la atmósfera, proporcionando un control preciso sobre la privacidad y la suave difusión de la luz.
        </p>
        <a className="inline-block font-sans text-secondary tracking-widest uppercase text-xs border-b border-secondary/30 pb-2 hover:border-secondary transition-all" href="#">
          Nuestra Artesanía
        </a>
      </div>
      <div className="order-1 md:order-2 h-[600px]">
        <img 
          alt="Craftsmanship detail" 
          className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAowdldFP16QqK6yAF71c-HPj8iIRhcHl3I6vX2G6RD9h4zI0Ao0HI3x-BHn9bUqJbca-w4fFLYlGxxq3q6Le9pZimG1cjFuTT7GDJQceiFhTohhXbXMGCusj085JXTuqjZ3MIYwqVA6Zx3ThjJC51Ep56qnYjQKoouFwvZDH_X6fE-_zff4RxM9cTTq4KDGNGizrPZYqockJA3WGV5Tl5eU1rFPWD4IBJQcNDwgzHvDLZWQUVXFZ-yi6epPz1bwgzsj8ZJ3Bxd8y2K"
        />
      </div>
    </section>
  );
}
