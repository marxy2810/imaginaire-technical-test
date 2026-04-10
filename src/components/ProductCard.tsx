"use client";

import Image from "next/image";
import { useState } from "react";
import type { ShopifyProduct } from "@/lib/types";

function formatPrice(amount: string, currencyCode: string) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 2,
  }).format(parseFloat(amount));
}

export default function ProductCard({ product }: { product: ShopifyProduct }) {
  const [hovered, setHovered] = useState(false);

  const images = product.images.edges.map(e => e.node);
  const primaryImage = images[0] ?? null;
  const hoverImage = images[1] ?? null;

  const price = formatPrice(
    product.priceRange.minVariantPrice.amount,
    product.priceRange.minVariantPrice.currencyCode,
  );

  const compareAt = product.compareAtPriceRange.minVariantPrice.amount;
  const hasCompareAt = parseFloat(compareAt) > 0;

  const variants = product.variants.edges.map(e => e.node);

  const sizeOptions = Array.from(
    new Set(
      variants
        .flatMap(v => v.selectedOptions)
        .filter(o => o.name.toLowerCase() === "size")
        .map(o => o.value),
    ),
  );

  const availableVariants = variants.filter(v => v.availableForSale);

  return (
    <article
      className="group relative flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-gray-100 mb-3" style={{ aspectRatio: "3/4" }}>
        {primaryImage && (
          <Image
            src={primaryImage.url}
            alt={primaryImage.altText ?? product.title}
            fill
            className={`object-cover transition-opacity duration-300 ${
              hovered && hoverImage ? "opacity-0" : "opacity-100"
            }`}
            sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        )}
        {hoverImage && (
          <Image
            src={hoverImage.url}
            alt={hoverImage.altText ?? product.title}
            fill
            className={`object-cover transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        )}

        {/* Hover overlay: sizes + quick add */}
        <div
          className={`absolute inset-x-0 bottom-0 bg-white/95 px-3 py-3 transition-transform duration-300 ${
            hovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {sizeOptions.length > 0 && (
            <div className="mb-2">
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1.5">Sizes</p>
              <div className="flex flex-wrap gap-1">
                {sizeOptions.map(size => {
                  const isAvailable = availableVariants.some(v =>
                    v.selectedOptions.some(
                      o => o.name.toLowerCase() === "size" && o.value === size,
                    ),
                  );
                  return (
                    <span
                      key={size}
                      className={`text-[11px] border px-1.5 py-0.5 ${
                        isAvailable
                          ? "border-off-black text-off-black"
                          : "border-gray-300 text-gray-300 line-through"
                      }`}
                    >
                      {size}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
          <button className="w-full bg-off-black text-white text-xs py-2 supports-hover:hover:bg-[#B9FF2F] supports-hover:hover:text-black rounded-[0.275rem] transition-colors">
            Quick add
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-lg font-sans text-off-black">{product.title}</h3>
        <div className="text-right shrink-0">
          {hasCompareAt && (
            <span className="text-xs text-gray-400 line-through block">
              {formatPrice(compareAt, product.priceRange.minVariantPrice.currencyCode)}
            </span>
          )}
          <span className="text-sm text-off-black">{price}</span>
        </div>
      </div>

      {/* View Product button */}
      <a
        href={`/products/${product.handle}`}
        className="mt-auto w-full bg-off-black text-white text-md font-semibold text-center py-2.5 supports-hover:hover:bg-[#B9FF2F] supports-hover:hover:text-black transition-colors rounded-[0.275rem]"
      >
        View Product
      </a>
    </article>
  );
}
