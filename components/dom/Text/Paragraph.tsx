import React from "react";
import Text, { TextProps } from "../Text/Text";

type Props = TextProps & {};

const Paragraph = (props: Props) => {
  return (
    <Text
      as="p"
      fontSize={{ default: 2, desktop: 3 }}
      lineHeight={{ default: 5, desktop: 6 }}
      mb={5}
      display="block"
      {...props}
    />
  );
};

export default Paragraph;
