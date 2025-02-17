"use client";
import { Sidebar } from "@/components/sidebar";
import { Filters } from "@/components/filters";
import { InfoSection } from "@/components/info-section";
import {
  useParams,
  useSearchParams,
} from "next/navigation";
import {
  useCallback,
  useEffect,
  useState,
} from "react";
import { Product } from "@/services/api.model";
import { GenderParams } from "@/app/[gender]/gender.types";

interface ProductPageProps {
  fetchProducts: () => Promise<Product[]>;
  title: string;
  breadcrumb: string[];
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
  const { gender } = useParams<GenderParams>();

  const renderBreadcrumb = useCallback(
    (breadcrumb: string[]) => {
      if (breadcrumb.length < 2) return null;
      return (
        <div className="flex gap-2 text-sm mb-4">
          {breadcrumb.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-2"
            >
              {index > 0 && (
                <span className="text-gray-400">
                  {">"}
                </span>
              )}
              {index === 0 ? (
                <a
                  href={`/${gender}`}
                  className="font-extrabold"
                >
                  {item}
                </a>
              ) : (
                <span className="text-gray-400 font-extrabold">
                  {item}
                </span>
              )}
            </div>
          ))}
        </div>
      );
    },
    [gender]
  );

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
      {renderBreadcrumb(breadcrumb)}
      <h1 className="text-4xl font-extrabold mb-6">
        {title}
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        <Sidebar />
        <main className="flex-1">
          <Filters products={products} />
          {/* <ProductGrid products={products} />  NOW IS IN FILERS*/}
        </main>
      </div>

      <InfoSection />
    </div>
  );
}
