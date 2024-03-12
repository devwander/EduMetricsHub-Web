import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { StudentHistoric } from "@/models";
import { Service } from "@/services";

export function useStudentHistoricQuery(
  id: number | string
): UseQueryResult<StudentHistoric, Error | AxiosError> {
  return useQuery({
    queryKey: ["STUDENT-HISTORIC", id],
    queryFn: () => Service.student.historic(id),
    enabled: !!id,
  });
}
