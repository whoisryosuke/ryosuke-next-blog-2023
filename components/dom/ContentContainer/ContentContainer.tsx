import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import Box, { BoxProps } from "../Box/Box";
import { contentContainerStyles } from "./ContentContainer.css";

type Props = BoxProps & {};

const ContentContainer = ({
  children,
  className,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <Box className={clsx(contentContainerStyles, className)} {...props}>
      {children}
    </Box>
  );
};

export default ContentContainer;
