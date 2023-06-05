import { create } from "zustand";

interface AccessibilityStore {
  isLoadAccessibility: boolean;
  changeLoadAccessibility: (state: boolean) => void;
}

const useAccessibilityStore = create<AccessibilityStore>((set) => ({
  isLoadAccessibility: false,
  changeLoadAccessibility: (data) => set(() => ({ isLoadAccessibility: data })),
}));

export default useAccessibilityStore;
