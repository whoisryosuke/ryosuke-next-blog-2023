import React from "react";
import NextHead from "next/head";
import MetaTags, { MetaTagsProps } from "../MetaTags/MetaTags";

type Props = {
  // Title of page (passed to `<head>`)
  title: string;

  meta?: MetaTagsProps;
};

const Head = ({ title, meta, ...props }: Props) => {
  return (
    <NextHead>
      <title>{title}</title>
      {/* Social Media Stuff */}
      <MetaTags {...meta} />
    </NextHead>
  );
};

export default Head;
