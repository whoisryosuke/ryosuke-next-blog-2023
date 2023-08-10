import clsx from "clsx";
import React, { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { codeInlineStyles } from "./CodeInline.css";

export type CodeInlineProps = AnchorHTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

const CodeInline = ({
  className,
  children,
  ...props
}: PropsWithChildren<CodeInlineProps>) => {
  return (
    <code className={clsx(codeInlineStyles, className)} {...props}>
      {children}
    </code>
  );
};

export default CodeInline;
