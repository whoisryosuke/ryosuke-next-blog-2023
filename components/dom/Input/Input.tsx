import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styled from "styled-components";

const INPUT_HEIGHT = "42px";

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  style?: React.CSSProperties;
  icon?: React.ReactElement | boolean;
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

  &::placeholder { 
    color: ${({ theme }) => theme.colors.textOverlay};
    opacity: 0.8; /* Firefox */
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

const StyledContainer = styled("div")`
  width: 100%;
  display: flex;
  position: relative;
  background: ${({ theme }) => theme.colors.darkGlass.input};
  border-radius: ${({ theme }) => theme.radius.round};

  box-shadow:
    0px -1px 4px rgba(0, 0, 0, 0.25),
    1px 2px 1px rgba(255, 255, 255, 0.2),
    inset 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Input = ({ style, icon, ...props }: Props) => {
  return (
    <StyledContainer style={style}>
      {icon && <StyledIcon>{icon}</StyledIcon>}
      <StyledInput icon={icon ? true : false} {...props} />
    </StyledContainer>
  );
};

export default Input;
