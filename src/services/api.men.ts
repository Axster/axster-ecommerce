import { createQueryString } from "../../utils/createQueryString";
import { api } from "./api";
import { Filters, Product } from "./api.model";
import {
  categories,
  promoQuery,
} from "./api.utils";

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

export const getMenPromo = async () => {
  const query = `?${createQueryString(promoQuery)}`;
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

  return (
    responses.flatMap(
      (response) => response.data.products
    ) as Product[]
  ).filter(
    (p) => Number(p.discountPercentage) >= 14
  );
};
