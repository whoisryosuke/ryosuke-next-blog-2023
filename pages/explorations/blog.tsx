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
  BiDotsHorizontal,
  BiMusic,
  BiMicrophone,
  BiTime,
  BiFolder,
  BiBong,
  BiUser,
} from "react-icons/bi";
import { useAppStore } from "store/app";
import ToastManager from "@components/dom/Toasts/ToastManager";
import Modal from "@components/dom/Modal/Modal";
import Headline from "@components/dom/Headline/Headline";
import Input from "@components/dom/Input/Input";
import Image from "@components/dom/Image/Image";
import Grid from "@components/dom/Grid/Grid";
import ScrollBox from "@components/dom/ScrollBox/ScrollBox";
import Paragraph from "@components/Paragraph/Paragraph";

export default function ComponentsPage() {
  const { customizations, setUserTheme, toggleModal } = useAppStore();

  const handleModal = () => {
    toggleModal(true);
  };

  const onClose = () => {
    toggleModal(false);
  };

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
        <Box
          width="80%"
          maxWidth="1200px"
          margin="auto"
          py={{ mobile: 8, tablet: 10 }}
          flex={1}
        >
          <Stack gap={"32px"}>
            <Glass id="blog" blur={4} borderRadius={3} overflow="hidden" p={5}>
              <ScrollBox
                overflowY="auto"
                flex={1}
                height="80vh"
                borderRadius={10}
              >
                <Headline>Blog title</Headline>
                {new Array(40).fill(0).map((_, index) => (
                  <Paragraph key={index}>
                    I made two identical apps, one with CSS in JS and one with
                    Webpack loading CSS files. I built both and compare bundle
                    size and load times around the app.
                  </Paragraph>
                ))}
                <Headline id="test">Blog title</Headline>
              </ScrollBox>
            </Glass>
            <Box width={{ mobile: "100%", tablet: "400px" }}>
              <Glass id="toc" blur={3} overflow="hidden" p={4}>
                <Button
                  as="a"
                  href="#test"
                  // icon={<BiTime />}
                  justifyContent="flex-start"
                >
                  Heading 1
                </Button>
                <Button
                  as="a"
                  href="#test"
                  // icon={<BiTime />}
                  justifyContent="flex-start"
                >
                  Heading 2
                </Button>
              </Glass>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
