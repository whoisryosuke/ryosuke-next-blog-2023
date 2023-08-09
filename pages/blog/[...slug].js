import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import CustomLink from "../../components/CustomLink";
import Layout from "../../components/Layout";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import("../../components/TestComponent")),
  Head,
};

export default function PostPage({ source, frontMatter, slug }) {
  return (
    <Layout>
      <header>
        <nav>
          <Link href="/" legacyBehavior>
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <main>
        <MDXRemote {...source} components={components} />
      </main>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }

        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  );
}

// Grabs MDX content based on slug passed in URL params
export const getStaticProps = async ({ params }) => {
  console.log("page slug", params.slug, params.slug.join("/"));

  // We add back the `blog/` to the path
  const slugs = ["blog", ...params.slug];
  const slugPath = slugs.join("/");

  let postFilePath;
  // Check if it exists
  const fullPath = path.join(POSTS_PATH, `${slugPath}.mdx`);
  if (fs.existsSync(fullPath)) {
    postFilePath = fullPath;
  }
  // Try the `/index` version instead
  const indexPath = path.join(POSTS_PATH, `${slugPath}/index.mdx`);
  if (fs.existsSync(indexPath)) {
    postFilePath = indexPath;
  }

  if (!postFilePath) {
    console.log("no post found!!");
    throw Error("No post found");
  }

  console.log("post file path", postFilePath);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      slug: slugPath,
    },
  };
};

// Generate a path for each MDX file
export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove root path
    .map((path) => path.replace(POSTS_PATH, ""))
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((path) => {
      // We create a URL friendly slug here
      // Since some MDX files are `index.mdx` and the folder is the actual title
      const slug = path
        .replace(/^\/|\/$/g, "") // Remove before/after trailing slashes
        .replace("/index", "") // Trim off index
        .split("/") // Create an array format - required for getStaticProps above
        .filter((slug) => slug !== "blog"); // Filter out the blog folder

      return { params: { slug } };
    });

  return {
    paths,
    fallback: false,
  };
};
