import React, { PropsWithChildren } from "react";
import { BREAKPOINTS_RAW } from "@theme/tokens";
import Stack from "../Stack/Stack";
import Box, { BoxProps } from "../Box/Box";
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

  const currentBreakpoint = breakpointMap[nextBreakpoint - 1];

  if (!currentBreakpoint) return 1;

  const columns = MASONRY_DEFAULT_BREAKPOINTS[currentBreakpoint[0]];

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
      let rotationAngle = "5deg";
      let rotation = "0deg";
      if (columns.length == 4) {
        switch (index) {
          case 0:
            rotation = rotationAngle;
            break;
          case 3:
            rotation = `-${rotationAngle}`;
            break;
        }
      }
      if (columns.length == 3) {
        switch (index) {
          case 0:
            rotation = rotationAngle;
            break;
          case 2:
            rotation = `-${rotationAngle}`;
            break;
        }
      }
      return (
        <AnimatePresence>
          <Stack
            key={index}
            vertical
            wrapper
            display="block"
            flex={1}
            style={{
              perspective: "500px",
              transform: `translateZ(-50px)  translateX(${
                10 * (index + 1)
              }px) rotateY(${rotation})`,
            }}
            {...containerProps}
          >
            {column}
          </Stack>
        </AnimatePresence>
      );
    });
  };

  return <Box display="flex">{renderChildren()}</Box>;
};

MasonryGrid.defaultProps = {
  gap: 2,
};

export default MasonryGrid;
