import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";
import styled, { css } from "styled-components";
import Text from "../Text/Text";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import {
  BorderRadiusProps,
  FlexProps,
  FlexboxProps,
  MarginProps,
  FontSizeProps,
  borderRadius,
  flex,
  flexbox,
  fontSize,
  margin,
} from "styled-system";
import { Theme } from "@theme/index";
import { borderShineEffect } from "@theme/styles/glass";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  FlexboxProps &
  MarginProps &
  FontSizeProps & {
    focused?: boolean;
    solid?: boolean;
    icon?: React.ReactElement;
    onlyIcon?: boolean;
    iconSize?: {
      width: React.CSSProperties["width"];
      height: React.CSSProperties["height"];
    };
    borderRadius?: keyof Theme["radius"];
  };

const StyledButton = styled("button")<ButtonProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme, solid }) =>
    solid ? theme.colors.glass : "transparent"};
  border-radius: ${({ onlyIcon, theme, borderRadius }) => {
    let radius = onlyIcon ? theme.radius.round : theme.radius.default;
    if (borderRadius) radius = theme.radius[borderRadius];
    return radius;
  }};
  border: 0;
  padding: ${({ theme, onlyIcon }) =>
    onlyIcon
      ? `calc(${theme.space[3]} + 2px)`
      : `${theme.space[3]} ${theme.space[4]}`};

  color: ${({ theme }) => theme.colors.text};

  /* For button links - button provides focus behavior */
  text-decoration: none;

  /* The "border" using a inset box shadow */
  &:after {
    /* Only show border if it's solid button or focused */
    ${({ solid }) => solid && borderShineEffect}
  }

  &:hover:enabled {
    background: ${({ theme }) => theme.colors.button.hovered};

    &:after {
      ${borderShineEffect}
    }
  }

  &:active:enabled {
    background: ${({ theme }) => theme.colors.button.pressed};
    color: ${({ theme }) => theme.colors.button.pressedText};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px 4px rgba(255, 255, 255, 0.3);
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.button.disabledText};
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

  ${fontSize}
  ${flexbox}
  ${margin}
`;

const Button = ({
  children,
  icon,
  onlyIcon,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const { ref, focused } = useFocusable();
  return (
    <StyledButton ref={ref} solid={focused} onlyIcon={onlyIcon} {...props}>
      {icon && (
        <Text
          color={"inherit"}
          mr={onlyIcon ? 0 : 3}
          lineHeight={onlyIcon && 0}
        >
          {icon}
        </Text>
      )}
      <Text color="inherit" fontSize="inherit">
        {children}
      </Text>
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
