import Head from "next/head";
import BlogTransition from "../BlogTransition/BlogTransition";
import { useEffect } from "react";
import { useBlogStore } from "@store/blog";
import useBlogPostRead from "features/achievements/hooks/useBlogPostRead";
import { MetaTagsProps } from "../MetaTags/MetaTags";

export default function BlogMDXWrapper({ frontMatter, slug, children }) {
  const { setTitle, setSlug, resetTableOfContents } = useBlogStore();

  useEffect(() => {
    setTitle(frontMatter.title);
    setSlug(slug);
    return () => {
      resetTableOfContents();
    };
  }, [frontMatter.title]);

  useBlogPostRead();

  const meta: MetaTagsProps = {
    title: frontMatter.title,
    // Markdown uses relative image URLs, we convert here
    image: frontMatter?.cover_image?.replace(
      "./",
      `https://whoisryosuke.com/${slug}/`
    ),
    url: slug,
    blogArticle: true,
  };
  return (
    <BlogTransition>
      <Head title={frontMatter.title} meta={meta} />
      {children}
    </BlogTransition>
  );
}

BlogMDXWrapper.defaultProps = {
  frontMatter: {
    title: "",
  },
};
