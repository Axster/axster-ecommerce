"use client";
import { useParams } from "next/navigation";
import ProductPage from "@/components/ProductPage";
import { genderApiMap } from "@/services/api";
import { GenderParams } from "./gender.types";

export default function ProductGender() {
  const { gender } = useParams<GenderParams>();
  const genderInfo = genderApiMap[gender];

  if (!genderInfo) {
    return <p>Pagina Non trovata</p>;
  }

  return (
    <ProductPage
      fetchProducts={genderInfo.fetch}
      title={genderInfo.title}
      breadcrumb={genderInfo.breadcrumb}
    />
  );
}
