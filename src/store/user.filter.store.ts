import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { QueryUser } from "@/models";

type UserFilterStore = {
  params: Partial<QueryUser>;
  append: (data: Partial<QueryUser>) => void;
};

export const userFilterStore = create<UserFilterStore>()(
  persist(
    (set) => ({
      params: {
        page: 1,
        perPage: 10,
      },
      append: (data: Partial<QueryUser>): void => {
        set((state) => ({ ...state, params: { ...state.params, ...data } }));
      },
    }),
    {
      name: "user-query-filter",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
