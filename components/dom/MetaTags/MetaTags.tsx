import React from "react";

export type MetaTagsProps = {
  title?: string;
  description?: string;
  // Path of image locally on domain (e.g. `/images/favicon.png`)
  image?: string;
  // Path appended to domain (e.g. `/blog`)
  url?: string;
};

const MetaTags = ({
  title = "Ryo's Blog",
  description = "The blog and portfolio of Ryosuke Hana",
  image = "/images/social-default.png",
  url = "",
}: MetaTagsProps) => {
  return (
    <>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://whoisryosuke.com${image}`} />
      <meta property="og:url" content={`https://whoisryosuke.com${url}`} />
      <meta name="twitter:card" content="summary_large_image"></meta>
    </>
  );
};

export default MetaTags;
