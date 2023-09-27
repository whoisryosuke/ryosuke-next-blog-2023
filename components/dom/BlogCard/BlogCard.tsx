import { POSTS_PATH } from "@utils/mdxUtils";
import React from "react";
import Box from "../Box/Box";
import Text from "../Text/Text";
import Link from "next/link";
import { H4 } from "../Headline/Headers";
import formatDistance from "date-fns/formatDistance";
import Stack from "../Stack/Stack";
import Glass from "../Glass/Glass";
import styled from "styled-components";

const StyledBlogCard = styled(Box)`
  &:hover {
    background: ${({ theme }) => theme.colors.glassSidebar};
  }
`;

type BlogCardTagProps = {
  tag: string;
};

const BlogCardTag = ({ tag, ...props }: BlogCardTagProps) => {
  return (
    <Glass py={2} px={4} bg="glass" borderRadius={2} modal {...props}>
      <Text fontSize={1}>{tag}</Text>
    </Glass>
  );
};

export type BlogPostData = {
  frontmatter: {
    title: string;
    date: string;
    section: string;
    tags: string[];
    cover_image: string;
  };
  filePath: string;
  slug: string;
  content: any;
};

type BlogCardProps = {
  post: BlogPostData;
};

const BlogCard = ({ post, ...props }: BlogCardProps) => {
  return (
    <StyledBlogCard px={8} py={4} {...props}>
      <Link href={`${post.slug}`} style={{ textDecoration: "none" }}>
        <Box display="flex" justifyContent="space-between" mb={3}>
          <H4 mt={0} mb={0}>
            {post.frontmatter.title}
          </H4>
          <Text fontSize={1}>
            {formatDistance(
              new Date(Date.parse(post.frontmatter.date)),
              new Date()
            )}
          </Text>
        </Box>
        <Stack>
          {post.frontmatter.tags?.map((tag) => <BlogCardTag tag={tag} />)}
        </Stack>
      </Link>
    </StyledBlogCard>
  );
};

export default BlogCard;
