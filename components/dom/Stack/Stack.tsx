import clsx from "clsx";
import React, { CSSProperties, PropsWithChildren } from "react";
import Box, { BoxProps } from "../Box/Box";

type Props = BoxProps & {
  gap?: React.CSSProperties["margin"];
  vertical?: boolean;
  style?: CSSProperties;
};

const Stack = ({
  gap = "8px",
  vertical = false,
  style,
  children,
  ...props
}: PropsWithChildren<Props>) => {
  // The CSS for gap between elements
  const gapStyle = {
    marginBottom: { mobile: gap, tablet: vertical ? gap : 0 },
    marginRight: { mobile: 0, tablet: !vertical ? gap : 0 },
  };

  // Loop through children and apply gap (unless it's the last child)
  const childArray = React.Children.toArray(children);
  const spacedChildren = React.Children.map(childArray, (child, index) => {
    if (React.isValidElement(child)) {
      const showGapStyle =
        children && index < childArray.length - 1 ? gapStyle : {};
      return React.cloneElement(child, {
        // @TODO: Change to responsive margin Styled System props
        // and default to marginBottom for mobile always
        //@ts-ignore
        // style: { ...showGapStyle, ...child.props.style },
        ...showGapStyle,
      });
    }
    return child;
  });

  return (
    <Box
      display="flex"
      flexDirection={{ mobile: "column", tablet: vertical ? "column" : "row" }}
      style={style}
      {...props}
    >
      {spacedChildren}
    </Box>
  );
};

export default Stack;
