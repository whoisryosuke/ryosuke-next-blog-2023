import {
  WorkCardData,
  WorkCardInitialData,
} from "@components/dom/PortfolioApp/types";
import work2023 from "./2023";
import work2024 from "./2024";

export type PortfolioContentRaw = Record<string, WorkCardInitialData[]>;
export type PortfolioContent = Record<string, WorkCardData[]>;

export const portfolio: PortfolioContentRaw = {
  2023: work2023,
  2024: work2024,
};
