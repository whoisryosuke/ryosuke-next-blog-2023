import React from "react";
import Paragraph from "./Paragraph";

type Props = {};

const Strong = (props: Props) => {
  return (
    <Paragraph
      as="strong"
      display="inline-block"
      fontWeight="bold"
      marginBottom={0}
      {...props}
    />
  );
};

export default Strong;
