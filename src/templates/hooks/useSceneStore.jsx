import { create } from 'zustand'

export const useSceneStore = create((set) => ({
  isTitleEnabled: false,
  enableTitle: () => set(() => ({ isTitleEnabled: true })),
  disableTitle: () => set(() => ({ isTitleEnabled: false })),
  isSceneEnabled: false,
  enableScene: () => set(() => ({ isSceneEnabled: true })),
}))
