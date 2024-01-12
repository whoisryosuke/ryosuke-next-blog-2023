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
  display,
  DisplayProps,
} from "styled-system";
import { Theme } from "@theme/index";
import { borderShineEffect } from "@theme/styles/glass";
import { BREAKPOINTS } from "@theme/tokens";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  FlexboxProps &
  MarginProps &
  FontSizeProps &
  DisplayProps & {
    as?: React.ElementType;
    focused?: boolean;
    solid?: boolean;
    icon?: React.ReactElement;
    onlyIcon?: boolean;
    mobileIcon?: boolean;
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

  color: ${({ theme, color }) => color ?? theme.colors.text};

  /* For button links - button provides focus behavior */
  text-decoration: none;

  /* The "border" using a inset box shadow */
  &:after {
    /* Only show border if it's solid button or focused */
    ${({ solid }) => solid && borderShineEffect}
  }

  &:hover {
    background: ${({ theme }) => theme.colors.button.hovered};

    &:after {
      ${borderShineEffect}
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

  ${({ mobileIcon }) =>
    mobileIcon &&
    `
  @media (min-width: ${BREAKPOINTS.default}) {
    & .text {
      display:none;
    }
    & .icon {
      margin-right:0;
      line-height:0;
    }
  }
   @media (min-width: ${BREAKPOINTS.tablet}) {
    & .text {
      display:block;
    }
    & .icon {
      display:none;
    }
  }`}

  ${fontSize}
  ${flexbox}
  ${margin}
  ${display}
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
          className="icon"
          color={"inherit"}
          mr={onlyIcon ? 0 : 3}
          lineHeight={onlyIcon && 0}
        >
          {icon}
        </Text>
      )}
      <Text className="text" color="inherit" fontSize="inherit">
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
