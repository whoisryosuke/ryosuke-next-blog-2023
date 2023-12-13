import React from "react";
import Box from "../Box/Box";
import Text from "../Text/Text";

type Props = {};

const Copyright = (props: Props) => {
  return (
    <Box px={5} pt={5} pb={1}>
      <Text fontSize={0} fontFamily="heading">
        COPYRIGHT © 2019-{new Date().getFullYear().toString()}, RYOSUKE HANA
      </Text>
    </Box>
  );
};

export default Copyright;
