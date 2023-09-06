import React, { PropsWithChildren } from "react";
import Text, { TextProps } from "../Text/Text";

type Props = TextProps & {};

const Headline = ({ children, ...props }: PropsWithChildren<Props>) => {
  return (
    <Text
      as="h1"
      fontFamily="heading"
      fontWeight="bold"
      fontSize={4}
      lineHeight={6}
      display="block"
      letterSpacing={1}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Headline;
