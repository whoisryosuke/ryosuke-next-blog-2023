import clsx from "clsx";
import React, { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { codeBlockStyles } from "./CodeBlock.css";

type Props = {};

const CodeBlock = ({
  className,
  children,
  ...props
}: PropsWithChildren<AnchorHTMLAttributes<HTMLPreElement>>) => {
  return (
    <pre className={clsx(codeBlockStyles, className)} {...props}>
      {children}
    </pre>
  );
};

export default CodeBlock;
