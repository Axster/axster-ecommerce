import axios from "axios";
import {
  Category,
  CategoryKey,
  Filters,
  GenderApiMap,
  GenderCategoryMap,
  Product,
  ProductsResponse,
} from "./api.model";
import {
  API_BASE_URL,
  categories,
} from "./api.utils";
import { createQueryString } from "../../utils/createQueryString";
import {
  getChildrenProducts,
  getChildrenClothing,
  getChildrenAccessories,
  getChildrenBeauty,
} from "./api.children";
import {
  getMenProducts,
  getMenClothing,
  getMenAccessories,
  getMenBeauty,
} from "./api.men";
import {
  getWomenProducts,
  getWomenClothing,
  getWomenAccessories,
  getWomenBeauty,
} from "./api.women";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProducts = async (
  filters?: Filters
) => {
  const query = filters
    ? `?${createQueryString(filters)}`
    : "";
  const response = await api.get(
    `/products${query}`
  );
  return response.data as ProductsResponse;
};

// default skip: 0
// default limit: 30

export const getProductById = async (
  id: number
) => {
  const response = await api.get(
    `/products/${id}`
  );
  return response.data as Product;
};

export const getProductsByCategory = async (
  category: CategoryKey,
  filters?: Filters
) => {
  const query = filters
    ? `?${createQueryString(filters)}`
    : "";
  const response = await api.get(
    `${categories[category].url}${query}`
  );
  return response.data.products as Product[];
};

export const getCategories = async () => {
  const response = await api.get(
    "/products/categories"
  );
  return response.data as Category[];
};

export const genderApiMap: GenderApiMap = {
  men: {
    fetch: getMenProducts,
    title: "Uomo",
    breadcrumb: ["Uomo"],
  },
  women: {
    fetch: getWomenProducts,
    title: "Donna",
    breadcrumb: ["Donna"],
  },
  children: {
    fetch: getChildrenProducts,
    title: "Bambino",
    breadcrumb: ["Bambino"],
  },
};

export const categoryApiMap: GenderCategoryMap = {
  men: {
    shoes: {
      fetch: () =>
        getProductsByCategory("mens-shoes"),
      title: "Scarpe da Uomo",
      breadcrumb: ["Uomo", "Scarpe"],
    },
    clothing: {
      fetch: () => getMenClothing(),
      title: "Abbigliamento da Uomo",
      breadcrumb: ["Uomo", "Abbigliamento"],
    },
    accessories: {
      fetch: () => getMenAccessories(),
      title: "Accessori da Uomo",
      breadcrumb: ["Uomo", "Accessori"],
    },
    beauty: {
      fetch: () => getMenBeauty(),
      title: "Beauty Uomo",
      breadcrumb: ["Uomo", "Beauty"],
    },
    sport: {
      fetch: () =>
        getProductsByCategory(
          "sports-accessories"
        ),
      title: "Sport da Uomo",
      breadcrumb: ["Uomo", "Sport"],
    },
  },
  women: {
    shoes: {
      fetch: () =>
        getProductsByCategory("womens-shoes"),
      title: "Scarpe da Donna",
      breadcrumb: ["Donna", "Scarpe"],
    },
    clothing: {
      fetch: () => getWomenClothing(),
      title: "Abbigliamento da Donna",
      breadcrumb: ["Donna", "Abbigliamento"],
    },
    accessories: {
      fetch: () => getWomenAccessories(),
      title: "Accessori da Donna",
      breadcrumb: ["Donna", "Accessori"],
    },
    beauty: {
      fetch: () => getWomenBeauty(),
      title: "Beauty Donna",
      breadcrumb: ["Donna", "Beauty"],
    },
    sport: {
      fetch: () =>
        getProductsByCategory(
          "sports-accessories"
        ),
      title: "Sport da Donna",
      breadcrumb: ["Donna", "Sport"],
    },
  },
  children: {
    shoes: {
      fetch: () =>
        getProductsByCategory("mens-shoes"),
      title: "Scarpe Bambino",
      breadcrumb: ["Bambino", "Scarpe"],
    },
    clothing: {
      fetch: () => getChildrenClothing(),
      title: "Collezione Bambino",
      breadcrumb: ["Bambino", "Abbigliamento"],
    },
    accessories: {
      fetch: () => getChildrenAccessories(),
      title: "Accessori Bambino",
      breadcrumb: ["Bambino", "Accessori"],
    },
    beauty: {
      fetch: () => getChildrenBeauty(),
      title: "Beauty Bambino",
      breadcrumb: ["Bambino", "Beauty"],
    },
    sport: {
      fetch: () =>
        getProductsByCategory(
          "sports-accessories"
        ),
      title: "Sport Bambino",
      breadcrumb: ["Bambino", "Sport"],
    },
  },
};
