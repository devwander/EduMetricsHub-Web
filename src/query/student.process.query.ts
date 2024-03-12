import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { StudentProgress } from "@/models";
import { Service } from "@/services";

export function useStudentProgressQuery(
  id: number | string
): UseQueryResult<StudentProgress, Error | AxiosError> {
  return useQuery({
    queryKey: ["STUDENT-PROGRESS", id],
    queryFn: () => Service.student.progress(id),
    enabled: !!id,
  });
}
