"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
} from "lucide-react";
import type { Product } from "@/services/api.model";
import { Button } from "@/components/ui/button";

interface SimilarProductsProps {
  products: Product[];
}

export function SimilarProducts({
  products,
}: SimilarProductsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (
    direction: "left" | "right"
  ) => {
    if (scrollRef.current) {
      const scrollAmount =
        direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">
        Prodotti simili
      </h2>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="flex-shrink-0 w-[250px] group"
            >
              <div className="relative aspect-[3/4] mb-2">
                <Image
                  src={
                    product.images[0] ||
                    "/placeholder.svg"
                  }
                  alt={product.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="400px"
                />
                <button className="absolute top-2 right-2 p-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-sm">
                  {product.title}
                </h3>
                <p className="font-bold">
                  {product.price}€
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
