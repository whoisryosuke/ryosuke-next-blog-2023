# Ryosuke Blog and Portfolio

This is the blog and portfolio of Ryosuke Hana circa 2024.

## Getting Started

1. Clone repo.
1. `yarn` to install dependencies.
1. `yarn dev` to spin up the site.
1. Visit the app: http://localhost:1420

## How it works

### Content

Most content is a JSON file in the `/content/` folder, that's read by a page inside the `/pages/` folder.

### MDX

All long form content on the website is powered by MDX. MDX is a superset of Markdown that enabled you to use JavaScript and React. [Learn more here.](https://mdxjs.com/)

I use [`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote) to load the MDX remotely from the [/content/](/content/) folder. This allows us to control the rendering of the MDX better at scale, like parsing frontmatter. The MDX parser built in with NextJS is a bit more strict and requires strange workarounds that would've required massive changes to years worth of content - so I opted for better support now (and in the long run).

However, I do use NextJS MDX parser for specific use cases. When I need to support writing inline React components (like P5JS visualizations), the MDX file is placed inside the [/pages/](/pages/) directory. `next-mdx-remote` [doesn't support "import/export" of React components](https://github.com/hashicorp/next-mdx-remote?tab=readme-ov-file#import--export), so any component used in the MDX file needs to be explicitly listed in the [`MDXComponents`](/components/dom/MDXComponents/MDXComponents.tsx). This process sucks when you want to create one-off example React components - which is why some pages use the NextJS parser.

All this said, when **creating a new NextJS-powered MDX page**, make sure to include the frontmatter in a YAML format **_and_** exported to a layout component:

```mdx
---
title: Intro to Visualizing Audio Programming
date: "2024-02-26"
tags: ["blender", "ui", "tips"]
cover_image: "./how-i-made-the-render-buddy-blender-plugin.png"
---

import dynamic from "next/dynamic";
export const BlogMDXWrapper = dynamic(
  () => import("@components/dom/BlogMDXWrapper/BlogMDXWrapper"),
  { ssr: false }
);
export default function Layout({children}) {
  const frontmatter = {
    title: "Intro to Visualizing Audio Programming",
    date: "2024-03-12",
    section: "blog",
    tags: ["blender", "ui", "tips"],
    cover_image: "./how-i-made-the-render-buddy-blender-plugin.png",
  }
  return <BlogMDXWrapper frontMatter={frontmatter} slug="test-mdx">{children}</BlogMDXWrapper>;

}
```

### MDX Page Flow

1. Content is written in `/content/` or `/pages/` in MDX files.
1. Content is loaded based on the right route.

- The `/pages/blog/[...slug].tsx` grabs pages from `/content/`
- Or the direct MDX file is loaded in the `/pages/`

1. The page is wrapped in `<MDXBlogWrapper>`, which handles setting the page title in the HTML metadata and UI (like the faux URL bar).
1. The whole page is wrapped in a `<BlogPage>` component as well, which happens on the `/pages/app.tsx` level (it checks if route is blog and swaps layout).

### MDX Images

All images in MDX are relative to the file. So if you do `[Image here](./some-image.png)` in a blog post at `https://whoisryosuke.com/blog/2024/blender-rendering-optimization-tips`, the images will be at `https://whoisryosuke.com/blog/2024/blender-rendering-optimization-tips/some-image.png`.

You can find all blog images inside the `/public/` folder in a subdirectory that matches the content (e.g. `public\blog\2024\blender-rendering-optimization-tips\Untitled.png`).
