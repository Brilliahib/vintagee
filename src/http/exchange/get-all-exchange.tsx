import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import { Purchase } from "@/types/purchases/purchase";

interface GetAllExchangeResponse {
  data: Purchase[];
}

export const GetAllExchangeHandler = async (
  token: string,
): Promise<GetAllExchangeResponse> => {
  const { data } = await api.get<GetAllExchangeResponse>("/exchange", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useGetAllExchange = (
  token: string,
  options?: Partial<UseQueryOptions<GetAllExchangeResponse, AxiosError>>,
) => {
  return useQuery({
    queryKey: ["purchase"],
    queryFn: () => GetAllExchangeHandler(token),
    ...options,
  });
};
