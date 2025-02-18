import { ProductGallery } from "@/components/product-gallery";
import { ProductInfo } from "@/components/product-info";
import { SimilarProducts } from "@/components/similar-products";
import {
  getProductById,
  getProductsByCategory,
} from "@/services/api";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const product = await getProductById(
    Number.parseInt(params.id)
  );
  const similarProducts =
    await getProductsByCategory(
      product.category,
      { limit: 8 }
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-1 mb-12">
        <ProductGallery
          images={product.images}
          discountPercentage={
            product.discountPercentage
          }
        />
        <ProductInfo product={product} />
      </div>
      <SimilarProducts
        products={similarProducts}
      />
    </div>
  );
}
