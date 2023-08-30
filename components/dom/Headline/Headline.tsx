import React, { PropsWithChildren } from "react";
import Text, { TextProps } from "../Text/Text";

type Props = TextProps & {};

const Headline = ({ children, ...props }: PropsWithChildren<Props>) => {
  return (
    <Text as="h1" fontWeight="bold" fontSize={4} lineHeight={6} {...props}>
      {children}
    </Text>
  );
};

export default Headline;
