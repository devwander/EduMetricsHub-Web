import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { Paginate, QueryStudent, Student } from "@/models";
import { Service } from "@/services";

async function fetcher(
  params: Partial<QueryStudent>
): Promise<Paginate<Student>> {
  return await Service.student.paginate(params);
}

export function useStudentPaginateQuery(
  params: Partial<QueryStudent>
): UseQueryResult<Paginate<Student>, Error | AxiosError> {
  return useQuery({
    queryKey: ["STUDENT-PAGINATE", params],
    queryFn: () => fetcher(params),
  });
}
