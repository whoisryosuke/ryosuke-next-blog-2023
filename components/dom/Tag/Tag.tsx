import { linkStyles } from "./Tag.css";
import clsx from "clsx";
import Link, { LinkProps } from "../Link/Link";
import Text from "../Text/Text";

/* eslint-disable-next-line */
export interface TagProps extends LinkProps {
  children: React.ReactNode;
}

export function Tag({ children, ...props }: TagProps) {
  return (
    <Link className={linkStyles} {...props}>
      <Text as="span" fontFamily="heading">
        {children}
      </Text>
    </Link>
  );
}

export default Tag;
