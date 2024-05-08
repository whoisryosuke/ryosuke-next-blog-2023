import { useBlogStore } from "@store/blog";
import React, { PropsWithChildren, useEffect } from "react";
import { kebabCase } from "lodash";

type Props = {
  title: any;
  level: number;
};

const BlogHeadline = ({
  children,
  title,
  level,
  ...props
}: PropsWithChildren<Props>) => {
  const { addTOCItem, tableOfContents } = useBlogStore();
  const exists = tableOfContents.find((tocItem) => tocItem.title === title);
  useEffect(() => {
    console.log("toc running", exists);
    if (exists) return;
    console.log("toc adding item", title);
    addTOCItem({
      title: title,
      slug: `${kebabCase(title)}`,
      level,
    });
  }, [exists]);

  return <>{children}</>;
};

export default BlogHeadline;
