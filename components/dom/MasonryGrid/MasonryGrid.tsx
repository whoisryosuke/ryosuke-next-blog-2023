import React, { PropsWithChildren } from "react";
import { BREAKPOINTS_RAW } from "@theme/tokens";
import Stack from "../Stack/Stack";
import { BoxProps } from "../Box/Box";
import { useWindowSize } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = ({ index, children, ...props }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateZ: 10,
        translateY: 50,
      }}
      animate={{ opacity: 1, translateZ: 0, translateY: 0 }}
      exit={{ opacity: 0, translateZ: 10 }}
      transition={{ duration: 1 * ((index + 10) / 10), delay: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const MASONRY_DEFAULT_BREAKPOINTS = {
  mobile: 1,
  tablet: 2,
  computer: 3,
  desktop: 3,
  widescreen: 4,
};

const getNumCols = (windowWidth: number) => {
  const breakpointMap = Object.entries(BREAKPOINTS_RAW);
  const checkBreakpoint = breakpointMap.findIndex(
    ([breakpointName, breakpointValue]) => {
      return windowWidth < breakpointValue;
    }
  );

  const nextBreakpoint =
    checkBreakpoint < 0 ? breakpointMap.length : checkBreakpoint;

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
    console.log("numCols", numCols, windowSize.width);
    // const numItems = React.Children.count(children);

    React.Children.forEach(children, (child, index) => {
      const currentColumn = columns[index % numCols];
      if (!currentColumn) columns[index % numCols] = [];
      const wrappedChildren = <Wrapper index={index}>{child}</Wrapper>;
      columns[index % numCols].push(wrappedChildren);
    });

    return columns.map((column, index) => {
      // Gap between columns
      let containerProps: BoxProps = {};
      if (index > 0 && index <= columns.length - 1) {
        containerProps.ml = gap;
      }
      if (index < columns.length - 1) {
        containerProps.mr = gap;
      }
      return (
        <AnimatePresence>
          <Stack
            key={index}
            vertical
            display="block"
            flex={1}
            style={{ perspective: "500px" }}
            {...containerProps}
          >
            {column}
          </Stack>
        </AnimatePresence>
      );
    });
  };

  return <>{renderChildren()}</>;
};

MasonryGrid.defaultProps = {
  gap: 2,
};

export default MasonryGrid;