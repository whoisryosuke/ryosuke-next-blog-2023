import { useBlogStore } from "@store/blog";
import React, { PropsWithChildren, useEffect } from "react";
import { kebabCase } from "lodash";

type Props = {
  title: any;
};

const BlogHeadline = ({
  children,
  title,
  ...props
}: PropsWithChildren<Props>) => {
  const { addTOCItem } = useBlogStore();
  useEffect(() => {
    addTOCItem({
      title: title,
      slug: `${kebabCase(title)}`,
    });
  }, [title]);

  return <>{children}</>;
};

export default BlogHeadline;
