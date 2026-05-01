export default function ProductHero({
  title,
  adjectives,
  image,
}: {
  title: string;
  adjectives: string[];
  image: string;
}) {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* We use an image with an arbitrary zoom animation for a premium feel */}
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 mt-20">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 drop-shadow-2xl">
          {title}
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {adjectives.map((adj, i) => (
            <span
              key={i}
              className="px-6 py-2 border border-white/30 rounded-full text-white tracking-widest text-[10px] md:text-xs uppercase backdrop-blur-md bg-black/20 shadow-lg"
            >
              {adj}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
        <span className="text-white text-[10px] tracking-widest uppercase mb-2 opacity-60">
          Descubrir
        </span>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 text-white opacity-60"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
}
