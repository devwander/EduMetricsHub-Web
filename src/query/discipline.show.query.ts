import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { Service } from "@/services";

export function useDisciplineShowQuery(
  id: number | string
): UseQueryResult<any, Error | AxiosError> {
  return useQuery({
    queryKey: ["DISCIPLINE-SHOW", id],
    queryFn: () => Service.discipline.show(id),
  });
}
