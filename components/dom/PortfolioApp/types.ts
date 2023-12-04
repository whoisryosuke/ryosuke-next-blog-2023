import { CSSProperties } from "react";

type VideoSource = {
  src: string;
  width: CSSProperties["width"];
  height: CSSProperties["height"];
};

export type WorkCardData = {
  id: number;
  src?: string;
  video?: VideoSource;
  title: string;
  date: string;
  prototype?: string;
};

export type WorkCardProps = Omit<WorkCardData, "date"> & {
  date: Date;
};

export type PortfolioNavigationProps = {
  handleNavigateWork: (index: number) => void;
};
