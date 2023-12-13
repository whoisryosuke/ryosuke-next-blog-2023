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

export default function ComponentsPage() {
  const { customizations, setUserTheme } = useAppStore();
  const { addToast } = useToastStore();

  const handleToast = () => {
    addToast({
      content: {
        title: "Test",
        message: "420 blaze it",
        icon: "BONG",
      },
      time: new Date().getTime(),
      status: "show",
      type: "general",
    });
  };

  return (
    <PageWrapper>
      <Box width="800px" margin="auto" p={3}>
        <Stack vertical>
          <Glass p={3}>
            <Stack>
              <Button onClick={handleToast}>Create toast</Button>
              <Button>About Me</Button>
            </Stack>
          </Glass>
          <Glass p={3}>
            <Button solid onlyIcon iconSize={{ width: "64px", height: "64px" }}>
              <BiLogoMastodon />
            </Button>
          </Glass>
          <Glass p={3}>
            <Stack alignItems="center">
              <Button onlyIcon>
                <BiHomeAlt />
              </Button>
              <Button onlyIcon>
                <BiBook />
              </Button>
              <Button onlyIcon>
                <BiGhost />
              </Button>
              <Button onlyIcon>
                <BiHeadphone />
              </Button>
              {/* <Button icon><BiLogoGithub /></Button> */}
              {/* <Button icon><BiLogoMastodon /></Button> */}
            </Stack>
          </Glass>
          <Glass p={5} blur={3}>
            <Text color="textInverted">Long text</Text>
          </Glass>
          {/* <ToastManager /> */}
        </Stack>
      </Box>
    </PageWrapper>
  );
}
