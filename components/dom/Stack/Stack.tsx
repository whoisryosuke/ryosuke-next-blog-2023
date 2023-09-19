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
  const gapDirection = vertical ? "marginBottom" : "marginRight";
  // The CSS for gap between elements
  const gapStyle = {
    [gapDirection]: gap,
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
        marginBottom: { mobile: gap, tablet: 0 },
        marginRight: { mobile: 0, tablet: gap },
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
