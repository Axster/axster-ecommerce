"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Product } from "@/services/api.model";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PriceFilter } from "./price-filter";
import ProductGrid from "./product-grid";
import { useRouter, useSearchParams } from "next/navigation";

interface FiltersProps {
  products: Product[];
}

export function Filters({ products }: FiltersProps) {
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
    min: 4,
    max: 9500,
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const sortByParam = searchParams.get("sortBy") as keyof Product | null;
  const order = searchParams.get("order") as "asc" | "desc" | null;

  const getSortedProducts = () => {
    const filteredProducts = products.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );

    if (!sortByParam || !order) return filteredProducts;

    return filteredProducts.sort((a, b) => {
      const valueA = a[sortByParam];
      const valueB = b[sortByParam];

      if (typeof valueA === "string" && typeof valueB === "string") {
        return order === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      } else if (typeof valueA === "number" && typeof valueB === "number") {
        return order === "asc" ? valueA - valueB : valueB - valueA;
      }
      return 0;
    });
  };

  const handleSortChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (value === "price-asc") {
      newParams.set("sortBy", "sku");
      newParams.set("order", "asc");
    } else if (value === "price-desc") {
      newParams.set("sortBy", "sku");
      newParams.set("order", "desc");
    } else {
      newParams.delete("sortBy");
      newParams.delete("order");
    }
    router.push(`?${newParams.toString()}`);
  };

  const handlePriceFilter = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  const sortedProducts = getSortedProducts();

  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-wrap gap-2">
        <div className="relative">
          <Select value={sortByParam ?? ""} onValueChange={handleSortChange}>
            <SelectTrigger className="w-[200px] border rounded-none">
              <SelectValue placeholder="Ordina" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Preferiti</SelectItem>
              <SelectItem value="latest">Ultimi arrivi</SelectItem>
              <SelectItem value="price-asc">Prezzo crescente</SelectItem>
              <SelectItem value="price-desc">Prezzo decrescente</SelectItem>
              <SelectItem value="offers">Offerte</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <button className="px-4 py-2 border flex items-center gap-2 hover:border-gray-400">
              Prezzo
              <ChevronDown className="w-4 h-4" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <PriceFilter onClose={() => { }} onApply={handlePriceFilter} />
          </PopoverContent>
        </Popover>

        {["Brand", "Taglia", "Colore", "Novità", "Materiale"].map((filter) => (
          <button
            key={filter}
            className="px-4 py-2 border flex items-center gap-2 hover:border-gray-400"
          >
            {filter}
            <ChevronDown className="w-4 h-4" />
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {["Lunghezza", "Fantasia", "Linea", "Tipo prodotto", "Consegna"].map(
          (filter) => (
            <button
              key={filter}
              className="px-4 py-2 border flex items-center gap-2 hover:border-gray-400"
            >
              {filter}
              <ChevronDown className="w-4 h-4" />
            </button>
          ),
        )}
      </div>
      <ProductGrid products={sortedProducts} />
    </div>
  );
}
