import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { Student } from "@/models";
import { Service } from "@/services";

export function useStudentShowQuery(
  id: number | string
): UseQueryResult<Student, Error | AxiosError> {
  return useQuery({
    queryKey: ["STUDENT-SHOW", id],
    queryFn: () => Service.student.show(id),
  });
}
