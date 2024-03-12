import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import { components as mdxComponents } from "@components/dom/MDXComponents/MDXComponents";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents(),
    ...components,
  };
}
