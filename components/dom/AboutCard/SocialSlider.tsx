import React from "react";
import Box, { BoxProps } from "../Box/Box";
import styled from "styled-components";
import Text from "../Text/Text";
import Stack from "../Stack/Stack";

type SocialPlatformProps = {
  image: string;
  title: string;
  href: string;
};

const SocialPlatform = ({
  image,
  title,
  href,
  ...props
}: SocialPlatformProps) => {
  return (
    <Box
      as="a"
      href={href}
      display="inline-block"
      style={{ textAlign: "center", textDecoration: "none" }}
      {...props}
    >
      <img src={image} alt={`${title} icon`} style={{ display: "block" }} />
      <Text fontSize={0}>{title}</Text>
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
      <Stack gap={4}>
        <SocialPlatform
          image="/images/social-twitch.png"
          title="Twitch"
          href="https://www.twitch.tv/whoisryosuke"
        />
        <SocialPlatform
          image="/images/social-mastodon.png"
          title="Mastodon"
          href="https://mastodon.gamedev.place/@whoisryosuke"
        />
        <SocialPlatform
          image="/images/social-threads.png"
          title="Threads"
          href="https://www.threads.net/@whoisryosuke"
        />
        <SocialPlatform
          image="/images/social-youtube.png"
          title="YouTube"
          href="https://www.youtube.com/@whoisryosuke"
        />
      </Stack>
    </HorizontalScroll>
  );
};

export default SocialSlider;
