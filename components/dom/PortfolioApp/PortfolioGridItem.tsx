import React from "react";
import Image from "../Image/Image";
import { PortfolioNavigationProps, WorkCardData, WorkCardProps } from "./types";
import Box, { BoxProps } from "../Box/Box";
import styled from "styled-components";

const PortfolioGridItemContainer = styled(Box)`
  & > .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      ellipse at center,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.8) 48%,
      rgba(255, 255, 255, 1) 100%
    );
    opacity: 0;

    /* Animation */
    @media (prefers-reduced-motion: no-preference) {
      transition-property: opacity;
      transition-duration: 420ms;
    }
  }

  &:hover > .overlay,
  &:focus > .overlay {
    opacity: 0.2;
  }
`;

type Props = PortfolioNavigationProps &
  WorkCardData &
  BoxProps & {
    id: number;
    borderTopRight?: boolean;
    borderRadius?: string;
    height?: string;
    maxHeight?: string;
  };

const PortfolioGridItem = ({
  src,
  //   video,
  title,
  date,
  //   prototype,
  id,
  handleNavigateWork,
  borderTopRight,
  borderRadius,
  ...props
}: Props) => {
  const handleClick = () => {
    handleNavigateWork(id);
  };

  return (
    <PortfolioGridItemContainer
      onClick={handleClick}
      {...props}
      position="relative"
    >
      <div className="overlay" />
      {src && (
        <img
          src={src}
          style={{
            width: "100%",
            height: props?.height ?? "auto",
            maxHeight: props?.maxHeight ?? "",
            objectFit: "cover",
            margin: 0,
            borderTopRightRadius: borderTopRight ? "21px" : "",
            borderRadius: borderRadius ?? "",
          }}
        />
      )}
    </PortfolioGridItemContainer>
  );
};

export default PortfolioGridItem;
