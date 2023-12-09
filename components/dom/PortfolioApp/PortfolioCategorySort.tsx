import React from "react";
import { PortfolioCategories, PortfolioCategoryMap } from "./types";
import Button from "../Button/Button";
import Box from "../Box/Box";
import Stack from "../Stack/Stack";
import Glass from "../Glass/Glass";
import {
  BiCube,
  BiFolder,
  BiGame,
  BiPaint,
  BiPhone,
  BiPhotoAlbum,
} from "react-icons/bi";

const CATEGORY_ICONS: Record<PortfolioCategories, any> = {
  "3D": <BiCube />,
  "Web Dev": <BiPhone />,
  "Game Dev": <BiGame />,
  Design: <BiPhotoAlbum />,
  Illustration: <BiPaint />,
  "All work": <BiFolder />,
};

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
              icon={CATEGORY_ICONS[categoryName]}
              mobileIcon
              title={categoryName}
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
