import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { QueryDiscipline } from "@/models";
import { Service } from "@/services";

async function fetcher(params: Partial<QueryDiscipline>): Promise<any> {
  return await Service.discipline.paginate(params);
}

export function useDisciplinePaginateQuery(
  params: Partial<QueryDiscipline>
): UseQueryResult<any, Error | AxiosError> {
  return useQuery({
    queryKey: ["DISCIPLINE-PAGINATE", params],
    queryFn: () => fetcher(params),
  });
}
