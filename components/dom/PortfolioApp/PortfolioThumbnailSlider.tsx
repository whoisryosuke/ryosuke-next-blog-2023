import React from "react";
import { PortfolioNavigationProps, WorkCardData } from "./types";
import PortfolioThumbnailItem from "./PortfolioThumbnailItem";
import Box from "../Box/Box";
import styled from "styled-components";
import { scrollbarStyles } from "@theme/styles/scrollbar";

const PortfolioThumbnailSliderContainer = styled(Box)`
  overflow-y: auto;

  ${scrollbarStyles}

  -webkit-mask-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 15%,
    rgba(0, 0, 0, 1) 85%,
    rgba(0, 0, 0, 0) 100%
  );
`;

type Props = PortfolioNavigationProps & {
  width: string;
  current: number;
  work: WorkCardData[];
};

const PortfolioThumbnailSlider = ({
  width,
  current,
  work,
  handleNavigateWork,
}: Props) => {
  return (
    <PortfolioThumbnailSliderContainer
      width={width}
      display="flex"
      margin="auto"
      marginTop={4}
    >
      {work.map((workItem) => (
        <PortfolioThumbnailItem
          item={workItem}
          selected={current === workItem.id}
          handleNavigateWork={handleNavigateWork}
        />
      ))}
    </PortfolioThumbnailSliderContainer>
  );
};

export default PortfolioThumbnailSlider;
