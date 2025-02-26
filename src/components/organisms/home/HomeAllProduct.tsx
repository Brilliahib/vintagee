"use client";

import CardProduct from "@/components/molecules/card/CardProduct";
import { useGetAllProduct } from "@/http/product/get-all-product";

export default function HomeAllProduct() {
  const { data, isPending } = useGetAllProduct();
  return (
    <>
      <div className="space-y-6 md:space-y-8">
        <h1 className="text-lg font-bold md:text-xl">Produk Terbaru</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {isPending
            ? Array.from({ length: 4 }).map((_, index) => (
                <CardProduct key={index} isLoading />
              ))
            : data?.data.map((product) => (
                <CardProduct key={product.id} product={product} />
              ))}
        </div>
      </div>
    </>
  );
}
