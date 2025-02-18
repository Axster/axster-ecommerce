"use client";
import { useParams } from "next/navigation";
import ProductPage from "@/components/ProductPage";
import { getProductsByCategory } from "@/services/api";
import { GenderParams } from "../../gender.types";
import { SubCategoryTitles } from "@/services/api.utils";

export default function SubCategory() {
  const { gender, category, subcategory } =
    useParams<GenderParams>();
  const subCategoryTitle =
    SubCategoryTitles[category];

  if (!subcategory) {
    return <p>Sottocategoria Non trovata</p>;
  }

  return (
    <ProductPage
      fetchProducts={() =>
        getProductsByCategory(subcategory)
      }
      title={subCategoryTitle}
      breadcrumb={[gender, subCategoryTitle]}
    />
  );
}
