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

interface FiltersProps {
  products: Product[];
}

export function Filters({ products }: FiltersProps) {
  const [sortBy, setSortBy] = useState("");
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
    min: 4,
    max: 9500,
  });

  const getSortedProducts = () => {
    const filteredProducts = products.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max,
    );

    switch (sortBy) {
      case "latest":
        return filteredProducts.sort(
          (a, b) =>
            new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime(),
        );
      case "price-asc":
        return filteredProducts.sort((a, b) => a.price - b.price);
      case "price-desc":
        return filteredProducts.sort((a, b) => b.price - a.price);
      default:
        return filteredProducts;
    }
  };

  const handlePriceFilter = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  const sortedProducts = getSortedProducts();

  console.log(sortedProducts);

  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-wrap gap-2">
        <div className="relative">
          <Select value={sortBy} onValueChange={setSortBy}>
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
            <PriceFilter onClose={() => {}} onApply={handlePriceFilter} />
          </PopoverContent>
        </Popover>

        {/* Altri filtri non funzionanti */}
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
