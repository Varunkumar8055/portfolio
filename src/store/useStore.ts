import { create } from "zustand";

interface StoreState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const useStore = create<StoreState>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export default useStore;
