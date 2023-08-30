import Text, { TextProps } from "@components/dom/Text/Text";
import React, { PropsWithChildren } from "react";

type Props = TextProps & {};

const Paragraph = ({ children, ...props }: PropsWithChildren<Props>) => {
  return (
    <Text marginBottom={4} {...props}>
      {children}
    </Text>
  );
};

export default Paragraph;
