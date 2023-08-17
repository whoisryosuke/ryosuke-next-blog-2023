import React from "react";
import { styled } from "@linaria/react";

const Box = styled.div`
  background-color: red;
`;

type Props = {};

const Test = (props: Props) => {
  return <Box>Test</Box>;
};

export default Test;
