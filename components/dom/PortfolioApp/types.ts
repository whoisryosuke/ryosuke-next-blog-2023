import { CSSProperties } from "react";

type VideoSource = {
  src: string;
  width: CSSProperties["width"];
  height: CSSProperties["height"];
};

// Category system
export type PortfolioCategories =
  | "3D"
  | "Web Dev"
  | "Game Dev"
  | "Design"
  | "Illustration"
  | "All work";
export const PortfolioCategoryMap: PortfolioCategories[] = [
  "3D",
  "Web Dev",
  "Game Dev",
  "Design",
  // "Illustration",
  "All work",
];

// Portfolio data after it gets an ID.
// This happens after the first load (or statically on backend ideally)
export type WorkCardData = {
  id: number;
  src?: string;
  video?: VideoSource;
  title: string;
  date: string;
  prototype?: string;
  category: PortfolioCategories[];
};

// Portfolio data before it gets an ID attached to it.
// This is where portfolio data starts.
export type WorkCardInitialData = Omit<WorkCardData, "id">;

// Portfolio data after the date is converted
// This is data that gets passed to components
export type WorkCardProps = Omit<WorkCardData, "date"> & {
  date: Date;
};

// Props shared between "mini-apps" on the portfolio page
export type PortfolioNavigationProps = {
  handleNavigateWork: (index: number) => void;
};
