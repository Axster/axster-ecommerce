"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import NoImage from "../../public/images/no_image_placeholder.png";

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({
  images,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] =
    useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollThumbnails = (
    direction: "up" | "down"
  ) => {
    if (scrollRef.current) {
      const scrollAmount =
        direction === "up" ? -200 : 200;
      scrollRef.current.scrollBy({
        top: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex gap-4">
      {/* Thumbnails column */}
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 rounded-full bg-white shadow-md"
          onClick={() => scrollThumbnails("up")}
        >
          <ChevronUp className="h-4 w-4" />
        </Button>

        <div
          ref={scrollRef}
          className="flex flex-col gap-2 overflow-y-auto scrollbar-hide"
          style={{ maxHeight: "600px" }}
        >
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() =>
                setSelectedImage(index)
              }
              className={`relative w-20 aspect-square flex-shrink-0 border rounded-md overflow-hidden
                ${selectedImage === index ? "border-black" : "border-gray-200"}
                hover:border-gray-400 transition-colors`}
            >
              <Image
                src={image || NoImage}
                alt={`Product thumbnail ${index + 1}`}
                fill
                sizes="400px"
                className="object-cover"
              />
            </button>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-10 rounded-full bg-white shadow-md"
          onClick={() => scrollThumbnails("down")}
        >
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      {/* Main image */}
      <div className="relative flex-1 aspect-square bg-cover rounded-lg overflow-hidden">
        <Image
          src={images[selectedImage] || NoImage}
          alt="Product image"
          fill
          sizes="(max-width: 800px) 100vw, 800px"
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  );
}
