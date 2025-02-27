"use client";

import PageContainer from "@/components/atoms/container/PageContainer";
import CardDetailProduct from "@/components/molecules/card/CardDetailProduct";
import { useGetDetailProduct } from "@/http/product/get-detail-product";

interface ProductDetailContentProps {
  id: string;
}

export default function ProductDetailContent({
  id,
}: ProductDetailContentProps) {
  const { data, isPending } = useGetDetailProduct(id);

  return (
    <PageContainer>
      {isPending ? (
        <CardDetailProduct isLoading />
      ) : (
        <CardDetailProduct data={data?.data} />
      )}
    </PageContainer>
  );
}
