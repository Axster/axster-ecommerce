"use client"

import { useEffect, useState } from "react";
import { getProducts } from "@/services/api";

export function PopularLinks() {
  const [brands, setBrands] = useState<string[]>([]);

  useEffect(() => {
    getProducts({ select: "brand" })
      .then((payload) => {
        const uniqueBrands = Array.from(
          new Set(payload.products.map((p) => p.brand).filter(Boolean))
        );
        setBrands(uniqueBrands);
      })
      .catch((error) => console.error("Errore nel caricamento dei brand:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 pb-12">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          I nostri top brand: abbigliamento, scarpe e accessori
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-2">
          {brands.map((brand, index) => (
            <a key={index} href="#" className="hover:underline">
              {brand}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
