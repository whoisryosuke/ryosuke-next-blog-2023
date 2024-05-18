import Script from "next/script";
import React from "react";
import Box from "../Box/Box";

type Props = {
  username: string;
  id: string;
};
const TweetEmbed = ({ id, username = "whoisryosuke" }: Props) => {
  return (
    <Box display="flex" justifyContent="center" marginBottom={6}>
      <Script src="https://platform.twitter.com/widgets.js" />
      <blockquote className="twitter-tweet">
        <p>Loading tweet...</p>
        <a
          href={`https://twitter.com/${username}/status/${id}?ref_src=twsrc%5Etfw`}
        >
          Loading date...
        </a>
      </blockquote>
    </Box>
  );
};

export default TweetEmbed;
