import { create } from "zustand";

const usePageStore = create((set) => ({
    page: 1,
    totalProductCount: 0,
    setPage: (newPage: number) => set({ page: newPage }),
    setTotalProductCount: (newTotalProductCount: number) => set({ totalProductCount: newTotalProductCount }),
}));

export default usePageStore;
