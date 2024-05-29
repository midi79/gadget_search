import { create } from "zustand";

interface ICategoryState {
    category: string;
    setCategory: (newCategory: string) => void;
}

const useCategoryStore = create<ICategoryState>((set) => ({
    category: "/",
    setCategory: (newCategory: string) => set({ category: newCategory }),
}));

export default useCategoryStore;
