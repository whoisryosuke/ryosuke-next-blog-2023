import { create } from "zustand";

export type TOCItem = {
  title: string;
  slug: string;
  level: number;
};

interface BlogState {
  title: string;
  slug: string;
  setTitle: (title: string) => void;
  setSlug: (slug: string) => void;
  tableOfContents: TOCItem[];
  setTableOfContents: (toc: TOCItem[]) => void;
  resetTableOfContents: () => void;
  addTOCItem: (toc: TOCItem) => void;
}

export const useBlogStore = create<BlogState>()((set) => ({
  title: "",
  slug: "",
  setTitle: (title) => set((state) => ({ title })),
  setSlug: (slug) => set((state) => ({ slug })),
  tableOfContents: [],
  setTableOfContents: (tableOfContents) =>
    set((state) => ({ tableOfContents })),
  resetTableOfContents: () => set((state) => ({ tableOfContents: [] })),
  addTOCItem: (tocItem) =>
    set((state) => ({ tableOfContents: [...state.tableOfContents, tocItem] })),
}));
