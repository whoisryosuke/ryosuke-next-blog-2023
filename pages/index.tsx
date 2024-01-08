import React from "react";
import PageWrapper from "@components/dom/PageWrapper/PageWrapper";
import { useAppStore } from "@store/app";
import AboutCard from "@components/dom/AboutCard/AboutCard";
import dynamic from "next/dynamic";
import PocketStationScreenCanvas from "@components/3d/PocketStation/PocketStationScreenCanvas";
import PocketStationLoadingState from "@components/3d/PocketStation/PocketStationLoadingState";
import Head from "@components/dom/Head/Head";
import Box from "@components/dom/Box/Box";

// Prefer dynamic import for production builds
// But if you have issues and need to debug in local development
// comment these out and import above instead
// https://github.com/pmndrs/react-three-next/issues/49
const PocketStation = dynamic(
  () => import("@components/3d/PocketStationScene"),
  {
    ssr: false,
    loading: () => <PocketStationLoadingState />,
  }
);

export default function Index() {
  const { customizations } = useAppStore();
  return (
    <>
      <Head title="The Blog and Portfolio of Ryosuke" />
      <Box position="absolute" top="0" left="0" width="100%" height="100%">
        <PocketStation customizations={customizations} />
      </Box>
      <PageWrapper>
        <AboutCard />
      </PageWrapper>
    </>
  );
}
