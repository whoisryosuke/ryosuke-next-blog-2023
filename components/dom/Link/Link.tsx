import { PropsWithChildren } from "react";
import Text, { TextProps } from "../Text/Text";
import styled from "styled-components";

const StyledLink = styled("a")`
  display: inline-block;
  position:relative;
  color: ${({ theme }) => theme.colors.primary.pressed};
  text-decoration: none;
  transition: "color 400ms linear",

  margin-left: ${({ theme }) => theme.space[1]};
  margin-right: ${({ theme }) => theme.space[1]};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.default};
  }

  &:after {
    content: "";
    width: 100%;
    height: 3px;
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    background: ${({ theme }) => theme.gradients.blue.default};
    transition: background 400ms linear, transform 400ms linear;
    transform: translateY(-4px);
  }
  
  &:hover:after {
    background: ${({ theme }) => theme.gradients.blue.hover};
    transform: translateY(-6px);
  }

`;

export type LinkProps = TextProps & {
  ghost?: boolean;
  underline?: boolean;
  color?: "primary";
};

export function Link({
  children,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  ghost = false,
  underline = true,
  color,
  ...props
}: PropsWithChildren<LinkProps>) {
  return (
    <StyledLink {...props}>
      <Text
        as="span"
        style={{ marginBottom: 0 }}
        color="inherit"
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight ?? "bold"}
        lineHeight={lineHeight}
      >
        {children}
      </Text>
    </StyledLink>
  );
}

Link.defaultProps = {
  lineHeight: 5,
};

export default Link;
