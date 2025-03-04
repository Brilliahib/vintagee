"use client";

import { exchangeColumns } from "@/components/atoms/datacolumn/DataExchange";
import { DataTable } from "@/components/molecules/datatable/DataTable";
import { useGetAllExchange } from "@/http/exchange/get-all-exchange";
import { useSession } from "next-auth/react";

export default function DashboardHistoryExchangeWrapper() {
  const { data: session, status } = useSession();

  const { data, isPending } = useGetAllExchange(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    },
  );
  return (
    <div>
      <DataTable
        columns={exchangeColumns}
        isLoading={isPending}
        data={data?.data ?? []}
      />
    </div>
  );
}
