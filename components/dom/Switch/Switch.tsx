import React from "react";
import Box from "../Box/Box";
import styled from "styled-components";
import { inputBgStyles } from "@theme/styles/glass";

const StyledSwitch = styled("input")`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 420;
`;
const SwitchButton = styled("span")`
  background: white;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  display: block;

  ${StyledSwitch}:checked ~ & {
    background: ${({ theme }) => theme.colors.primary.default};
    transform: translateX(28px);
  }

  /* Animation */
  @media (prefers-reduced-motion: no-preference) {
    transition-property: background, transform;
    transition-duration: 420ms;
  }
`;

const SwitchContainer = styled("div")`
  width: 56px;
  padding: ${({ theme }) => theme.space[1]};
  position: relative;

  ${inputBgStyles}
`;

type Props = {};

const Switch = (props: Props) => {
  return (
    <SwitchContainer>
      <StyledSwitch type="checkbox" role="switch" {...props} />
      <SwitchButton />
    </SwitchContainer>
  );
};

export default Switch;
