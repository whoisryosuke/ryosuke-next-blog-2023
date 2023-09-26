import BlogTransition from "@components/dom/BlogTransition/BlogTransition";
import { POSTS_PATH, postFilePaths } from "@utils/mdxUtils";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Text from "@components/dom/Text/Text";
import Link from "@components/dom/Link/Link";
import List from "@components/dom/List/List";
import Box from "@components/dom/Box/Box";

type BlogPostData = {
  frontmatter: {
    title: string;
    date: string;
  };
  filePath: string;
  content: any;
};

type Props = {
  posts: BlogPostData[];
};

const BlogArchivePage = ({ posts }: Props) => {
  // Sort posts by latest to oldest
  const sortedPosts = posts.sort((post1, post2) => {
    const post1Date = new Date(post1.frontmatter.date);
    const post2Date = new Date(post2.frontmatter.date);

    return post2Date.getTime() - post1Date.getTime();
  });

  console.log(sortedPosts);

  return (
    <BlogTransition>
      <List>
        {sortedPosts.map((post) => (
          <Box as="li" key={post.filePath}>
            <Link
              href={`${post.filePath
                .replace(POSTS_PATH, "")
                .replace(/\.mdx?$/, "")
                .replace("/index", "")}`}
              lineHeight={5}
            >
              {post.frontmatter.title}
            </Link>
          </Box>
        ))}
      </List>
    </BlogTransition>
  );
};

export function getStaticProps() {
  const posts = postFilePaths
    // Remove root path
    .map((filePath) => {
      const source = fs.readFileSync(filePath);
      const { content, data } = matter(source);

      return {
        content,
        frontmatter: data,
        filePath,
      };
    });

  return { props: { posts } };
}

export default BlogArchivePage;
