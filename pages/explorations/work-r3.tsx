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
import WorkCard from "@components/dom/WorkCard/WorkCard";
import WindowHeader from "@components/dom/WindowHeader/WindowHeader";
import { WorkCardProps } from "@components/dom/PortfolioApp/types";
import PortfolioApp from "@components/dom/PortfolioApp/PortfolioApp";
import { portfolio } from "content/portfolio/portfolio";

export default function WorkPage() {
  const { customizations, setUserTheme } = useAppStore();

  let index = 0;
  // Go through each year and loop through the items inside
  const work = Object.entries(portfolio).reduce((prev, [year, items]) => {
    // Sort the posts by date
    const sortedItems = items.sort((a, b) => {
      // Newest first (so b - a)
      return Date.parse(b.date) - Date.parse(a.date);
    });

    // Loop through each item and add the index
    const indexedItems = sortedItems.map((work) => {
      index += 1;
      return {
        ...work,
        id: index,
      };
    });

    prev = {
      ...prev,
      [year]: indexedItems,
    };

    return prev;
  }, {});

  return (
    <PageWrapper>
      <PortfolioApp work={work} />
    </PageWrapper>
  );
}
