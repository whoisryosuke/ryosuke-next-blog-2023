import React from "react";
import ScrollBox from "../ScrollBox/ScrollBox";
import { PortfolioNavigationProps, WorkCardData, WorkCardProps } from "./types";
import PortfolioGridItem from "./PortfolioGridItem";
import { motion } from "framer-motion";
import PortfolioTransition from "./PortfolioTransition";
import Stack from "../Stack/Stack";
import Grid from "../Grid/Grid";
import Glass from "../Glass/Glass";
import Box from "../Box/Box";
import Text from "../Text/Text";
import { H2, H3 } from "../Headline/Headers";
import { getImageThumbnail } from "@utils/image";

const GRID_GAP = "2px";
const HERO_IMG_HEIGHT = "60vh";

type Props = PortfolioNavigationProps & {
  category: string;
  work: WorkCardData[];
};

const PortfolioGridView = ({ work, category, handleNavigateWork }: Props) => {
  // 4 Photos on top
  const firstSet = work.slice(0, 4);
  const restWork = work.slice(4);

  return (
    <PortfolioTransition>
      <Glass position="relative">
        <ScrollBox
          position="relative"
          width={{ default: "100%", tablet: "calc(100% + 15px)" }}
          display="flex"
          flexDirection="column"
          height={"70vh"}
          p={0}
          // paddingRight={3}
          hideScrollbar
          borderRadius={4}
        >
          {work.length > 0 && (
            <Stack vertical gap={GRID_GAP}>
              <Stack gap={GRID_GAP}>
                {/* Big Image */}
                <PortfolioGridItem
                  {...firstSet[0]}
                  width={{ default: "100%", tablet: "67%" }}
                  height={HERO_IMG_HEIGHT}
                  handleNavigateWork={handleNavigateWork}
                />
                {/* 3 side images */}
                <Stack
                  vertical
                  width={{ mobile: "100%", tablet: "33.33%" }}
                  gap={GRID_GAP}
                >
                  <PortfolioGridItem
                    {...firstSet[1]}
                    height={`calc(${HERO_IMG_HEIGHT} * 0.6)`}
                    borderTopRight
                    handleNavigateWork={handleNavigateWork}
                  />
                  <Stack
                    height={`calc(${HERO_IMG_HEIGHT} * 0.4 - 8px)`}
                    gap={GRID_GAP}
                    responsive={false}
                  >
                    <PortfolioGridItem
                      {...firstSet[2]}
                      width="50%"
                      height={`calc(${HERO_IMG_HEIGHT} * 0.4 - ${GRID_GAP})`}
                      handleNavigateWork={handleNavigateWork}
                    />
                    <PortfolioGridItem
                      {...firstSet[3]}
                      width="50%"
                      height={`calc(${HERO_IMG_HEIGHT} * 0.4 - ${GRID_GAP})`}
                      handleNavigateWork={handleNavigateWork}
                    />
                  </Stack>
                </Stack>
              </Stack>
              {/* Grid underneath */}
              <Grid cols={6} columnGap={1} rowGap={1}>
                {restWork.map((workItem) => {
                  const filename = getImageThumbnail(workItem.src);
                  return (
                    <PortfolioGridItem
                      key={workItem.id}
                      {...workItem}
                      src={filename}
                      height="150px"
                      handleNavigateWork={handleNavigateWork}
                    />
                  );
                })}
              </Grid>
            </Stack>
          )}

          <Box position="absolute" top={0} left={0} p={6}>
            <H2 marginBottom={1} marginTop={0}>
              {work.length > 0
                ? category
                : `No ${category.toLowerCase()} work found`}
            </H2>
            <Text fontSize={0} lineHeight={1} opacity="0.5">
              {work.length > 0
                ? `${work.length} projects`
                : "Try another filter"}
            </Text>
          </Box>
        </ScrollBox>
      </Glass>
    </PortfolioTransition>
  );
};

export default PortfolioGridView;
