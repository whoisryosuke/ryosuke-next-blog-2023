import React, { PropsWithChildren, forwardRef, useEffect, useRef } from "react";
import { styled } from "styled-components";
import Box, { BoxProps } from "../Box/Box";
import { Theme } from "@theme/index";
import { ScrollbarProps, scrollbarStyles } from "@theme/styles/scrollbar";

type Props = ScrollbarProps &
  BoxProps & {
    borderRadius?: keyof Theme["radius"];
  };

const StyledScrollBox = styled(Box)<Props>`
  overflow-y: overlay;
  overflow-x: hidden;
  border-radius: ${({ theme, borderRadius }) =>
    borderRadius ? theme.radius[borderRadius] : theme.radius[0]};

  ${scrollbarStyles}

  -webkit-mask-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 15%
  );
`;

const ScrollBox = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  ({ children, ...props }, ref) => {
    return (
      <StyledScrollBox ref={ref} {...props}>
        {children}
      </StyledScrollBox>
    );
  }
);

export default ScrollBox;
