import {
  WorkCardData,
  WorkCardInitialData,
} from "@components/dom/PortfolioApp/types";
import work2023 from "./2023";

export type PortfolioContentRaw = Record<string, WorkCardInitialData[]>;
export type PortfolioContent = Record<string, WorkCardData[]>;

export const portfolio: PortfolioContentRaw = {
  2023: work2023,
};
