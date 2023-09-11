import React, { PropsWithChildren } from "react";
import PageTransition from "../PageTransition/PageTransition";

type Props = {};

const PageWrapper = ({ children, ...props }: PropsWithChildren<Props>) => {
  return <PageTransition {...props}>{children}</PageTransition>;
};

export default PageWrapper;
