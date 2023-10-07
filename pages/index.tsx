import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import dynamic from "next/dynamic";
import Page from "@components/dom/Page/Page";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import Test from "@components/Test";
import React from "react";
import PageWrapper from "@components/dom/PageWrapper/PageWrapper";
import { useAppStore } from "@store/app";
import PocketStationScreenCanvas from "@components/3d/PocketStation/PocketStationScreenCanvas";

// Prefer dynamic import for production builds
// But if you have issues and need to debug in local development
// comment these out and import above instead
// https://github.com/pmndrs/react-three-next/issues/49
const Canvas = dynamic(() => import("@components/3d/Canvas"), {
  ssr: false,
});
const PocketStation = dynamic(
  () => import("@components/3d/PocketStationScene"),
  {
    ssr: false,
  }
);

export default function Index() {
  const { customizations } = useAppStore();
  return (
    <PageWrapper>
      <PocketStation customizations={customizations} />
      <PocketStationScreenCanvas />
    </PageWrapper>
  );
}
