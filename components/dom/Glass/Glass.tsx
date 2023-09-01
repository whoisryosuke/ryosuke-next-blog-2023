import React from "react";
import styled, { css } from "styled-components";
import Box, { BoxProps } from "../Box/Box";
import { Theme } from "@theme/index";
import { motion } from "framer-motion";
import { borderShineEffect } from "@theme/styles/glass";

type GlassProps = BoxProps & {
  transparent?: boolean;
  blur?: keyof Theme["blur"]["radius"];
  borderRadius?: keyof Theme["radius"];
  modal?: boolean;
};

const Glass = styled(Box)<GlassProps>`
  position: relative;
  border-radius: ${({ theme, borderRadius }) =>
    borderRadius in theme.radius && theme.radius[borderRadius]};

  /* Modal support - pushes content "back"  */
  transform: translateZ(
    ${({ theme, modal }) => (theme.modal && !modal ? "-30px" : "0")}
  );

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
      if (theme.modal && !modal) bgColor = theme.colors.glassOverlay;
      return bgColor;
    }};
    backdrop-filter: blur(
      ${({ theme, blur }) =>
        theme.modal ? theme.blur.radius[4] : theme.blur.radius[blur]}
    );
    border-radius: inherit;
    border: 0.0625em solid rgba(255, 255, 255, 0.1);

    /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
    box-shadow: 0 2px 16px 0 rgba(10, 10, 14, 0.1);

    -webkit-mask-image: ${({ theme, blur, modal }) => `linear-gradient(
      270deg,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, ${
        theme.modal && !modal ? theme.blur.mask[2] : theme.blur.mask[blur]
      }) 100%
    )`};

    /* Animation */
    @media (prefers-reduced-motion: no-preference) {
      transition-property: background;
      transition-duration: 710ms;
    }
  }
`;

Glass.defaultProps = {
  blur: 1,
  borderRadius: 3,
};

export default Glass;
