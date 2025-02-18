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

export enum CategoryKeyEnum {
  Beauty = "beauty",
  Fragrances = "fragrances",
  SkinCare = "skin-care",
  SportsAccessories = "sports-accessories",
  Sunglasses = "sunglasses",
  Tops = "tops",
  WomensBags = "womens-bags",
  WomensDresses = "womens-dresses",
  WomensJewellery = "womens-jewellery",
  WomensShoes = "womens-shoes",
  WomensWatches = "womens-watches",
  MensShirts = "mens-shirts",
  MensShoes = "mens-shoes",
  MensWatches = "mens-watches",
}
export type CategoryKey = `${CategoryKeyEnum}`;

export type ProductsResponse = {
  limit: number;
  skip: number;
  total: number;
  products: Product[];
};

export type CategoryRouteData = {
  fetch: () => Promise<Product[]>;
  title: string;
  breadcrumb: string[];
};

export type GenderRoutes =
  | "men"
  | "women"
  | "children";
export type Categoryroutes =
  | "shoes"
  | "clothing"
  | "accessories"
  | "sport"
  | "beauty";

export type GenderCategoryMap = Record<
  GenderRoutes,
  Record<Categoryroutes, CategoryRouteData>
>;

export type GenderApiMap = Record<
  GenderRoutes,
  CategoryRouteData
>;
export type CategoryApiMap = GenderCategoryMap;
