import { getProductById, getProducts } from "@/services/api"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"
import { SimilarProducts } from "@/components/similar-products"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(Number.parseInt(params.id))
  const allProducts = await getProducts()
  const similarProducts = allProducts
    .filter((p) => p.category.id === product.category.id && p.id !== product.id)
    .slice(0, 6)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <ProductGallery images={product.images} />
        <ProductInfo product={product} />
      </div>
      <SimilarProducts products={similarProducts} />
    </div>
  )
}

