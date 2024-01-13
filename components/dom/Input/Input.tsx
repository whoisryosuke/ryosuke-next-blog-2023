import { Theme } from "@theme/index";
import { inputBgStyles } from "@theme/styles/glass";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styled from "styled-components";

const INPUT_HEIGHT = "42px";

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  as?: any;
  style?: React.CSSProperties;
  icon?: React.ReactElement | boolean;
  borderRadius?: keyof Theme["radius"];
};

const StyledInput = styled("input")<Props>`
  -webkit-appearance: none;
  background: transparent;
  width: 100%;
  height: ${INPUT_HEIGHT};
  border: 0;
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[4]}`};
  padding-left: ${({ theme, icon }) => icon && theme.space[7]};

  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights[2]};
  font-family: ${({ theme }) => theme.fonts.body};

  text-align: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textOverlay};
    opacity: 0.8; /* Firefox */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px 4px rgba(255, 255, 255, 0.3);
    border-radius: ${({ theme, borderRadius }) =>
      borderRadius ? theme.radius[borderRadius] : theme.radius.round};
  }
`;

const StyledIcon = styled("div")`
  position: absolute;
  top: 12px;
  left: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.darkGlass.focused};

  & > svg {
    width: 24px;
    height: 24px;
  }
`;

const StyledContainer = styled("div")<Props>`
  width: 100%;
  display: flex;
  position: relative;

  ${inputBgStyles}
`;

const Input = ({ style, icon, borderRadius, ...props }: Props) => {
  return (
    <StyledContainer style={style} borderRadius={borderRadius}>
      {icon && <StyledIcon>{icon}</StyledIcon>}
      <StyledInput
        borderRadius={borderRadius}
        icon={icon ? true : false}
        {...props}
      />
    </StyledContainer>
  );
};

export default Input;
