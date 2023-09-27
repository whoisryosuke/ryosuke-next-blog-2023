import { create } from "zustand";

export type TOCItem = {
  title: string;
  slug: string;
};

interface BlogState {
  title: string;
  setTitle: (title: string) => void;
  tableOfContents: TOCItem[];
  setTableOfContents: (toc: TOCItem[]) => void;
  addTOCItem: (toc: TOCItem) => void;
}

export const useBlogStore = create<BlogState>()((set) => ({
  title: "",
  setTitle: (title) => set((state) => ({ title })),
  tableOfContents: [],
  setTableOfContents: (tableOfContents) =>
    set((state) => ({ tableOfContents })),
  addTOCItem: (tocItem) =>
    set((state) => ({ tableOfContents: [...state.tableOfContents, tocItem] })),
}));
