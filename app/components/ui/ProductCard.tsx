"use client";

import Image from "next/image";
import Link from "next/link";
import { type Product } from "../../data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/productos/${product.slug}`} className="block">
      <div className="relative group overflow-hidden rounded-md aspect-square sm:aspect-[4/5] cursor-pointer">
        {/* Background Image */}
        <img
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          src={product.image}
        />

        {/* Base Overlay Gradient (for text readability when not hovered) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-700 opacity-60 group-hover:opacity-0" />

        {/* Hover Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
          <h3 className="font-serif text-2xl md:text-[28px] leading-tight text-white transition-all duration-700 transform group-hover:-translate-y-2 drop-shadow-lg w-full">
            {product.name}
          </h3>

          {/* Expandable Hover Details */}
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] w-full">
            <div className="overflow-hidden">
              <div className="flex flex-col items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 opacity-0 group-hover:opacity-100 pt-4">
                <p className="font-sans text-sm text-gray-200 mb-6 font-light leading-relaxed max-w-[90%]">
                  {product.description}
                </p>
                <div className="font-sans text-xs tracking-widest uppercase border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 rounded-sm cursor-pointer inline-block">
                  MÁS INFO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
