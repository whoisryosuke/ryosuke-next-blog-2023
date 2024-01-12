import React, { useEffect, useState } from "react";
import {
  PortfolioCategories,
  PortfolioCategoryMap,
  WorkCardData,
  WorkCardInitialData,
  WorkCardProps,
} from "./types";
import PortfolioGridView from "./PortfolioGridView";
import Box from "../Box/Box";
import { AnimatePresence } from "framer-motion";
import PortfolioSingleView from "./PortfolioSingleView";
import Glass from "../Glass/Glass";
import { PortfolioContent } from "content/portfolio/portfolio";
import PortfolioCategorySort from "./PortfolioCategorySort";
import Head from "../Head/Head";

const condensePortfolio = (work: PortfolioContent) => {
  return Object.values(work).reduce((merge, workItems) => {
    return (merge = [...merge, ...workItems]);
  }, []);
};

const categoryPortfolio = (
  work: WorkCardData[],
  category: PortfolioCategories
) => {
  return work.filter((item) =>
    item.category.find((itemCategory) => itemCategory === category)
  );
};

type Props = {
  work: PortfolioContent;
};

const PortfolioApp = ({ work }: Props) => {
  const [showSingleView, setShowSingleView] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [sortedWork, setSortedWork] = useState(condensePortfolio(work));
  const [currentCategory, setCurrentCategory] = useState<PortfolioCategories>(
    PortfolioCategoryMap[PortfolioCategoryMap.length - 1]
  );

  const handleNavigateWork = (workId: number) => {
    setShowSingleView(true);
    setCurrentId(workId);
  };

  const handleBackToGrid = () => {
    setShowSingleView(false);
  };

  const sortPortfolioByCategory = (category: PortfolioCategories) => {
    setCurrentCategory(category);
  };

  useEffect(() => {
    const freshWork = condensePortfolio(work);
    if (currentCategory == "All work") {
      setSortedWork(freshWork);
    } else {
      setSortedWork(categoryPortfolio(freshWork, currentCategory));
    }
  }, [currentCategory]);

  const currentWork = sortedWork.find((workItem) => currentId == workItem.id);
  const currentWorkTitle = currentWork?.title ? currentWork?.title : "";

  return (
    <Box maxWidth="80vw" margin="auto" mt={8} p={0} position="relative">
      <Head
        title={
          showSingleView
            ? `${currentWorkTitle} | Ryosuke`
            : `${currentCategory} Portfolio | Ryosuke`
        }
      />
      <AnimatePresence>
        {!showSingleView && (
          <>
            <PortfolioGridView
              category={currentCategory}
              work={sortedWork}
              handleNavigateWork={handleNavigateWork}
            />
            {/* <PortfolioCategorySort
              currentCategory={currentCategory}
              sortPortfolioByCategory={sortPortfolioByCategory}
            /> */}
          </>
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
