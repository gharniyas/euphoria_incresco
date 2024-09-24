import { create } from "zustand";

const useStore = create((set) => ({
  products: [],
  searchValue: "",
  categories: [],
  priceRange: [0, 1000],
  colors: [],
  sizes: [],
  dressStyles: [],
  sorting: "",
  sortingOrder: 0,
  setProducts: (arr) =>
    set(() => ({
      products: arr,
    })),
  setSearchValue: (value) => set(() => ({ searchValue: value })),
  setCategories: (arr) => set(() => ({ categories: arr })),
  setPriceRange: (arr) => set(() => ({ priceRange: arr })),
  setColors: (arr) => set(() => ({ colors: arr })),
  setSizes: (arr) => set(() => ({ sizes: arr })),
  setDressStyles: (arr) => set(() => ({ dressStyles: arr })),
  setSorting: (value) => set({ sorting: value }),
  setSortingOrder: (value) => set({ sortingOrder: value }),
}));

export default useStore;
