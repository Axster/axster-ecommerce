"use client";
import { useParams } from "next/navigation";
import ProductPage from "@/components/ProductPage";
import { getProductsByCategory } from "@/services/api";
import { GenderParams } from "../../gender.types";
import {  categoriesTitle } from "@/services/api.utils";

export default function SubCategory() {
  const { gender, subcategory } = useParams<GenderParams>();
    const subCategoryTitle = categoriesTitle[subcategory];

    if (!subcategory) {
    return <p>Sottocategoria Non trovata {subcategory}</p>;
  }

  return (
    <ProductPage
        fetchProducts={() => getProductsByCategory(subcategory)}
        title={subCategoryTitle}
      breadcrumb={[gender, subCategoryTitle]}
    />
  );
}
