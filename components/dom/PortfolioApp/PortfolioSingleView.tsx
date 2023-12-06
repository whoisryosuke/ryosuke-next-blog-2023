import React from "react";
import format from "date-fns/format";
import { PortfolioNavigationProps, WorkCardData, WorkCardProps } from "./types";
import PortfolioGridItem from "./PortfolioGridItem";
import PortfolioTransition from "./PortfolioTransition";
import Box from "../Box/Box";
import PortfolioThumbnailSlider from "./PortfolioThumbnailSlider";
import { BiArrowBack } from "react-icons/bi";
import Button from "../Button/Button";
import styled from "styled-components";
import { motion } from "framer-motion";
import { H3 } from "../Headline/Headers";
import Text from "../Text/Text";
import Video from "../Video/Video";
import PortfolioSingleVideo from "./PortfolioSingleVideo";
import PortfolioSingleTitle from "./PortfolioSingleTitle";

const PortfolioSingleImageContainer = styled(Box)`
  & .navigation,
  & .metadata {
    opacity: 0;
  }
  &:hover .navigation,
  &:hover .metadata {
    opacity: 1;
  }

  & .navigation,
  & .metadata {
    /* Animation */
    @media (prefers-reduced-motion: no-preference) {
      transition-property: opacity;
      transition-duration: 420ms;
    }
  }
`;

type Props = PortfolioNavigationProps & {
  current: number;
  work: WorkCardData[];
  handleBackToGrid: () => void;
};

const PortfolioSingleView = ({
  work,
  current,
  handleNavigateWork,
  handleBackToGrid,
}: Props) => {
  const currentWork = work.find((workItem) => current == workItem.id);
  return (
    <PortfolioTransition>
      <PortfolioSingleImageContainer
        width="60vh"
        height="60vh"
        maxHeight="60vh"
        position="relative"
        margin="auto"
      >
        {!currentWork.video && (
          <>
            <img
              id={currentWork.id}
              src={currentWork.src}
              width="60vh"
              height="60vh"
              style={{
                width: "100%",
                minHeight: "60vh",
                maxHeight: "60vh",
                borderRadius: "21px",
                objectFit: "cover",
              }}
            />
            {/* Image Metadata */}
            <Box
              className="metadata"
              position="absolute"
              padding={5}
              bottom={0}
              left={0}
            >
              <PortfolioSingleTitle work={currentWork} />
              {/* Video Player TBD */}
            </Box>
          </>
        )}
        {currentWork.video && <PortfolioSingleVideo work={currentWork} />}

        {/* Image Navigation */}
        <Box
          className="navigation"
          position="absolute"
          padding={5}
          top={0}
          left={0}
        >
          <Button
            title="Back to image gallery"
            icon={<BiArrowBack />}
            onlyIcon
            onClick={handleBackToGrid}
          />
        </Box>
      </PortfolioSingleImageContainer>
      <PortfolioThumbnailSlider
        width="60vh"
        work={work}
        current={current}
        handleNavigateWork={handleNavigateWork}
      />
    </PortfolioTransition>
  );
};

export default PortfolioSingleView;
