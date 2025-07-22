import React from "react";
import Stack from "../Stack/Stack";
import SOCIAL_PLATFORMS from "../AboutCard/social";
import styled from "styled-components";
import Box from "../Box/Box";
import Text from "../Text/Text";

const SocialIconImage = styled("img")`
  width: 64px;
  height: 64px;

  filter: grayscale(1);
  transform: translateY(0);

  transition:
    filter 210ms ease-out,
    transform 210ms ease-out;

  &:hover {
    filter: grayscale(0);
    transform: translateY(-5px);
  }
`;

const BlogSocialPlatform = ({ image, alt, title, href, ...props }) => {
  return (
    <Box
      as="a"
      href={href}
      target="_blank"
      title={title}
      display="flex"
      flexDirection="column"
      alignItems="center"
      style={{ textDecoration: "none" }}
      {...props}
    >
      <SocialIconImage src={image} alt={alt} />
      <Text fontSize={0} fontWeight="bold" color="gray">
        {alt}
      </Text>
    </Box>
  );
};

type Props = {};

const BlogSocial = (props: Props) => {
  return (
    <Stack gap="16px">
      {SOCIAL_PLATFORMS.map((platform) => (
        <BlogSocialPlatform key={platform.alt} {...platform} />
      ))}
    </Stack>
  );
};

export default BlogSocial;
