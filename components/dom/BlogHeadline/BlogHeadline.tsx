import { useBlogStore } from "@store/blog";
import React, { PropsWithChildren, useEffect } from "react";
import { kebabCase } from "lodash";

/**
 * Assumes it's an array of React children (raw strings + components)
 * and joins together all the text from inside components
 * @param title
 * @returns
 */
const fixTitle = (title: Array<string | { props: { children: string } }>) => {
  let newTitle = "";
  title.forEach((el) => {
    if (typeof el != "string" && "props" in el) {
      console.log("found a react component");
      return (newTitle += el.props.children);
    }
    return (newTitle += el);
  });
  return newTitle;
};

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
  useEffect(() => {
    // Since we're in React and using `props.children` we need
    // check if it's an array and contains a component
    // like inline code blocks inside header elements
    const parsedTitle = Array.isArray(title) ? fixTitle(title) : title;
    const exists = tableOfContents.find(
      (tocItem) => tocItem.title === parsedTitle
    );
    if (exists) return;
    addTOCItem({
      title: parsedTitle,
      slug: `${kebabCase(parsedTitle)}`,
      level,
    });
  }, [title, level]);

  return <>{children}</>;
};

export default BlogHeadline;
