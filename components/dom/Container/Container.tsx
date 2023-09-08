import React, { PropsWithChildren } from "react";
import Box from "../Box/Box";
import styled from "styled-components";
import {
  MODAL_OPEN_TRANSFORM,
  MODAL_CLOSED_TRANSFORM,
} from "@theme/styles/modal";

type Props = {
  modal: boolean;
};

const StyledContainer = styled(Box)<Props>`
  /* Modal support - pushes content "back"  */
  transform: ${({ theme, modal }) =>
    theme.modal && !modal ? MODAL_OPEN_TRANSFORM : MODAL_CLOSED_TRANSFORM};

  /* Animation */
  @media (prefers-reduced-motion: no-preference) {
    transition-property: transform;
    transition-duration: 710ms;
  }
`;

const Container = ({ children, ...props }: PropsWithChildren<Props>) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
