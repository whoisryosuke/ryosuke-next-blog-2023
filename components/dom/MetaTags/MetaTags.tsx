import React from "react";

export type MetaTagsProps = {
  title?: string;
  description?: string;
  // Path of image locally on domain (e.g. `/images/favicon.png`)
  image?: string;
  // Path appended to domain (e.g. `/blog`)
  url?: string;
  blogArticle?: boolean;
};

const MetaTags = ({
  title = "Ryo's Blog",
  description = "The blog and portfolio of Ryosuke Hana",
  image = "/images/social-default.png",
  url = "",
  blogArticle = false,
}: MetaTagsProps) => {
  const siteImage = `https://whoisryosuke.com${image}`;
  const siteUrl = `https://whoisryosuke.com/${url}`;
  return (
    <>
      <meta property="og:title" content={title} />
      <meta property="og:type" content={blogArticle ? "article" : "website"} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:description" content={description} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={siteImage} />
    </>
  );
};

export default MetaTags;
