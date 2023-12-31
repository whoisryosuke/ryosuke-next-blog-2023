import React, { AnchorHTMLAttributes } from "react";
import Box from "../Box/Box";
import Text from "../Text/Text";
import styled from "styled-components";
import { ImageProps } from "./Image";

const StyledImage = styled("img")<ImageProps>`
  width: auto;
  max-width: 100%;
  margin: auto;
  display: block;
  margin-bottom: ${({ theme }) => theme.space[4]};
  border-radius: ${({ theme, borderRadius }) =>
    borderRadius ? theme.radius[borderRadius] : theme.radius[1]};
  box-shadow: 0 2px 16px 0 rgba(10, 10, 14, 0.1);
`;

export type BlogImageProps = AnchorHTMLAttributes<HTMLImageElement> & {
  alt: string;
};

const BlogImage = ({ className, alt, ...props }: BlogImageProps) => {
  return (
    <Box as="span" display="block" style={{ textAlign: "center" }}>
      <StyledImage alt={alt} {...props} />
      {alt && (
        <Box
          as="span"
          display="inline-block"
          mx="auto"
          py={3}
          px={5}
          backgroundColor="glassOverlay"
          borderRadius={1}
        >
          <Text
            as="span"
            aria-hidden
            textAlign="center"
            display="inline-block"
            fontSize={0}
          >
            {alt}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default BlogImage;
