
type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

type Meta = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  category: CategoryKey;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
};

export type Filters = Partial<{
limit: number;
skip: number;
q: string; //search
select: string; //to select specific terms of each product
sortBy: keyof Product;
order: "asc" | "desc";
}>;

export type Category = {
  slug: string;
  name: string;
  url: string;
};

export type CategoryKey =
  | "beauty"
  | "fragrances"
  | "skin-care"
  | "sports-accessories"
  | "sunglasses"
  | "tops"
  | "womens-bags"
  | "womens-dresses"
  | "womens-jewellery"
  | "womens-shoes"
  | "womens-watches"
  | "mens-shirts"
  | "mens-shoes"
  | "mens-watches";

  export type ProductsResponse = {
    limit: number;
    skip: number;
    total: number;
    products: Product[];
  };

