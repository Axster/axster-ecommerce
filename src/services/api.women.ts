import { createQueryString } from "../../utils/createQueryString";
import { api } from "./api";
import { Filters, Product } from "./api.model";
import { categories } from "./api.utils";

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
