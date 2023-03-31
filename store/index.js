import { create } from "zustand";

export const useStore = create((set) => ({
  cameraPosition: {
    x: -5,
    y: 2,
    z: -13,
  },
  cameraLookPosition: {
    x: 5,
    y: 10,
    z: 0,
  },
  movement: "start",
  UIState: "home",
  setMovement: (movement) => set({ movement }),
  setCameraPosition: (cameraPosition) => set({ cameraPosition }),
  setCameraLookPosition: (cameraLookPosition) => set({ cameraLookPosition }),
  setUIState: (UIState) => set({ UIState })
}));
