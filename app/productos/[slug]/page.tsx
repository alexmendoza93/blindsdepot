import { products } from "../../data/products";
import { notFound } from "next/navigation";
import ProductHero from "../../components/product/ProductHero";
import ProductDetails from "../../components/product/ProductDetails";
import ProductGallery from "../../components/product/ProductGallery";
import ProductFeatures from "../../components/product/ProductFeatures";
import ProductTech from "../../components/product/ProductTech";
import ProductRelated from "../../components/product/ProductRelated";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="bg-surface relative">
        <ProductHero 
          title={product.name} 
          adjectives={product.heroAdjectives} 
          image={product.heroImage} 
        />
        
        <ProductDetails 
          description={product.description}
          advantages={product.advantages}
          advice={product.advice}
          image={product.aboutImage}
        />
        
        {product.features && product.features.length > 0 && (
          <ProductFeatures features={product.features} />
        )}
        
        {product.techSpecs && product.techSpecs.length > 0 && (
          <ProductTech techSpecs={product.techSpecs} />
        )}

        {product.gallery && product.gallery.length > 0 && (
          <ProductGallery images={product.gallery} />
        )}
        
        <ProductRelated currentSlug={product.slug} category={product.category} />
      </main>
      <Footer />
    </>
  );
}

