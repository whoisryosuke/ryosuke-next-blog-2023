import React from "react";
import { WorkCardData, WorkCardProps } from "./types";
import PortfolioGridItem from "./PortfolioGridItem";
import PortfolioTransition from "./PortfolioTransition";

type Props = {
  current: number;
  work: WorkCardData[];
};

const PortfolioSingleView = ({ work, current }: Props) => {
  const currentWork = work[current];
  return (
    <PortfolioTransition>
      <PortfolioGridItem
        {...currentWork}
        date={new Date(Date.parse(currentWork.date))}
      />
    </PortfolioTransition>
  );
};

export default PortfolioSingleView;
