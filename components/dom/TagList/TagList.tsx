import { MarkdownAstroData, MarkdownContent } from "astro";
import React from "react";
import Box from "../Box/Box";
import Text from "../Text/Text";
import Link from "../Link/Link";
import Accordion from "../Accordion/Accordion";

type MarkdownPost = MarkdownContent & MarkdownAstroData;
type Props = {
  posts: any;
};

const PostList = ({ posts }: Props) => {
  return (
    <div>
      {posts.map((post) => (
        <Link
          href={post.url}
          underline={false}
          style={{ width: "100%" }}
          target="_blank"
        >
          <Box
            style={{
              borderBottom: "1px solid #CCC",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text fontFamily="heading" fontSize={2} lineHeight={3}>
              {post.frontmatter.title}
            </Text>
            <Text>{post.frontmatter.date}</Text>
          </Box>
        </Link>
      ))}
    </div>
  );
};

const TagList = ({ tagLoop }) => {
  const content = tagLoop.map(([tag, posts]) => (
    <Accordion title={`#${tag}`}>
      <PostList posts={posts} />
    </Accordion>
  ));
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      {content}
    </Box>
  );
};

export default TagList;
