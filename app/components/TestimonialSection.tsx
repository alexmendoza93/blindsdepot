export default function TestimonialSection() {
  return (
    <section className="bg-surface-container-lowest py-32 px-12">
      <div className="max-w-3xl mx-auto text-center">
        <span className="material-symbols-outlined text-secondary text-5xl mb-12" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
        <p className="font-serif text-3xl md:text-4xl text-white italic leading-relaxed mb-16">
          "The way the light now filters through our living room is nothing short of transformative. A true masterpiece of functional design."
        </p>
        <div className="font-sans tracking-widest uppercase text-xs text-secondary mb-20">Eleanor Vance, Architectural Digest</div>
        <button className="font-sans text-white border-b border-secondary pb-1 tracking-[0.2em] uppercase text-[10px] hover:text-secondary transition-colors">
          Leave a Review
        </button>
      </div>
    </section>
  );
}
