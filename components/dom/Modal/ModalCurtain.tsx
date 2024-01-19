import { BREAKPOINTS } from "@theme/tokens";
import React from "react";
import styled from "styled-components";

const StyledModalCurtain = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;

  // Blackout curtain for mobile for readability
  @media (min-width: ${BREAKPOINTS.default}) {
    background: rgba(0, 0, 0, 0.4);
  }
  // Blackout curtain for mobile for readability
  @media (min-width: ${BREAKPOINTS.tablet}) {
    background: rgba(0, 0, 0, 0);
  }

  /* Animation */
  @media (prefers-reduced-motion: no-preference) {
    transition-property: background;
    transition-duration: 710ms;
  }
`;

type Props = {
  onClose: () => void;
};

const ModalCurtain = ({ onClose }: Props) => {
  return <StyledModalCurtain onClick={onClose} />;
};

export default ModalCurtain;
