"use client";

import { useRef } from "react";
import type { ShopifyProduct } from "@/lib/types";
import ProductCard from "./ProductCard";

export default function ProductCarousel({ products }: { products: ShopifyProduct[] }) {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-8">
      {/* Section header */}
      <div className="max-w-[1440px] mx-auto px-6 flex items-end justify-between mb-6">
        <div>
          <h2 className="text-xl font-sans font-semibold text-off-black leading-tight">
            Snowboards
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            See our latest snowboards, in stock and ready to ship UK wide
          </p>
        </div>
        <a
          href="/products"
          className="text-xs text-off-black underline underline-offset-2 supports-hover:hover:text-gray-500 transition-colors whitespace-nowrap"
        >
          View more
        </a>
      </div>

      {/* Carousel track */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map(product => (
          <div
            key={product.id}
            className="snap-start shrink-0 w-[calc(25%-0.75rem)] laptop:w-[calc(25%-0.75rem)] tablet:w-[calc(50%-0.5rem)] mobile:w-[calc(100%-1.5rem)]"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
