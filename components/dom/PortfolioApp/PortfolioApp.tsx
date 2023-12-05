import React, { useState } from "react";
import { WorkCardData, WorkCardProps } from "./types";
import PortfolioGridView from "./PortfolioGridView";
import Box from "../Box/Box";
import { AnimatePresence } from "framer-motion";
import PortfolioSingleView from "./PortfolioSingleView";
import Glass from "../Glass/Glass";

type Props = {
  work: WorkCardData[];
};

const PortfolioApp = ({ work }: Props) => {
  const [showSingleView, setShowSingleView] = useState(false);
  const [currentId, setCurrentId] = useState(0);

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
            work={work}
            handleNavigateWork={handleNavigateWork}
          />
        )}
        {showSingleView && (
          <PortfolioSingleView
            work={work}
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
