"use client";

import CardExchangeProductPending from "@/components/molecules/card/CardExchangeProductPending";
import SkeletonCardExchangeProductPending from "@/components/molecules/skeleton/SkeletonCardExchangeProductPending";
import { useGetAllExchangePending } from "@/http/exchange/get-all-exchange-pending";
import { useSession } from "next-auth/react";

export default function DashboardExchangeWrapper() {
  const { data: session, status } = useSession();

  const { data, isPending } = useGetAllExchangePending(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    },
  );

  if (isPending) {
    return <SkeletonCardExchangeProductPending />;
  }
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
      {data?.data.map((product) => (
        <CardExchangeProductPending key={product.id} data={product} />
      ))}
    </div>
  );
}
