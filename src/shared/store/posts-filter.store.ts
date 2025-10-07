import { create } from "zustand";

export enum SortOrder {
  TitleAsc = "title-asc",
  TitleDesc = "title-desc",
  IdAsc = "id-asc",
  IdDesc = "id-desc",
}

interface PostsFilterState {
  sortOrder: SortOrder;
  setSortOrder: (value: SortOrder) => void;
}

const usePostsFilterStore = create<PostsFilterState>((set) => ({
  sortOrder: SortOrder.TitleAsc,
  setSortOrder: (value) => set({ sortOrder: value }),
}));

export default usePostsFilterStore;
