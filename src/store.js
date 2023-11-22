import { create } from "zustand";

const useAppStore = create((set) => ({
  data: [],
  setdata: (cart) => set({ data }),
}));
export default  useAppStore;
