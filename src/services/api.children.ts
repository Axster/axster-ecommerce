import { createQueryString } from "../../utils/createQueryString";
import { api } from "./api";
import { Filters, Product } from "./api.model";
import { categories } from "./api.utils";

export const getChildrenProducts = async (
  filters?: Filters
) => {
  const query = filters
    ? `?${createQueryString(filters)}`
    : "";
  const responses = await Promise.all([
    api.get(
      `${categories["mens-shoes"].url}${query}`
    ),
    api.get(
      `${categories["mens-shirts"].url}${query}`
    ),
    api.get(`${categories["tops"].url}${query}`),
    api.get(
      `${categories["sunglasses"].url}${query}`
    ),
  ]);

  return responses.flatMap(
    (response) => response.data.products
  ) as Product[];
};

export const getChildrenClothing = async (
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
    api.get(`${categories["tops"].url}${query}`),
  ]);

  return responses.flatMap(
    (response) => response.data.products
  ) as Product[];
};

export const getChildrenAccessories = async (
  filters?: Filters
) => {
  const query = filters
    ? `?${createQueryString(filters)}`
    : "";
  const responses = await Promise.all([
    api.get(
      `${categories["sunglasses"].url}${query}`
    ),
  ]);

  return responses.flatMap(
    (response) => response.data.products
  ) as Product[];
};

export const getChildrenBeauty = async (
  filters?: Filters
) => {
  const query = filters
    ? `?${createQueryString(filters)}`
    : "";
  const responses = await Promise.all([
    api.get(
      `${categories["skin-care"].url}${query}`
    ),
  ]);

  return responses.flatMap(
    (response) => response.data.products
  ) as Product[];
};
