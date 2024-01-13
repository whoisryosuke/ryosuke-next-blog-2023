import BlogTransition from "@components/dom/BlogTransition/BlogTransition";
import { POSTS_PATH, postFilePaths } from "@utils/mdxUtils";
import React, { useEffect, useState } from "react";
import fs from "fs";
import matter from "gray-matter";
import Stack from "@components/dom/Stack/Stack";
import Box from "@components/dom/Box/Box";
import { H2, H3, H4 } from "@components/dom/Headline/Headers";
import BlogCard, { BlogPostData } from "@components/dom/BlogCard/BlogCard";
import { useBlogStore } from "@store/blog";
import Head from "@components/dom/Head/Head";
import BlogTagSearch from "@components/dom/BlogTagSearch/BlogTagSearch";

type Props = {
  posts: BlogPostData[];
  allTags: string[];
};

type PostsByYear = Record<string, BlogPostData[]>;

const BlogArchivePage = ({ posts, allTags }: Props) => {
  const { setTitle, resetTableOfContents } = useBlogStore();
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    setTitle("Blog Archive");
    resetTableOfContents();
  }, []);

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
    }, {} as PostsByYear)
  );

  const handleTagSelect = (e: React.FormEvent<HTMLSelectElement>) => {
    setSelectedTag(e.currentTarget.value);
    if (e.currentTarget.value == "") setTitle("Blog Archive");

    if (e.currentTarget.value !== "")
      setTitle(`Browsing all posts tagged "${selectedTag}"`);
  };

  return (
    <BlogTransition>
      <Head
        title={
          selectedTag !== ""
            ? `Browsing all posts tagged "${selectedTag}"`
            : "Blog Archive"
        }
      />
      <BlogTagSearch
        selectedTag={selectedTag}
        handleTagSelect={handleTagSelect}
        allTags={allTags}
      />
      {postsByYear.reverse().map(([year, posts]) => {
        const filteredPosts = posts.filter(
          (post) =>
            selectedTag == "" || post.frontmatter.tags.includes(selectedTag)
        );

        if (filteredPosts.length == 0) return;

        return (
          <Box key={year} marginBottom={8}>
            <H2 marginTop={0}>{year}</H2>
            <Stack
              vertical
              gap="0px"
              position="relative"
              ml={-8}
              left={0}
              width="calc(100% + 128px)"
            >
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </Stack>
          </Box>
        );
      })}
    </BlogTransition>
  );
};

export async function getStaticProps() {
  const rawPosts = await postFilePaths();
  let tagSet = new Set();
  // Remove root path
  const posts = rawPosts.map((filePath) => {
    const source = fs.readFileSync(filePath);
    const { content, data } = matter(source);

    if (data.tags && data.tags.length > 0) {
      data.tags.forEach((tag) => tagSet.add(tag));
    }

    // Generate a slug
    const slug = filePath
      .replace(POSTS_PATH, "")
      .replace(/\.mdx?$/, "")
      .replace("/index", "");

    return {
      content,
      frontmatter: data,
      filePath,
      slug,
    };
  });

  let allTags = [];
  tagSet.forEach((tag) => allTags.push(tag));
  allTags = allTags.sort();

  return { props: { posts, allTags } };
}

export default BlogArchivePage;
