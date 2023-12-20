import { H4 } from "@components/dom/Headline/Headers";
import React, { PropsWithChildren } from "react";

type Props = {};

const PanelHeader = ({ children, ...props }: PropsWithChildren<Props>) => {
  return (
    <H4 as="legend" mb={3} mt={0} {...props}>
      {children}
    </H4>
  );
};

export default PanelHeader;
