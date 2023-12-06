import React, { useState } from "react";
import { WorkCardData, WorkCardProps } from "./types";
import PortfolioGridView from "./PortfolioGridView";
import Box from "../Box/Box";
import { AnimatePresence } from "framer-motion";
import PortfolioSingleView from "./PortfolioSingleView";
import Glass from "../Glass/Glass";
import { PortfolioContent } from "content/portfolio/portfolio";

const condensePortfolio = (work: PortfolioContent) => {
  return Object.values(work).reduce((merge, workItems) => {
    return (merge = [...merge, ...workItems]);
  }, []);
};

type Props = {
  work: PortfolioContent;
};

const PortfolioApp = ({ work }: Props) => {
  const [showSingleView, setShowSingleView] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [sortedWork, setSortedWork] = useState(condensePortfolio(work));

  const handleNavigateWork = (workId: number) => {
    setShowSingleView(true);
    setCurrentId(workId);
  };

  const handleBackToGrid = () => {
    setShowSingleView(false);
  };

  return (
    <Box maxWidth="80vw" margin="auto" mt={8} p={0} position="relative">
      <AnimatePresence>
        {!showSingleView && (
          <PortfolioGridView
            work={sortedWork}
            handleNavigateWork={handleNavigateWork}
          />
        )}
        {showSingleView && (
          <PortfolioSingleView
            work={sortedWork}
            current={currentId}
            handleNavigateWork={handleNavigateWork}
            handleBackToGrid={handleBackToGrid}
          />
        )}
      </AnimatePresence>
    </Box>
  );
};

export default PortfolioApp;
