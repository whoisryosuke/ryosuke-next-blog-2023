import React, { PropsWithChildren } from "react";
import { BREAKPOINTS_RAW } from "@theme/tokens";
import Stack from "../Stack/Stack";
import { BoxProps } from "../Box/Box";
import { useWindowSize } from "usehooks-ts";

const MASONRY_DEFAULT_BREAKPOINTS = {
  mobile: 1,
  tablet: 2,
  computer: 3,
  desktop: 3,
  widescreen: 4,
};

const getNumCols = (windowWidth: number) => {
  const breakpointMap = Object.entries(BREAKPOINTS_RAW);
  const nextBreakpoint = breakpointMap.findIndex(
    ([breakpointName, breakpointValue]) => {
      return windowWidth < breakpointValue;
    }
  );

  console.log("nextBreakpoint", nextBreakpoint);
  const currentBreakpoint = breakpointMap[nextBreakpoint - 1];

  if (!currentBreakpoint) return 1;

  console.log("current Breakpoint", currentBreakpoint);

  const columns = MASONRY_DEFAULT_BREAKPOINTS[currentBreakpoint[0]];
  console.log("columns", columns);

  return columns;
};

type Props = {
  gap?: number;
};

const MasonryGrid = ({ children, gap }: PropsWithChildren<Props>) => {
  const windowSize = useWindowSize();

  const renderChildren = () => {
    const columns = [];

    const numCols = getNumCols(windowSize.width);
    console.log("numCols", numCols);
    // const numItems = React.Children.count(children);

    React.Children.forEach(children, (child, index) => {
      const currentColumn = columns[index % numCols];
      if (!currentColumn) columns[index % numCols] = [];
      columns[index % numCols].push(child);
    });

    return columns.map((column, index) => {
      // Gap between columns
      let containerProps: BoxProps = {};
      if (index > 0 && index < columns.length - 1) {
        containerProps.ml = gap;
      }
      if (index < columns.length - 1) {
        containerProps.mr = gap;
      }
      return (
        <Stack
          key={index}
          vertical
          display="block"
          flex={1}
          {...containerProps}
        >
          {column}
        </Stack>
      );
    });
  };

  return <>{renderChildren()}</>;
};

MasonryGrid.defaultProps = {
  gap: 2,
};

export default MasonryGrid;
