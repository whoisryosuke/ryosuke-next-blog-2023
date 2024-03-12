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
  const { tableOfContents, addTOCItem } = useBlogStore();
  useEffect(() => {
    if (tableOfContents.find((tocItem) => tocItem.title === title)) return;
    addTOCItem({
      title: title,
      slug: `${kebabCase(title)}`,
    });
  }, [title, tableOfContents, addTOCItem]);

  return <>{children}</>;
};

export default BlogHeadline;
