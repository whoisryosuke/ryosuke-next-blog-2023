import Link from "next/link";
import dynamic from "next/dynamic";
import Page from "@components/dom/Page/Page";
import Text from "@components/dom/Text/Text";
import React, { useState } from "react";
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
import Modal from "@components/dom/Modal/Modal";

export default function ComponentsPage() {
  const { customizations, setUserTheme } = useAppStore();
    const [modalOpen, setModalOpen] = useState(true)

  const handleModal = () => {
    setModalOpen(true);
  }

  const onClose = () => {
    setModalOpen(false);
  }

  return (
    <>
      <Box
        backgroundImage="url(/images/room1.png)"
        backgroundSize="cover"
        backgroundPosition="bottom center"
        minHeight="100vh"
        width="100%"
        zIndex={-420}
        position={"absolute"}
        top={0}
        left={0}
        style={{ filter: "blur(1.5rem)" }}
      />
      <Box
        background="rgba(0,0,0,0.3)"
        minHeight="100vh"
        width="100%"
        zIndex={-419}
        position={"absolute"}
        top={0}
        left={0}
      />

      <Box minHeight="100vh" width="100%">
        <Box width="800px" margin="auto" p={3}>
          <Stack vertical>
            <Glass p={3}>
              <Stack>
                <Button onClick={handleModal}>Open Modal</Button>
                <Button>About Me</Button>
                <Modal isOpen={modalOpen} onClose={onClose}>
                    <Glass p={5}>
                        <Text color="textInverted">Modal Open</Text>
                    </Glass>
                </Modal>
              </Stack>
            </Glass>
            <Glass p={3}>
              <Button solid icon iconSize={{ width: "64px", height: "64px" }}>
                <BiLogoMastodon />
              </Button>
            </Glass>
            <Glass p={3}>
              <Stack alignItems="center">
                <Button icon>
                  <BiHomeAlt />
                </Button>
                <Button icon>
                  <BiBook />
                </Button>
                <Button icon>
                  <BiGhost />
                </Button>
                <Button icon>
                  <BiHeadphone />
                </Button>
                {/* <Button icon><BiLogoGithub /></Button> */}
                {/* <Button icon><BiLogoMastodon /></Button> */}
              </Stack>
            </Glass>
            <Glass p={5} blur={3}>
              <Text color="textInverted">Long text</Text>
            </Glass>
            <Glass p={5} blur={3}>
              <ToastManager />
            </Glass>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
