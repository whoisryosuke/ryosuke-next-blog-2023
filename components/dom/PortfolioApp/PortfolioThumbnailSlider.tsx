import React, { useRef } from "react";
import { PortfolioNavigationProps, WorkCardData } from "./types";
import PortfolioThumbnailItem from "./PortfolioThumbnailItem";
import Box, { BoxProps } from "../Box/Box";
import styled from "styled-components";
import { ScrollbarProps, scrollbarStyles } from "@theme/styles/scrollbar";

type PortfolioThumbnailSliderContainerProps = ScrollbarProps & BoxProps;
const PortfolioThumbnailSliderContainer = styled(
  Box
)<PortfolioThumbnailSliderContainerProps>`
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

type Props = PortfolioNavigationProps &
  BoxProps & {
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
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = (x: number, y: number) => {
    const containerPosition = ref.current.getBoundingClientRect();

    const relativePosition = {
      x: x - containerPosition.left,
      y: y - containerPosition.top,
    };

    ref.current.scrollTo({
      left: relativePosition.x,
      top: relativePosition.y,
      behavior: "smooth",
    });
  };

  return (
    <PortfolioThumbnailSliderContainer
      ref={ref}
      width={width}
      display="flex"
      margin="auto"
      marginTop={4}
      paddingLeft={3}
      hideScrollbar
    >
      {work.map((workItem) => (
        <PortfolioThumbnailItem
          item={workItem}
          selected={current === workItem.id}
          handleNavigateWork={handleNavigateWork}
          handleScroll={handleScroll}
        />
      ))}
    </PortfolioThumbnailSliderContainer>
  );
};

export default PortfolioThumbnailSlider;
