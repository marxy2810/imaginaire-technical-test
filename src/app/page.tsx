import { shopifyFetch } from "@/lib/shopify";
import { PRODUCTS_QUERY } from "@/lib/queries";
import type { ProductsQueryResult, ShopifyProduct } from "@/lib/types";

import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ProductCarousel from "@/components/ProductCarousel";
import ContentSection from "@/components/ContentSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

async function getProducts(): Promise<ShopifyProduct[]> {
  try {
    const data = await shopifyFetch<ProductsQueryResult>({
      query: PRODUCTS_QUERY,
      variables: { first: 8 },
    });
    return data.products.edges.map(e => e.node);
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Navigation />

      <main>
        < Hero />
        < ProductCarousel products={products} /> 
        <ContentSection />
        <NewsletterSection />
      </main>

      <Footer />
    </>
  );
}
