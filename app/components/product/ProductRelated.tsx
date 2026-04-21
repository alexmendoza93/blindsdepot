import { products } from "../../data/products";
import ProductCard from "../ui/ProductCard";

export default function ProductRelated({ currentSlug, category }: { currentSlug: string, category: string }) {
  // Get other products from the same category or related ones
  const relatedProducts = products
    .filter((p) => p.category === category && p.slug !== currentSlug)
    .slice(0, 4); // Take up to 4

  // If there aren't enough in the same category, grab a few random ones
  if (relatedProducts.length < 3) {
    const extra = products
      .filter((p) => p.slug !== currentSlug && !relatedProducts.find(r => r.slug === p.slug))
      .slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...extra);
  }

  if (relatedProducts.length === 0) return null;

  return (
    <section className="bg-surface-container-low py-32 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16">
          <span className="font-sans text-secondary tracking-[0.3em] uppercase text-[10px] mb-4 block">
            Descubre Más
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-serif text-4xl lg:text-5xl text-white">
              Productos Relacionados
            </h2>
            <a href="/#collections" className="font-sans text-xs tracking-widest text-white hover:text-secondary uppercase transition-colors border-b border-white/20 hover:border-secondary pb-1">
              Ver Catálogo Completo
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {relatedProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
