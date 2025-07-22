import React from "react";
import Box, { BoxProps } from "../Box/Box";
import styled from "styled-components";
import Text from "../Text/Text";
import Stack from "../Stack/Stack";
import { BREAKPOINTS } from "@theme/tokens";
import SOCIAL_PLATFORMS from "./social";

const SocialIconImage = styled("img")`
  @media (min-width: ${BREAKPOINTS.default}) {
    width: auto;
    min-width: 32px;
    max-width: 32px;
  }

  @media (min-width: ${BREAKPOINTS.computer}) {
    width: 100%;
    min-width: 32px;
    max-width: 100%;
  }
`;

type SocialPlatformProps = {
  image: string;
  alt: string;
  title: string;
  href: string;
};

const SocialPlatform = ({
  image,
  href,
  alt,
  ...props
}: SocialPlatformProps) => {
  return (
    <Box
      as="a"
      href={href}
      target="_blank"
      display="inline-block"
      style={{ textAlign: "center", textDecoration: "none" }}
      {...props}
    >
      <SocialIconImage src={image} alt={alt} style={{ display: "block" }} />
    </Box>
  );
};

const HorizontalScroll = styled(Box)`
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

type Props = BoxProps & {};

const SocialSlider = (props: Props) => {
  return (
    <HorizontalScroll p={3} {...props}>
      <Stack gap={4} responsive={false}>
        {SOCIAL_PLATFORMS.map((platform) => (
          <SocialPlatform
            key={platform.alt}
            image={platform.image}
            alt={platform.alt}
            title={platform.title}
            href={platform.href}
          />
        ))}
      </Stack>
    </HorizontalScroll>
  );
};

export default SocialSlider;
