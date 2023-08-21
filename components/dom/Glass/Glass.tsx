import React from "react";
import styled from "styled-components";
import Box, { BoxProps } from "../Box/Box";
import { Theme } from "@theme/index";
import { motion } from "framer-motion";

type GlassProps = BoxProps & {
  transparent?: boolean;
  blur?: keyof Theme["blur"]["radius"];
  borderRadius?: keyof Theme["radius"];
  modal: boolean;
};

const Glass = styled(Box)<GlassProps>`
  position: relative;
  border-radius: ${({ theme, borderRadius }) =>
    borderRadius in theme.radius && theme.radius[borderRadius]};

  transform: translateZ(${({theme}) => theme.modal ? '-10px' : '0'});
    
  /* Animation */
  @media (prefers-reduced-motion: no-preference) {
    transition-property: transform;
    transition-duration: 710ms;
  }

  /* Border gradient - also an inset for extra "gloss effect" */
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -2;
    background: ${({ theme, transparent, modal }) => {
      let bgColor = !transparent && theme.colors.glass;
      if(theme.modal && !modal) bgColor = theme.colors.glassOverlay;
      return bgColor;
    }};
    backdrop-filter: blur(${({ theme, blur }) => theme.blur.radius[blur]});
    border-radius: inherit;
    border: 0.0625em solid rgba(255, 255, 255, 0.1);

    /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
    box-shadow: 0 2px 16px 0 rgba(10, 10, 14, 0.1);

    -webkit-mask-image: ${({ theme, blur, modal }) => `linear-gradient(
      270deg,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, ${theme.modal ? theme.blur.mask[2] : theme.blur.mask[blur]}) 100%
    )`};

    
    /* Animation */
    @media (prefers-reduced-motion: no-preference) {
      transition-property: background;
      transition-duration: 710ms;
    }
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px -1px 0 -1px;
    border-radius: inherit;
    background: ${({ theme }) => theme.colors.glass};
    box-shadow: inset 1px 1px 1px rgba(255, 255, 255, 0.35);
    pointer-events: none;

    /* --x: 77%;
        --offset: 50%;
        -webkit-mask-image: linear-gradient(to right,transparent calc(var(--x) - var(--offset)),#000 calc(var(--x) - var(--offset) / 2),#000 calc(var(--x) + var(--offset) / 2),transparent calc(var(--x) + var(--offset))),linear-gradient(to bottom,transparent 40px,#000 44px,#000 100%,transparent 100%),linear-gradient(to right,transparent 40px,#000 44px,#000 100%,transparent 100%);
         */
  }

`;

Glass.defaultProps = {
  blur: 1,
  borderRadius: 3,
};


export default Glass;
