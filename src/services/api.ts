import axios from "axios";
import {
  Category,
  CategoryKey,
  Filters,
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

export const getBeauty = async (
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
