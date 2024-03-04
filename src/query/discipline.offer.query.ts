import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { DisciplineOffer } from "@/models";
import { Service } from "@/services";

export function useDisciplineOfferQuery(
  id: number | string
): UseQueryResult<DisciplineOffer[], Error | AxiosError> {
  return useQuery({
    queryKey: ["DISCIPLINE-OFFER", id],
    queryFn: () => Service.discipline.offer(id),
    enabled: !!id,
  });
}
