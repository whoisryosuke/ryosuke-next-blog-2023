import {
  linkColorPrimaryStyles,
  linkInlineStyles,
  linkStyles,
  linkPlainStyles,
} from "./Link.css";
import clsx from "clsx";
import { AnchorHTMLAttributes } from "react";
import Text, { TextProps } from "../Text/Text";
import { Box } from "../Box/Box";

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  TextProps<"a"> & {
    children: React.ReactNode;
    textClass?: string;
    ghost?: boolean;
    underline?: boolean;
    color?: "primary";
  };

export function Link({
  children,
  className,
  textClass,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  ghost = false,
  underline = true,
  color,
  ...props
}: LinkProps) {
  const ghostStyles = ghost && linkInlineStyles;
  const colorStyles = color === "primary" && linkColorPrimaryStyles;
  const underlineStyles = !underline && linkPlainStyles;
  return (
    <a
      className={clsx(linkStyles, className, ghostStyles, underlineStyles)}
      {...props}
    >
      <Text
        as="span"
        className={clsx(textClass, colorStyles)}
        style={{ marginBottom: 0 }}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
      >
        {children}
      </Text>
    </a>
  );
}

export default Link;
