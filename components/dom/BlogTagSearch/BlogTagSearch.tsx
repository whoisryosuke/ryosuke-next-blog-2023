import React from "react";
import Box from "../Box/Box";
import Input from "../Input/Input";
import { BiSolidDownArrow } from "react-icons/bi";
import styled from "styled-components";
import { H1, H2, H3, H5 } from "../Headline/Headers";
import Text from "../Text/Text";
import Dropdown from "../Dropdown/Dropdown";

type Props = {
  selectedTag: string;
  handleTagSelect: any;
  allTags: string[];
};

const BlogTagSearch = ({ allTags, selectedTag, handleTagSelect }: Props) => {
  return (
    <Box mb={5}>
      <H5 mt={0}>Sort by tag:</H5>
      <Dropdown onChange={handleTagSelect}>
        <option value="">All posts</option>
        {allTags.map((tag) => (
          <option key={tag} value={tag} selected={selectedTag === tag}>
            {tag}
          </option>
        ))}
      </Dropdown>
    </Box>
  );
};

export default BlogTagSearch;
