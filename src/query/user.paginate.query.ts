import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { Paginate, QueryUser, User } from "@/models";
import { Service } from "@/services";

async function fetcher(params: Partial<QueryUser>): Promise<Paginate<User>> {
  return await Service.auth.paginate(params);
}

export function useUserPaginateQuery(
  params: Partial<QueryUser>
): UseQueryResult<Paginate<User>, Error | AxiosError> {
  return useQuery({
    queryKey: ["USER-PAGINATE", params],
    queryFn: () => fetcher(params),
  });
}
