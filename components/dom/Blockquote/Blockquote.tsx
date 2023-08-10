import { blockquoteStyles } from "./Blockquote.css";
import clsx from "clsx";
import { DetailedHTMLProps, BlockquoteHTMLAttributes } from "react";

/* eslint-disable-next-line */
export interface BlockquoteProps
  extends Omit<
    DetailedHTMLProps<
      BlockquoteHTMLAttributes<HTMLQuoteElement>,
      HTMLQuoteElement
    >,
    "size"
  > {
  children: React.ReactNode;
}

export function Blockquote({ children, ...props }: BlockquoteProps) {
  return (
    <blockquote className={clsx(blockquoteStyles)} {...props}>
      {children}
    </blockquote>
  );
}

export default Blockquote;
