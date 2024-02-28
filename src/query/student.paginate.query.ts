import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { QueryStudent } from "@/models";
import { Service } from "@/services";

async function fetcher(params: Partial<QueryStudent>): Promise<any> {
  return await Service.student.paginate(params);
}

export function useStudentPaginateQuery(
  params: Partial<QueryStudent>
): UseQueryResult<any, Error | AxiosError> {
  return useQuery({
    queryKey: ["STUDENT-PAGINATE", params],
    queryFn: () => fetcher(params),
  });
}
