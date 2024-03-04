import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { DisciplineDemend } from "@/models";
import { Service } from "@/services";

export function useDisciplineDemendQuery(
  id: number | string
): UseQueryResult<DisciplineDemend, Error | AxiosError> {
  return useQuery({
    queryKey: ["DISCIPLINE-DEMEND", id],
    queryFn: () => Service.discipline.demend(id),
    enabled: !!id,
  });
}
