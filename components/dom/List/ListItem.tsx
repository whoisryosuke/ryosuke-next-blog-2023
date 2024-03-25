import React, { PropsWithChildren } from "react";
import Box from "../Box/Box";
import Text, { TextProps } from "../Text/Text";
import Paragraph from "../Text/Paragraph";

type Props = {};

const ListItem = ({ children, ...props }: PropsWithChildren<Props>) => {
  return (
    <Box as="li" mb={4} color="text" {...props}>
      <Paragraph as="span" marginBottom={0}>
        {children}
      </Paragraph>
    </Box>
  );
};

export default ListItem;
