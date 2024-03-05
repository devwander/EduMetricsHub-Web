import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { QueryStudent } from "@/models";

type StudentFilterStore = {
  params: Partial<QueryStudent>;
  append: (data: Partial<QueryStudent>) => void;
};

export const studentFilterStore = create<StudentFilterStore>()(
  persist(
    (set) => ({
      params: {
        page: 1,
        perPage: 10,
      },
      append: (data: Partial<QueryStudent>): void => {
        set((state) => ({ ...state, params: { ...state.params, ...data } }));
      },
    }),
    {
      name: "student-query-filter",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
