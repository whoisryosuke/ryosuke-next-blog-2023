import React, { PropsWithChildren } from "react";
import { Box } from "../Box/Box";

type Props = {};

const List = ({ children, ...props }: PropsWithChildren<Props>) => {
  return <Box as="ul">{children}</Box>;
};

export default List;
