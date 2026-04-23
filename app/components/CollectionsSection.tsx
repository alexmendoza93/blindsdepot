import { categories, products } from "../data/products";
import ProductCard from "./ui/ProductCard";

export default function CollectionsSection() {
  return (
    <section
      id="collections"
      className="bg-surface-container-low py-24 px-6 xl:px-12"
    >
      <div className="mb-24 text-center">
        <h2 className="font-serif text-5xl text-white">Nuestras Soluciones</h2>
      </div>

      <div className="max-w-[1600px] mx-auto flex flex-col gap-32">
        {categories.map((category, catIndex) => {
          // Filter products for this category
          const categoryProducts = products.filter(
            (p) => p.category === category.category,
          );

          return (
            <div key={catIndex} className="flex flex-col">
              <div className="mb-14 text-center">
                <h3 className="font-serif text-4xl text-white mb-2">
                  {category.title}
                </h3>
                <p className="font-sans text-on-surface-variant text-sm tracking-widest uppercase">
                  {category.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryProducts.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
