"use client";
import { useParams } from "next/navigation";
import ProductPage from "@/components/ProductPage";
import { categoryApiMap } from "@/services/api";
import { GenderParams } from "../gender.types";

export default function ProductCategory() {
  const { gender, category } =
    useParams<GenderParams>();
  const categoryInfo =
    categoryApiMap[gender]?.[category];

  if (!categoryInfo) {
    return <p>Categoria non trovata</p>;
  }

  return (
    <ProductPage
      fetchProducts={categoryInfo.fetch}
      title={categoryInfo.title}
      breadcrumb={categoryInfo.breadcrumb.join(
        " > "
      )}
    />
  );
}
