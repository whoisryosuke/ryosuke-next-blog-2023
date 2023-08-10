import { buttonStyles } from "./Button.css";
import { sizeVariants } from "../../styles/variants/size.css";
import clsx from "clsx";
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

/* eslint-disable-next-line */
export interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "size"
  > {
  size?: keyof typeof sizeVariants;
  children: React.ReactNode;
}

export function Button({ children, size = "medium", ...props }: ButtonProps) {
  return (
    <button className={clsx(buttonStyles, sizeVariants[size])} {...props}>
      {children}
    </button>
  );
}

export default Button;
