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
