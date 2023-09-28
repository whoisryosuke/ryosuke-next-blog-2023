import React, { PropsWithChildren, forwardRef, useEffect, useRef } from "react";
import { styled } from "styled-components";
import Box, { BoxProps } from "../Box/Box";
import { Theme } from "@theme/index";

type Props = BoxProps & {
  borderRadius?: keyof Theme["radius"];
};

const StyledScrollBox = styled(Box)<Props>`
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: ${({ theme, borderRadius }) =>
    borderRadius ? theme.radius[borderRadius] : theme.radius[0]};

  scrollbar-color: #999 #333;

  &::-webkit-scrollbar {
    width: 15px; /* for vertical scrollbars */
    height: 15px; /* for horizontal scrollbars */
  }
  /* Scroll bar "thumb" */
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: ${({ theme }) => theme.radius[0]};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  &::-webkit-scrollbar-thumb:active {
    background: ${({ theme }) => theme.colors.glassOverlay};
  }
  /* Background styling */
  &::-webkit-scrollbar-track {
  }
  &::-webkit-scrollbar-track:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const ScrollBox = forwardRef<PropsWithChildren<Props>, HTMLDivElement>(
  ({ children, ...props }, ref) => {
    return (
      <StyledScrollBox ref={ref} {...props}>
        {children}
      </StyledScrollBox>
    );
  }
);

export default ScrollBox;
