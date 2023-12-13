import React, { PropsWithChildren } from "react";
import Text, { TextProps } from "../Text/Text";
import { kebabCase } from "lodash";

type Props = TextProps<HTMLHeadingElement> & {
  as?: React.ElementType;
  slug?: boolean;
};

const Headline = ({
  children,
  slug = false,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <Text
      as="h1"
      fontFamily="heading"
      fontWeight="bold"
      fontSize={4}
      lineHeight={6}
      display="block"
      letterSpacing={1}
      id={slug && kebabCase(children)}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Headline;
