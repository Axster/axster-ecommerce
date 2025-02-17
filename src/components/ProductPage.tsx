"use client";
import ProductGrid from "@/components/product-grid";
import { Sidebar } from "@/components/sidebar";
import { Filters } from "@/components/filters";
import { InfoSection } from "@/components/info-section";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "@/services/api.model";

interface ProductPageProps {
  fetchProducts: () => Promise<Product[]>;
  title: string;
  breadcrumb: string;
}

export default function ProductPage({
  fetchProducts,
  title,
  breadcrumb,
}: ProductPageProps) {
  const searchParams = useSearchParams();
  const searchQuery =
    searchParams.get("search") || "";
  const [products, setProducts] = useState<
    Product[]
  >([]);

  useEffect(() => {
    async function loadProducts() {
      const allProducts = await fetchProducts();
      const filteredProducts = searchQuery
        ? allProducts.filter((product) =>
            product.title
              .toLowerCase()
              .includes(searchQuery)
          )
        : allProducts;
      setProducts(filteredProducts);
    }
    loadProducts();
  }, [fetchProducts, searchQuery]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-2 text-sm mb-4">
        <span className="font-extrabold">
          {breadcrumb}
        </span>
      </div>

      <h1 className="text-4xl font-extrabold mb-6">
        {title}
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        <Sidebar />
        <main className="flex-1">
          <Filters products={products} />
          <ProductGrid products={products} />
        </main>
      </div>

      <InfoSection />
    </div>
  );
}
