import React from "react";
import Box from "../Box/Box";
import Link from "../Link/Link";
import Stack from "../Stack/Stack";
import Text from "../Text/Text";

const ContactLink = ({ children, href, ...props }) => (
  <Link
    href={href}
    fontFamily="heading"
    fontSize={{
      mobile: 1,
      tablet: 2,
    }}
    lineHeight={6}
    {...props}
  >
    {children}
  </Link>
);

type Props = {};

const ContactCTA = (props: Props) => {
  return (
    <Box paddingTop={5}>
      <Text
        fontFamily="heading"
        fontSize={{
          mobile: 2,
          tablet: 3,
        }}
        style={{ marginBottom: "8px" }}
      >
        DMs are open
      </Text>
      <Stack gap="16px">
        <ContactLink href="https://mastodon.gamedev.place/@whoisryosuke">
          Mastodon
        </ContactLink>
        <ContactLink href="https://twitter.com/whoisryosuke">
          Twitter
        </ContactLink>
        <ContactLink href="https://instagram.com/whoisryosuke">
          Instagram
        </ContactLink>
        <ContactLink href="https://linkedin.com/in/whoisryosuke">
          LinkedIn
        </ContactLink>
      </Stack>
    </Box>
  );
};

export default ContactCTA;
