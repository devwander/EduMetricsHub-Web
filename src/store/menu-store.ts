import { create } from "zustand";

interface MenuStore {
  open: boolean;
  toggle: () => void;
}

export const menuStore = create<MenuStore>()((set) => ({
  open: false,
  toggle: (): void => set((state) => ({ open: !state.open })),
}));
