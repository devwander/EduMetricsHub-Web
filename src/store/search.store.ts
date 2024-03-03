import { create } from "zustand";

type SearchStore = {
  search: string | undefined;
  setSearch: (value: string | undefined) => void;
};

export const searchStore = create<SearchStore>()((set) => ({
  search: undefined,
  setSearch: (value: string | undefined): void => {
    set((state) => ({ ...state, search: value }));
  },
}));
