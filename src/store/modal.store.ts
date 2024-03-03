/* eslint-disable no-unused-vars */
import { create } from "zustand";

import type { ModalKey } from "@/models";

interface ModalStore {
  isOpen: boolean;
  dataId: string | number | null;
  key: ModalKey | null;
  open: ({ key, dataId }: { key: ModalKey; dataId?: string | number }) => void;
  close: () => void;
}

export const modalStore = create<ModalStore>()((set) => ({
  isOpen: false,
  key: null,
  dataId: null,
  open: ({ key, dataId }: { key: ModalKey; dataId?: string | number }): void =>
    set((state) => ({ ...state, isOpen: true, key, dataId })),
  close: (): void =>
    set((state) => ({ ...state, isOpen: false, key: null, dataId: null })),
}));
