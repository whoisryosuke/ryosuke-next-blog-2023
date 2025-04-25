import fs from "fs";
import removeMd from "remove-markdown";
import RSS from "rss";

export default async function generateRssFeed(posts) {
  const site_url =
    process.env.NODE_ENV === "production"
      ? "https://whoisryosuke.com"
      : "http://localhost:3000";

  const feedOptions = {
    title: "The Blog of Ryosuke",
    description: "Web, Graphics, and Game Development",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/favicon.jpg`,
    pubDate: new Date(),
    copyright: `All rights reserved 2019-${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  // Add each individual post to the feed.
  posts.map((post) => {
    // Remove markdown from content and strip out first paragraph
    // Markdown always has 1 line break at beginning so skip that
    const description = removeMd(post.content).split("\n")[1];
    feed.item({
      title: post.frontmatter.title,
      description,
      url: `${site_url}${post.slug}`,
      date: post.frontmatter.date,
    });
  });

  // Write the RSS feed to a file as XML.
  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}
