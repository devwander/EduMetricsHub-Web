import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { StudentHoursPerSemester } from "@/models";
import { Service } from "@/services";

export function useStudentHoursPerSemesterQuery(
  id: number | string
): UseQueryResult<StudentHoursPerSemester, Error | AxiosError> {
  return useQuery({
    queryKey: ["STUDENT-HOURS-PER-SEMESTER", id],
    queryFn: () => Service.student.hoursPerSemester(id),
    enabled: !!id,
  });
}
