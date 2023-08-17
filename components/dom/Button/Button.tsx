import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";
import styled, { css } from "styled-components";
import Text from "../Text/Text";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  focused?: boolean;
  solid?: boolean;
  icon?: boolean;
  iconSize?: {
    width: React.CSSProperties["width"];
    height: React.CSSProperties["height"];
  };
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
  background: ${({ theme, solid }) =>
    solid ? theme.colors.glass : "transparent"};
  border-radius: ${({ icon, theme }) =>
    icon ? theme.radius.round : theme.radius.default};
  border: 0;
  padding: ${({ theme, icon }) =>
    icon ? theme.space[3] : `${theme.space[3]} ${theme.space[4]}`};

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
`;

const Button = ({ children, ...props }: PropsWithChildren<ButtonProps>) => {
  const { ref, focused } = useFocusable();
  return (
    <StyledButton ref={ref} solid={focused} {...props}>
      <Text color="textInverted">{children}</Text>
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
