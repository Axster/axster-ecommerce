import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { Product } from "@/services/api.model";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({
  products,
}: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="group"
        >
          <div className="relative aspect-[3/4] mb-2">
            <Image
              src={
                product.images[0] ||
                "/placeholder.svg"
              }
              alt={product.title}
              sizes="200px"
              fill
              className="object-cover rounded-lg"
            />
            <button className="absolute top-2 right-2 p-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Heart className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-1">
            <h3 className="font-medium text-sm">
              {product.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {product.category}
            </p>
            <p className="font-bold">
              {product.price}€
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
