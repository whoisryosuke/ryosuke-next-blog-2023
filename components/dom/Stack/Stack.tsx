import clsx from "clsx";
import React, { CSSProperties, PropsWithChildren } from "react";
import Box, { BoxProps } from "../Box/Box";

type Props = BoxProps & {
  gap?: React.CSSProperties["margin"];
  vertical?: boolean;
  // Flex-wrap, wraps content to next line
  wrap?: boolean;
  // Wrap elements in a `<Box>` component
  wrapper?: boolean;
  style?: CSSProperties;
};

const Stack = ({
  gap = "8px",
  vertical = false,
  wrap = false,
  wrapper = false,
  style,
  children,
  ...props
}: PropsWithChildren<Props>) => {
  // The CSS for gap between elements
  const gapStyle = {
    marginBottom: { mobile: gap, tablet: vertical || wrap ? gap : 0 },
    marginRight: { mobile: 0, tablet: !vertical ? gap : 0 },
  };
  console.log("gap", gapStyle);

  // Loop through children and apply gap (unless it's the last child)
  const childArray = React.Children.toArray(children);
  const spacedChildren = React.Children.map(childArray, (child, index) => {
    if (React.isValidElement(child)) {
      const showGapStyle =
        children && index < childArray.length - 1 ? gapStyle : {};

      if (wrapper) return <Box {...showGapStyle}>{child}</Box>;
      return React.cloneElement(child, {
        ...showGapStyle,
      });
    }
    return child;
  });

  return (
    <Box
      display="flex"
      flexDirection={{ mobile: "column", tablet: vertical ? "column" : "row" }}
      flexWrap={wrap ? "wrap" : "nowrap"}
      style={style}
      {...props}
    >
      {spacedChildren}
    </Box>
  );
};

export default Stack;
