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
import WorkCard, { WorkCardProps } from "@components/dom/WorkCard/WorkCard";
import WindowHeader from "@components/dom/WindowHeader/WindowHeader";

const WORK_DATA: WorkCardProps[] = [
  {
    src: "/work/art/final-square-web.png",
    title: "Circles",
    date: "2023-09-13",
  },
  {
    src: "/work/art/glass-test1.png",
    title: "Glass Shader Experiments",
    date: "2023-09-26",
  },
  {
    src: "/work/art/abstract-pringle-r2-glass-final1-cam2.png",
    title: "Abstract Glass with Extra Long Title",
    date: "2023-10-03",
  },
  {
    video: {
      src: "/work/art/animation-540p-watermarked.mp4",
      width: 960 / 2,
      height: 540 / 2,
    },
    title: "Psy Tunnel",
    date: "2023-07-27",
  },
  {
    video: {
      src: "/work/art/bevy-midi-revolution-game1.mp4",
      width: 960 / 2,
      height: 540 / 2,
    },
    title: "Bevy MIDI Game Prototype",
    date: "2023-04-26",
    prototype: "https://codesandbox.com/",
  },
  {
    src: "/work/art/custom-final2-f206-50mm.png",
    title: "Sci-fi Floor",
    date: "2023-07-24",
  },
  {
    src: "/work/art/depthcore-final-r1-1.png",
    title: "DepthCore Layers",
    date: "2023-09-25",
  },
  {
    src: "/work/art/r1-final2.png",
    title: "DepthCore Experiment",
    date: "2023-09-26",
  },
  {
    src: "/work/art/Test6-Angle-Denoise.png",
    title: "Simulation Node Test",
    date: "2023-09-07",
  },
  {
    src: "/work/art/Test6-mml-psx-servbot.png",
    title: "Mega Man Legends Tribute",
    date: "2023-09-06",
  },
];

export default function WorkPage() {
  const { customizations, setUserTheme } = useAppStore();

  return (
    <PageWrapper>
      <Box p={4} maxWidth="80vw" margin="auto" mt={4}>
        <ScrollBox
          display="flex"
          flexDirection="column"
          height={"80vh"}
          paddingRight={3}
          hideScrollbar
        >
          <MasonryGrid>
            {WORK_DATA.map((work) => (
              <WorkCard {...work} date={new Date(Date.parse(work.date))} />
            ))}
          </MasonryGrid>
        </ScrollBox>
      </Box>
    </PageWrapper>
  );
}
