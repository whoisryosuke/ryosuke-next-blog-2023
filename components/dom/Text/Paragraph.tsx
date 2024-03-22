import React from "react";
import Text, { TextProps } from "../Text/Text";

type Props = TextProps & {};

const Paragraph = (props: Props) => {
  return (
    <Text
      as="p"
      fontSize={3}
      lineHeight={6}
      mb={5}
      display="block"
      {...props}
    />
  );
};

export default Paragraph;
