import { create } from "zustand";

interface WidgetsStore {
  isLoadGosUslugi: boolean;
  changeLoadGosUslugi: (state: boolean) => void;
}

const useWidgetsStore = create<WidgetsStore>((set) => ({
  isLoadGosUslugi: false,
  changeLoadGosUslugi: (data) => set(() => ({ isLoadGosUslugi: data })),
}));

export default useWidgetsStore;
