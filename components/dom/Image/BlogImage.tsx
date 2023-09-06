import React, { AnchorHTMLAttributes } from "react";
import Box from "../Box/Box";
import Text from "../Text/Text";
import styled from "styled-components";

const StyledImage = styled("img")`
  width: auto;
  max-width: 100%;
  margin: auto;
  display: block;
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

export type ImageProps = AnchorHTMLAttributes<HTMLImageElement> & {
  alt: string;
};

const Image = ({ className, alt, ...props }: ImageProps) => {
  return (
    <Box as="span" style={{ textAlign: "center" }}>
      <StyledImage alt={alt} {...props} />
      {alt && (
        <Box
          as="span"
          display="block"
          mx={2}
          py={2}
          px={5}
          backgroundColor="glassOverlay"
          borderRadius={7}
        >
          <Text
            as="span"
            aria-hidden
            textAlign="center"
            display="block"
            fontSize={0}
          >
            {alt}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default Image;
