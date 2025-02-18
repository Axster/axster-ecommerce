"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Product } from "@/services/api.model";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PriceFilter } from "./price-filter";
import ProductGrid from "./product-grid";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";

interface FiltersProps {
  products: Product[];
}
type SortableFields =
  | keyof Omit<Product, "meta">
  | "createdAt";

export function Filters({
  products,
}: FiltersProps) {
  const [priceRange, setPriceRange] = useState<{
    min: number;
    max: number;
  }>({
    min: 4,
    max: 9500,
  });
  const [tempSort, setTempSort] =
    useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const sortByParam = searchParams.get(
    "sortBy"
  ) as SortableFields | null;
  const order = searchParams.get("order") as
    | "asc"
    | "desc"
    | null;

  const handleSortChange = (value: string) => {
    setTempSort(value);
  };

  const handleSortSave = () => {
    const newParams = new URLSearchParams(
      searchParams.toString()
    );

    if (tempSort === "") {
      newParams.delete("sortBy");
      newParams.delete("order");
    } else {
      const [sortBy, order] = tempSort.split("-");
      newParams.set("sortBy", sortBy);
      newParams.set("order", order);
    }

    router.push(`?${newParams.toString()}`);
    setIsOpen(false);
  };

  const handleSortCancel = () => {
    setTempSort(
      sortByParam && order
        ? `${sortByParam}-${order}`
        : ""
    );
    setIsOpen(false);
  };

  const getSortedProducts = () => {
    const filteredProducts = products.filter(
      (product) =>
        product.price >= priceRange.min &&
        product.price <= priceRange.max
    );

    if (!sortByParam || !order)
      return filteredProducts;

    return filteredProducts.sort((a, b) => {
      if (sortByParam === "createdAt") {
        const dateA = new Date(
          a.meta.createdAt
        ).getTime();
        const dateB = new Date(
          b.meta.createdAt
        ).getTime();
        return order === "asc"
          ? dateA - dateB
          : dateB - dateA;
      }

      if (sortByParam === "discountPercentage") {
        return order === "asc"
          ? (a.discountPercentage || 0) -
              (b.discountPercentage || 0)
          : (b.discountPercentage || 0) -
              (a.discountPercentage || 0);
      }

      const valueA =
        a[
          sortByParam as keyof Omit<
            Product,
            "meta"
          >
        ];
      const valueB =
        b[
          sortByParam as keyof Omit<
            Product,
            "meta"
          >
        ];

      if (
        typeof valueA === "string" &&
        typeof valueB === "string"
      ) {
        return order === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else if (
        typeof valueA === "number" &&
        typeof valueB === "number"
      ) {
        return order === "asc"
          ? valueA - valueB
          : valueB - valueA;
      }

      return 0;
    });
  };

  const handlePriceFilter = (
    min: number,
    max: number
  ) => {
    setPriceRange({ min, max });
  };

  const sortedProducts = getSortedProducts();

  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-wrap gap-2">
        <Select
          open={isOpen}
          onOpenChange={(open) => {
            if (!open) return;
            setIsOpen(open);
          }}
          value={tempSort}
          onValueChange={handleSortChange}
        >
          <SelectTrigger className="w-[140px] h-10">
            <span>Ordina</span>
          </SelectTrigger>
          <SelectContent
            onSave={handleSortSave}
            onCancel={handleSortCancel}
          >
            <SelectItem value="rating-desc">
              Preferiti
            </SelectItem>
            <SelectItem value="createdAt-desc">
              Ultimi arrivi
            </SelectItem>
            <SelectItem value="price-asc">
              Prezzo crescente
            </SelectItem>
            <SelectItem value="price-desc">
              Prezzo decrescente
            </SelectItem>
            <SelectItem value="discountPercentage-desc">
              Offerte
            </SelectItem>
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <button className="px-4 py-2 border flex items-center gap-2 transition-all border-black hover:bg-gray-300">
              Prezzo
              <ChevronDown className="w-4 h-4" />
            </button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto p-0"
            align="start"
          >
            <PriceFilter
              onClose={() => {}}
              onApply={handlePriceFilter}
            />
          </PopoverContent>
        </Popover>
      </div>
      <ProductGrid products={sortedProducts} />
    </div>
  );
}
