import React, { HTMLProps, PropsWithChildren } from "react";
import Box, { BoxProps } from "../Box/Box";

type Props = BoxProps & HTMLProps<HTMLDivElement> & {};

const Paper = ({ children, ...props }: PropsWithChildren<Props>) => {
  return (
    // @ts-ignore
    <Box background="gradients.background" {...props}>
      {children}
    </Box>
  );
};

export default Paper;
