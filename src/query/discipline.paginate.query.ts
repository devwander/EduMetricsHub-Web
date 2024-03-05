import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { Discipline, Paginate, QueryDiscipline } from "@/models";
import { Service } from "@/services";

async function fetcher(
  params: Partial<QueryDiscipline>
): Promise<Paginate<Discipline>> {
  return await Service.discipline.paginate(params);
}

export function useDisciplinePaginateQuery(
  params: Partial<QueryDiscipline>
): UseQueryResult<Paginate<Discipline>, Error | AxiosError> {
  return useQuery({
    queryKey: ["DISCIPLINE-PAGINATE", params],
    queryFn: () => fetcher(params),
  });
}
