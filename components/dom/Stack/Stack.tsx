import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import Box, { BoxProps } from "../Box/Box";

type Props = BoxProps & {
  gap?: React.CSSProperties["margin"];
  vertical?: boolean;
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

  // Change direction of flex
  const containerDirection =
    vertical &&
    ({
      flexDirection: "column",
    } as React.CSSProperties);

  // Loop through children and apply gap (unless it's the last child)
  const childArray = React.Children.toArray(children);
  const spacedChildren = React.Children.map(childArray, (child, index) => {
    if (React.isValidElement(child)) {
      const showGapStyle =
        children && index < childArray.length - 1 ? gapStyle : {};
      return React.cloneElement(child, {
        //@ts-ignore
        style: { ...showGapStyle, ...child.props.style },
      });
    }
    return child;
  });

  return (
    <Box display="flex" flexDirection={{mobile: 'column', computer: vertical ? 'column' : 'row'}} style={style} {...props}>
      {spacedChildren}
    </Box>
  );
};

export default Stack;
