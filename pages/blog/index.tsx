import BlogTransition from "@components/dom/BlogTransition/BlogTransition";
import { POSTS_PATH, postFilePaths } from "@utils/mdxUtils";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Stack from "@components/dom/Stack/Stack";
import { H2, H3, H4 } from "@components/dom/Headline/Headers";
import BlogCard, { BlogPostData } from "@components/dom/BlogCard/BlogCard";

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

  const postsByYear = Object.entries(
    sortedPosts.reduce((archive, post) => {
      const postYear = new Date(
        Date.parse(post.frontmatter.date)
      ).getFullYear();

      if (!Array.isArray(archive[postYear])) {
        archive[postYear] = [];
      }

      archive[postYear] = [...archive[postYear], post];

      return archive;
    }, {})
  );

  return (
    <BlogTransition>
      {postsByYear.reverse().map(([year, posts]) => (
        <>
          <H2>{year}</H2>
          <Stack
            vertical
            gap="0px"
            position="relative"
            ml={-8}
            left={0}
            width="calc(100% + 128px)"
          >
            {posts.map((post) => (
              <BlogCard key={post.filePath} post={post} />
            ))}
          </Stack>
        </>
      ))}
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