import Link from "next/link";
import dynamic from "next/dynamic";
import Page from "@components/dom/Page/Page";
import Text from "@components/dom/Text/Text";
import React from "react";
import Glass from "@components/dom/Glass/Glass";
import Box from "@components/dom/Box/Box";
import GlassBordered from "@components/dom/Glass/GlassBordered";
import Stack from "@components/dom/Stack/Stack";
import Button from "@components/dom/Button/Button";
import IconButton from "@components/dom/IconButton/IconButton";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import {
  BiHomeAlt,
  BiBook,
  BiLogoMastodon,
  BiGhost,
  BiHeadphone,
} from "react-icons/bi";
import { useAppStore } from "store/app";
import { Theme } from "@theme/index";
import Slider from "@components/dom/Slider/Slider";
import Input from "@components/dom/Input/Input";
import { useToastStore } from "@store/toasts";
import ToastManager from "@components/dom/Toasts/ToastManager";
import PageWrapper from "@components/dom/PageWrapper/PageWrapper";
import ScrollBox from "@components/dom/ScrollBox/ScrollBox";
import Grid from "@components/dom/Grid/Grid";
import Image from "@components/dom/Image/Image";
import MasonryGrid from "@components/dom/MasonryGrid/MasonryGrid";

export default function WorkPage() {
  const { customizations, setUserTheme } = useAppStore();

  return (
    <PageWrapper>
      <Glass
        p={4}
        maxWidth="800px"
        margin="auto"
        mt={4}
        blur={4}
        borderRadius={4}
      >
        <ScrollBox display="flex" height={"80vh"}>
          <MasonryGrid>
            <Image src="/work/art/final-square-web.png" />
            <Box bg="red" flex={1} height={"200px"} />
            <Box bg="red" flex={1} height={"300px"} />
            <Box bg="red" flex={1} height={"200px"} />
            <Box bg="red" flex={1} height={"300px"} />
            <Box bg="red" flex={1} height={"300px"} />
            <Box bg="red" flex={1} height={"200px"} />
            <Box bg="red" flex={1} height={"300px"} />
            <Box bg="red" flex={1} height={"200px"} />
          </MasonryGrid>
        </ScrollBox>
      </Glass>
    </PageWrapper>
  );
}
