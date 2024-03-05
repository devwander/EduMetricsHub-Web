import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useStudentMenuStore = create(
  persist(
    (set) => ({
      currentScreen: "progress",
      setCurrentScreen: (screen: string) => set({ currentScreen: screen }),
    }),
    {
      name: "student-menu-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
