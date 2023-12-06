import { WorkCardInitialData } from "@components/dom/PortfolioApp/types";
import work2023 from "./2023";

export type PortfolioContent = Record<string, WorkCardInitialData[]>;

export const portfolio: PortfolioContent = {
  2023: work2023,
};
