"use client";

import PageContainer from "@/components/atoms/container/PageContainer";
import CardDetailUserProduct from "@/components/molecules/card/CardDetailUserProduct";
import CardProduct from "@/components/molecules/card/CardProduct";
import SkeletonCardDetailUser from "@/components/molecules/skeleton/SkeletonCardDetailUser";
import { useGetDetailUser } from "@/http/user/get-detail-user";
import { useGetDetailUserProduct } from "@/http/user/get-product-user";

interface UserProductWrapperProps {
  id: string;
}

export default function UserProductWrapper({ id }: UserProductWrapperProps) {
  const { data, isPending } = useGetDetailUser(id);
  const { data: product, isPending: isFetching } = useGetDetailUserProduct(id);

  console.log("Product Data:", product);

  return (
    <>
      <main className="pt-8">
        <PageContainer>
          {isPending ? (
            <SkeletonCardDetailUser />
          ) : (
            <CardDetailUserProduct data={data?.data} />
          )}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {isFetching
              ? Array.from({ length: 4 }).map((_, index) => (
                  <CardProduct key={index} isLoading />
                ))
              : product?.data.map((product) => (
                  <CardProduct key={product.id} product={product} />
                ))}
          </div>
        </PageContainer>
      </main>
    </>
  );
}
