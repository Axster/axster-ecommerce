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

const api = axios.create({
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

export const getMenProducts = async (
  filters?: Filters
) => {
  const query = filters
    ? `?${createQueryString(filters)}`
    : "";
  const responses = await Promise.all([
    api.get(
      `${categories["mens-shirts"].url}${query}`
    ),
    api.get(
      `${categories["mens-shoes"].url}${query}`
    ),
    api.get(
      `${categories["mens-watches"].url}${query}`
    ),
  ]);

  return responses.flatMap(
    (response) => response.data.products
  ) as Product[];
};

export const getMenClothing = async (
  filters?: Filters
) => {
  const query = filters
    ? `?${createQueryString(filters)}`
    : "";
  const responses = await Promise.all([
    api.get(
      `${categories["mens-shirts"].url}${query}`
    ),
    api.get(
      `${categories["mens-shoes"].url}${query}`
    ),
  ]);
  return responses.flatMap(
    (response) => response.data.products
  ) as Product[];
};

export const getMenAccessories = async (
  filters?: Filters
) => {
  const query = filters
    ? `?${createQueryString(filters)}`
    : "";
  const responses = await Promise.all([
    api.get(
      `${categories["mens-watches"].url}${query}`
    ),
    api.get(
      `${categories["sunglasses"].url}${query}`
    ),
  ]);

  return responses.flatMap(
    (response) => response.data.products
  ) as Product[];
};

export const getWomenAccessories = async (
  filters?: Filters
) => {
  const query = filters
    ? `?${createQueryString(filters)}`
    : "";
  const responses = await Promise.all([
    api.get(
      `${categories["womens-bags"].url}${query}`
    ),
    api.get(
      `${categories["womens-jewellery"].url}${query}`
    ),
    api.get(
      `${categories["womens-watches"].url}${query}`
    ),
    api.get(
      `${categories["sunglasses"].url}${query}`
    ),
  ]);

  return responses.flatMap(
    (response) => response.data.products
  ) as Product[];
};

export const getWomenClothing = async (
  filters?: Filters
) => {
  const query = filters
    ? `?${createQueryString(filters)}`
    : "";
  const responses = await Promise.all([
    api.get(
      `${categories["womens-dresses"].url}${query}`
    ),
    api.get(
      `${categories["womens-shoes"].url}${query}`
    ),
    api.get(`${categories["tops"].url}${query}`),
  ]);

  return responses.flatMap(
    (response) => response.data.products
  ) as Product[];
};

export const getWomenProducts = async (
  filters?: Filters
) => {
  const query = filters
    ? `?${createQueryString(filters)}`
    : "";
  const responses = await Promise.all([
    api.get(
      `${categories["womens-bags"].url}${query}`
    ),
    api.get(
      `${categories["womens-dresses"].url}${query}`
    ),
    api.get(
      `${categories["womens-jewellery"].url}${query}`
    ),
    api.get(
      `${categories["womens-shoes"].url}${query}`
    ),
    api.get(
      `${categories["womens-watches"].url}${query}`
    ),
    api.get(`${categories["tops"].url}${query}`),
  ]);

  return responses.flatMap(
    (response) => response.data.products
  ) as Product[];
};

export const getMenBeauty = async (
  filters?: Filters
) => {
  const query = filters
    ? `?${createQueryString(filters)}`
    : "";
  const responses = await Promise.all([
    api.get(
      `${categories["fragrances"].url}${query}`
    ),
    api.get(
      `${categories["skin-care"].url}${query}`
    ),
  ]);
  return responses.flatMap(
    (response) => response.data.products
  ) as Product[];
};

export const getWomenBeauty = async (
  filters?: Filters
) => {
  const query = filters
    ? `?${createQueryString(filters)}`
    : "";
  const responses = await Promise.all([
    api.get(
      `${categories["beauty"].url}${query}`
    ),
    api.get(
      `${categories["fragrances"].url}${query}`
    ),
    api.get(
      `${categories["skin-care"].url}${query}`
    ),
  ]);
  return responses.flatMap(
    (response) => response.data.products
  ) as Product[];
};

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
  // add children route
  children: {
    fetch: getWomenProducts,
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
  // it's always the women category, child is not present in the API
  children: {
    shoes: {
      fetch: () =>
        getProductsByCategory("womens-shoes"),
      title: "Scarpe Donna",
      breadcrumb: ["Donna", "Scarpe"],
    },
    clothing: {
      fetch: () => getWomenClothing(),
      title: "Abbigliamento Donna",
      breadcrumb: ["Donna", "Abbigliamento"],
    },
    accessories: {
      fetch: () => getWomenAccessories(),
      title: "Accessori Donna",
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
      title: "Sport Donna",
      breadcrumb: ["Donna", "Sport"],
    },
  },
};
