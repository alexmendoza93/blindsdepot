export default function Hero() {
  return (
    <section className="relative h-[1024px] flex items-center px-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Interior with blinds" 
          className="w-full h-full object-cover brightness-50" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAma9Piz55DHFHnOTztvungmXKMbhVS76mV9TjC34Cn7-JOssUKilCz_w51_V5fiHWtTwOjlW4PQtklZUqI1fzJ0QM0J5roguXr7Xkv1IHEa8RDGvcR12QP80wezWFQonRpejun1hgapjf90rSm-tSjGcbnBQ9dIjsonWn6N6OD5czx0G3bVH2VMhDorpCzaBrllQ7yEbf7anncNsjfZ6xwOglD1uR_Z3juALnwNshBIIywU-axnpD8kvVbBFkJPdxI-Lu2nqyrO0pm"
        />
      </div>
      <div className="relative z-10 max-w-4xl opacity-0 animate-[fade-in_800ms_forwards]">
        <h1 className="font-serif text-7xl md:text-9xl leading-[1.1] text-white mb-8 tracking-tighter">
          The Architecture <br /> of Light
        </h1>
        <p className="font-sans text-secondary tracking-[0.2em] uppercase text-sm md:text-base">
          Bespoke window treatments for the modern home.
        </p>
        <div className="mt-12">
          <button className="border border-outline/30 px-12 py-5 text-xs tracking-widest uppercase hover:border-secondary transition-all duration-700">
            Explore the Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
