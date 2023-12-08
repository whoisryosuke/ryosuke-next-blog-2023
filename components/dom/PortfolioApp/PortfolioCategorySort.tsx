import React from "react";
import { PortfolioCategories, PortfolioCategoryMap } from "./types";
import Button from "../Button/Button";
import Box from "../Box/Box";
import Stack from "../Stack/Stack";
import Glass from "../Glass/Glass";

type Props = {
  currentCategory: PortfolioCategories;
  sortPortfolioByCategory: (category: PortfolioCategories) => void;
};

const PortfolioCategorySort = ({
  currentCategory,
  sortPortfolioByCategory,
}: Props) => {
  return (
    <Box marginTop={-4} style={{ textAlign: "center" }}>
      <Glass display="inline-block" p={3} borderRadius="round">
        <Stack responsive={false}>
          {PortfolioCategoryMap.map((categoryName) => (
            <Button
              fontSize={1}
              solid={currentCategory == categoryName}
              onClick={() => sortPortfolioByCategory(categoryName)}
            >
              {categoryName}
            </Button>
          ))}
        </Stack>
      </Glass>
    </Box>
  );
};

export default PortfolioCategorySort;
