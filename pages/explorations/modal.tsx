import Text from "@components/dom/Text/Text";
import React, { useState } from "react";
import Glass from "@components/dom/Glass/Glass";
import Box from "@components/dom/Box/Box";
import Stack from "@components/dom/Stack/Stack";
import Button from "@components/dom/Button/Button";
import {
  BiHomeAlt,
  BiBook,
  BiLogoMastodon,
  BiGhost,
  BiHeadphone,
} from "react-icons/bi";
import { useAppStore } from "store/app";
import ToastManager from "@components/dom/Toasts/ToastManager";
import Modal from "@components/dom/Modal/Modal";
import PageWrapper from "@components/dom/PageWrapper/PageWrapper";

export default function ComponentsPage() {
  const { customizations, setUserTheme, toggleModal } = useAppStore();

  const handleModal = () => {
    toggleModal(true);
  };

  const onClose = () => {
    toggleModal(false);
  };

  return (
    <PageWrapper>
      <Box width="800px" margin="auto" py={8}>
        <Stack vertical>
          <Glass p={3}>
            <Stack>
              <Button onClick={handleModal}>Open Modal</Button>
              <Button>About Me</Button>
              <Modal isOpen={customizations.theme.modal} onClose={onClose}>
                <Glass width="400px" p={5} modal>
                  <Text color="textInverted">Modal Open</Text>
                  <Button>Test</Button>
                </Glass>
              </Modal>
            </Stack>
          </Glass>
          <Glass p={3}>
            <Button
              solid
              icon={<BiLogoMastodon />}
              onlyIcon
              iconSize={{ width: "64px", height: "64px" }}
            />
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
          <Glass p={5} blur={3}>
            <ToastManager />
          </Glass>
        </Stack>
      </Box>
    </PageWrapper>
  );
}
