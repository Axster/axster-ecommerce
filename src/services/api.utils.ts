import {
  CategoryKey,
  Category,
} from "./api.model";

export const API_BASE_URL =
  "https://dummyjson.com";

export const categories: Record<
  CategoryKey,
  Category
> = {
  beauty: {
    slug: "beauty",
    name: "Beauty",
    url: `${API_BASE_URL}/products/category/beauty`,
  },
  fragrances: {
    slug: "fragrances",
    name: "Fragrances",
    url: `${API_BASE_URL}/products/category/fragrances`,
  },
  "skin-care": {
    slug: "skin-care",
    name: "Skin Care",
    url: `${API_BASE_URL}/products/category/skin-care`,
  },
  "sports-accessories": {
    slug: "sports-accessories",
    name: "Sports Accessories",
    url: `${API_BASE_URL}/products/category/sports-accessories`,
  },
  sunglasses: {
    slug: "sunglasses",
    name: "Sunglasses",
    url: `${API_BASE_URL}/products/category/sunglasses`,
  },
  tops: {
    slug: "tops",
    name: "Tops",
    url: `${API_BASE_URL}/products/category/tops`,
  },
  "womens-bags": {
    slug: "womens-bags",
    name: "Womens Bags",
    url: `${API_BASE_URL}/products/category/womens-bags`,
  },
  "womens-dresses": {
    slug: "womens-dresses",
    name: "Womens Dresses",
    url: `${API_BASE_URL}/products/category/womens-dresses`,
  },
  "womens-jewellery": {
    slug: "womens-jewellery",
    name: "Womens Jewellery",
    url: `${API_BASE_URL}/products/category/womens-jewellery`,
  },
  "womens-shoes": {
    slug: "womens-shoes",
    name: "Womens Shoes",
    url: `${API_BASE_URL}/products/category/womens-shoes`,
  },
  "womens-watches": {
    slug: "womens-watches",
    name: "Womens Watches",
    url: `${API_BASE_URL}/products/category/womens-watches`,
  },
  "mens-shirts": {
    slug: "mens-shirts",
    name: "Mens Shirts",
    url: `${API_BASE_URL}/products/category/mens-shirts`,
  },
  "mens-shoes": {
    slug: "mens-shoes",
    name: "Mens Shoes",
    url: `${API_BASE_URL}/products/category/mens-shoes`,
  },
  "mens-watches": {
    slug: "mens-watches",
    name: "Mens Watches",
    url: `${API_BASE_URL}/products/category/mens-watches`,
  },
};

export const SubCategoryTitles: Record<string, string> = {
  "t-shirt-and-polo": "T-shirt e polo",
  "shirts": "Camicie",
  "knitwear-and-sweatshirts": "Maglieria e Felpe",
  "sports": "Sport",
  "dresses": "Vestiti",
  "bags": "Borse",
  "jewellery": "Gioielli",
  "shoes": "Scarpe",
  "watches": "Orologi",
};

