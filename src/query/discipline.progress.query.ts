import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { DisciplineProgress } from "@/models";
import { Service } from "@/services";

export function useDisciplineProgressQuery(
  id: number | string
): UseQueryResult<DisciplineProgress, Error | AxiosError> {
  return useQuery({
    queryKey: ["DISCIPLINE-PROGRESS", id],
    queryFn: () => Service.discipline.progress(id),
    enabled: !!id,
  });
}
