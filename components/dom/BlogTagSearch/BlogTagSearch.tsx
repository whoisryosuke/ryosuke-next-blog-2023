import React from "react";
import Box from "../Box/Box";
import Input from "../Input/Input";
import { BiSolidDownArrow } from "react-icons/bi";
import styled from "styled-components";
import { H1, H2, H3, H5 } from "../Headline/Headers";
import Text from "../Text/Text";

const BlogTagSearchContainer = styled(Box)`
  & select {
    color: ${({ theme }) => theme.colors.text};
  }

  & option {
    color: initial;
  }

  & .icon {
    color: ${({ theme }) => theme.colors.text};
    position: absolute;
    top: ${({ theme }) => theme.space[4]};
    right: ${({ theme }) => theme.space[4]};
  }
`;

type Props = {
  selectedTag: string;
  handleTagSelect: any;
  allTags: string[];
};

const BlogTagSearch = ({ allTags, selectedTag, handleTagSelect }: Props) => {
  return (
    <Box mb={5}>
      <H5 mt={0}>Sort by tag:</H5>
      <BlogTagSearchContainer position="relative">
        <Input as="select" onChange={handleTagSelect}>
          <option value="">All posts</option>
          {allTags.map((tag) => (
            <option key={tag} value={tag} selected={selectedTag === tag}>
              {tag}
            </option>
          ))}
        </Input>
        <BiSolidDownArrow className="icon" />
      </BlogTagSearchContainer>
    </Box>
  );
};

export default BlogTagSearch;
