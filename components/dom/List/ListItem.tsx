import React, { PropsWithChildren } from "react";
import Box from "../Box/Box";
import Text, { TextProps } from "../Text/Text";

type Props = {};

const ListItem = ({ children, ...props }: PropsWithChildren<Props>) => {
  return (
    <Box as="li" mb={4} color="text" {...props}>
      <Text as="span" fontSize={3} lineHeight={6}>
        {children}
      </Text>
    </Box>
  );
};

export default ListItem;
