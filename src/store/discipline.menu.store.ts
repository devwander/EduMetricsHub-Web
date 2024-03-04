import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useDisciplineMenuStore = create(
  persist(
    (set) => ({
      currentScreen: "progress",
      setCurrentScreen: (screen: string) => set({ currentScreen: screen }),
    }),
    {
      name: "discipline-menu-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
