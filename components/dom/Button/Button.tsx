import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";
import styled, { css } from "styled-components";
import Text from "../Text/Text";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { BorderRadiusProps, FlexProps, FlexboxProps, borderRadius, flex, flexbox } from "styled-system";
import { Theme } from "@theme/index";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & FlexboxProps & {
  focused?: boolean;
  solid?: boolean;
  icon?: React.ReactElement;
  onlyIcon?: boolean;
  iconSize?: {
    width: React.CSSProperties["width"];
    height: React.CSSProperties["height"];
  };
  borderRadius?: keyof Theme['radius'];
};

const borderStyles = () => css<ButtonProps>`
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
`;

const StyledButton = styled("button")<ButtonProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme, solid }) =>
    solid ? theme.colors.glass : "transparent"};
  border-radius: ${({ onlyIcon, theme, borderRadius }) => {
    let radius = onlyIcon ? theme.radius.round : theme.radius.default;
    if(borderRadius) radius = theme.radius[borderRadius];
    return radius
  }};
  border: 0;
  padding: ${({ theme, onlyIcon }) =>
    onlyIcon ? theme.space[3] : `${theme.space[3]} ${theme.space[4]}`};

  color: ${({ theme }) => theme.colors.text};

  /* The "border" using a inset box shadow */
  &:after {
    /* Only show border if it's solid button or focused */
    ${({ solid }) => solid && borderStyles}
  }

  &:hover {
    background: ${({ theme }) => theme.colors.button.hovered};

    &:after {
      ${borderStyles}
    }
  }

  &:active {
    background: ${({ theme }) => theme.colors.button.pressed};
    color: ${({ theme }) => theme.colors.button.pressedText};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px 4px rgba(255, 255, 255, 0.3);
  }

  ${({ focused, theme }) =>
    focused &&
    `
    background: ${theme.colors.glass};
  `}

  /* Icon */
  & svg:first-child {
    width: ${({ iconSize }) => iconSize.width};
    height: ${({ iconSize }) => iconSize.height};
  }

  /* Animation */
  @media (prefers-reduced-motion: no-preference) {
    transition-property: box-shadow, color;
    transition-duration: 420ms;
  }

  ${flexbox}
`;

const Button = ({ children, icon, onlyIcon, ...props }: PropsWithChildren<ButtonProps>) => {
  const { ref, focused } = useFocusable();
  return (
    <StyledButton ref={ref} solid={focused} onlyIcon={onlyIcon} {...props}>
      {icon && <Text color={onlyIcon ? "inherit" : "textOverlay"} mr={onlyIcon ? 0 : 3}>{icon}</Text>}
      <Text color="inherit">{children}</Text>
    </StyledButton>
  );
};

Button.defaultProps = {
  iconSize: {
    width: "24px",
    height: "24px",
  },
};

export default Button;
