import { css } from "styled-components";

export const borderShineEffect = () => css`
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
  box-shadow: inset 1px 1px 1px rgba(255, 255, 255, 0.2);
  pointer-events: none;
`;

export const inputBgStyles = () => css`
  background: ${({ theme }) => theme.colors.darkGlass.input};
  border-radius: ${
    //@ts-ignore
    ({ theme, borderRadius }) =>
      borderRadius ? theme.radius[borderRadius] : theme.radius.round
  };

  box-shadow:
    0px -1px 4px rgba(0, 0, 0, 0.25),
    1px 2px 1px rgba(255, 255, 255, 0.2),
    inset 4px 4px 4px rgba(0, 0, 0, 0.25);
`;
