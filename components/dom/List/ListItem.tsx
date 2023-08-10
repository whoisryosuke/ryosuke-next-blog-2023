import React, { PropsWithChildren } from "react";
import { Box } from "../Box/Box";
import { Text, TextProps } from "../Text/Text";
import { listItemStyles } from "./ListItem.css";

type Props = TextProps<"p"> & {};

const ListItem = ({
  children,
  fontSize,
  lineHeight,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <li className={listItemStyles}>
      <Text as="p" fontSize={3} lineHeight={6}>
        {children}
      </Text>
    </li>
  );
};

export default ListItem;
