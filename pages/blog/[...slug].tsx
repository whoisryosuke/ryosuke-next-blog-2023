import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { postFilePaths, POSTS_PATH } from "@utils/mdxUtils";
import { visit } from "unist-util-visit";
import remarkPrism from "remark-prism";
import "prismjs/themes/prism-tomorrow.css";
import React, { useEffect } from "react";
import { components } from "@components/dom/MDXComponents/MDXComponents";
import { MetaTagsProps } from "@components/dom/MetaTags/MetaTags";
import BlogTransition from "@components/dom/BlogTransition/BlogTransition";
import useBlogPostRead from "features/achievements/hooks/useBlogPostRead";
import { useBlogStore } from "@store/blog";
import Head from "@components/dom/Head/Head";

// Adds the blog post slug to the image URL
// We do this because NextJS pages don't include the blog post slug
// and images are organized into folders by that slug
function transformImgSrc({ slug }) {
  return (tree, file) => {
    visit(tree, "paragraph", (node) => {
      const image = node.children.find((child) => child.type === "image");

      if (image) {
        const fileName = image.url.replace("./", "");
        image.url = `/blog/${slug}/${fileName}`;
      }
    });
  };
}

export default function PostPage({ source, frontMatter, slug }) {
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
    image: frontMatter.cover_image.replace(
      "./",
      `https://whoisryosuke.com/${slug}/`
    ),
    url: slug,
    blogArticle: true,
  };
  return (
    <BlogTransition>
      <Head title={frontMatter.title} meta={meta} />
      <MDXRemote {...source} components={components} />
    </BlogTransition>
  );
}

// Grabs MDX content based on slug passed in URL params
export const getStaticProps = async ({ params }) => {
  console.log("page slug", params.slug, params.slug.join("/"));

  // We add back the `blog/` to the path
  const slugPath = params.slug.join("/");

  let postFilePath;
  // Check if it exists
  const fullPath = path.join(POSTS_PATH, `blog/${slugPath}.mdx`);
  if (fs.existsSync(fullPath)) {
    postFilePath = fullPath;
  }
  // Try the `/index` version instead
  const indexPath = path.join(POSTS_PATH, `blog/${slugPath}/index.mdx`);
  if (fs.existsSync(indexPath)) {
    postFilePath = indexPath;
  }

  if (!postFilePath) {
    console.log("no post found!!");
    throw Error("No post found");
  }

  console.log("post file path", postFilePath);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [
        // Fixes image URLs with correct slug
        [transformImgSrc, { slug: slugPath }],
        remarkPrism,
      ],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      slug: slugPath,
    },
  };
};

// Generate a path for each MDX file
export const getStaticPaths = async () => {
  // The goal here is to sanitize the file names to work as URLs
  // and return an array of the slug
  const rawPaths = await postFilePaths();
  // Remove root path
  const paths = rawPaths
    .map((path) => path.replace(POSTS_PATH, ""))
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((path) => {
      // We create a URL friendly slug here
      // Since some MDX files are `index.mdx` and the folder is the actual title
      const slug = path
        .replace(/^\/|\/$/g, "") // Remove before/after trailing slashes
        .replace("blog/", "") // Trim off index
        .replace("/index", "") // Trim off index
        .split("/"); // Create an array format - required for getStaticProps above

      return { params: { slug } };
    });

  return {
    paths,
    fallback: false,
  };
};
