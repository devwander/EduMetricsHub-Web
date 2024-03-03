import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { QueryDiscipline } from "@/models";

type DisciplineFilterStore = {
  params: Partial<QueryDiscipline>;
  append: (data: Partial<QueryDiscipline>) => void;
};

export const disciplineFilterStore = create<DisciplineFilterStore>()(
  persist(
    (set) => ({
      params: {
        page: 1,
        perPage: 10,
      },
      append: (data: Partial<QueryDiscipline>): void => {
        set((state) => ({ ...state, params: { ...state.params, ...data } }));
      },
    }),
    {
      name: "discipline-query-filter",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
