import React from "react";
import { H3 } from "../Headline/Headers";
import Text from "../Text/Text";
import format from "date-fns/format";
import { WorkCardData } from "./types";
import Box from "../Box/Box";

type Props = {
  work: WorkCardData;
};

const PortfolioSingleTitle = ({ work, ...props }: Props) => {
  return (
    <Box {...props}>
      <H3 marginBottom={3}>{work.title}</H3>
      <Text fontSize={0} lineHeight={1} textAlign="right" opacity="0.5">
        {format(new Date(Date.parse(work.date)), "MM/dd/yyyy")}
      </Text>
    </Box>
  );
};

export default PortfolioSingleTitle;
