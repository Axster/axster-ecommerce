"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { Product } from "@/services/api.model";
import NoImage from "../../public/images/no_image_placeholder.png";
import { GenderParams } from "@/app/[gender]/gender.types";
import { useParams } from "next/navigation";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({
  products,
}: ProductGridProps) {
  const { gender } = useParams<GenderParams>();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/${gender}/product/${product.id}`}
          className="group block"
        >
          <div className="flex flex-col">
            <div className="relative aspect-[3/4] mb-4">
              <Image
                src={product.images[0] || NoImage}
                alt={product.title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <button className="absolute top-2 right-2 p-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="w-5 h-5" />
              </button>
              {product.discountPercentage >
                14 && (
                <div className="absolute font-bold bottom-0 left-0 bg-[rgb(217,0,12)] text-white text-xs p-1">
                  Promo
                </div>
              )}
            </div>

            <div className="min-h-[4rem] flex flex-col">
              <h3 className="font-bold text-sm">
                {product.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {product.category}
              </p>
            </div>

            <div className="mt-2">
              {product.discountPercentage > 14 ? (
                <div className="space-y-0.5">
                  <p className="font-bold text-[rgb(217,0,12)]">
                    {(
                      product.price *
                      (1 -
                        product.discountPercentage /
                          100)
                    ).toFixed(2)}{" "}
                    €
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Prezzo ordinario:{" "}
                    <span className="line-through">
                      {product.price.toFixed(2)} €
                    </span>{" "}
                    <span className=" text-[rgb(217,0,12)]">
                      Fino a -
                      {Math.round(
                        product.discountPercentage
                      )}
                      %
                    </span>
                  </p>
                </div>
              ) : (
                <p className="font-bold">
                  {product.price.toFixed(2)} €
                </p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
