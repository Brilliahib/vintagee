"use client";

import CardExchangeProductPending from "@/components/molecules/card/CardExchangeProductPending";
import { useGetAllExchangePending } from "@/http/exchange/get-all-exchange-pending";
import { useSession } from "next-auth/react";

export default function DashboardExchangeWrapper() {
  const { data: session, status } = useSession();

  const { data } = useGetAllExchangePending(session?.access_token as string, {
    enabled: status === "authenticated",
  });
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
      {data?.data.map((product) => (
        <CardExchangeProductPending key={product.id} data={product} />
      ))}
    </div>
  );
}
