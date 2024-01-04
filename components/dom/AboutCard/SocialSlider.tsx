import React from "react";
import Box, { BoxProps } from "../Box/Box";
import styled from "styled-components";
import Text from "../Text/Text";
import Stack from "../Stack/Stack";
import { BREAKPOINTS } from "@theme/tokens";

const SocialIconImage = styled("img")`
  @media (min-width: ${BREAKPOINTS.default}) {
    width: auto;
  }

  @media (min-width: ${BREAKPOINTS.computer}) {
    width: 100%;
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
        <SocialPlatform
          image="/images/social-twitch.png"
          alt="Twitch"
          title="@whoisryosuke on Twitch"
          href="https://www.twitch.tv/whoisryosuke"
        />
        <SocialPlatform
          image="/images/social-mastodon.png"
          alt="Mastodon"
          title="@whoisryosuke on Mastodon"
          href="https://mastodon.gamedev.place/@whoisryosuke"
        />
        <SocialPlatform
          image="/images/social-threads.png"
          alt="Threads"
          title="@whoisryosuke on Threads"
          href="https://www.threads.net/@whoisryosuke"
        />
        <SocialPlatform
          image="/images/social-youtube.png"
          alt="YouTube"
          title="@whoisryosuke on YouTube"
          href="https://www.youtube.com/@whoisryosuke"
        />
      </Stack>
    </HorizontalScroll>
  );
};

export default SocialSlider;
