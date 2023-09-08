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
  BiSidebar,
  BiArrowBack,
  BiArrowToRight,
  BiShare,
  BiFont,
  BiArrowToLeft,
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
import Container from "@components/dom/Container/Container";

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
        backgroundSize="repeat-x"
        backgroundPosition={`${
          customizations.theme.modal ? "100%" : "0%"
        } 100%`}
        minHeight="100vh"
        width="100%"
        zIndex={-420}
        position={"absolute"}
        top={0}
        left={0}
        style={{
          filter: "blur(1.5rem)",
          transition: "background-position 400ms ease-in",
        }}
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
          pt={{ mobile: 8, tablet: 10 }}
          mb={{ mobile: 8, tablet: 10 }}
          flex={1}
        >
          <Stack gap={"32px"}>
            <Box>
              <Glass p={4} borderRadius={"round"} mb={4}>
                <Stack gap="16px">
                  <Button solid onlyIcon icon={<BiSidebar />} />
                  <Button solid onlyIcon icon={<BiArrowToLeft />} disabled />
                  <Button solid onlyIcon icon={<BiArrowToRight />} disabled />
                  <Box flex={1} mr={3}>
                    <Input
                      value="The Blog Post"
                      icon={<BiBook />}
                      style={{ textAlign: "center" }}
                      disabled
                    />
                  </Box>
                  <Button solid onlyIcon icon={<BiShare />} />
                  <Button solid onlyIcon icon={<BiFont />} />
                  <Button solid onlyIcon icon={<BiFolder />} />
                </Stack>
              </Glass>
              <Container
                id="blog"
                background="white"
                borderRadius={3}
                overflow="hidden"
              >
                <ScrollBox
                  overflowY="auto"
                  flex={1}
                  height="70vh"
                  borderRadius={3}
                  p={8}
                >
                  <Headline id="test" color="black">
                    Blog title
                  </Headline>
                  {new Array(40).fill(0).map((_, index) => (
                    <>
                      <Headline color="black">Blog title</Headline>
                      <Paragraph key={index} color="black">
                        I made two identical apps, one with CSS in JS and one
                        with Webpack loading CSS files. I built both and compare
                        bundle size and load times around the app.
                      </Paragraph>
                      <Paragraph key={index} color="black">
                        I made two identical apps, one with CSS in JS and one
                        with Webpack loading CSS files. I built both and compare
                        bundle size and load times around the app.
                      </Paragraph>
                    </>
                  ))}
                  <Headline id="test" color="black">
                    Blog title
                  </Headline>
                </ScrollBox>
              </Container>
            </Box>
            <Box width={{ mobile: "100%", tablet: "400px" }}>
              <Glass id="toc" blur={3} overflow="hidden" p={5}>
                <Headline id="test" fontSize={2}>
                  Table of Contents
                </Headline>
                <Button
                  as="a"
                  href="#test"
                  // icon={<BiTime />}
                  justifyContent="flex-start"
                  style={{ paddingLeft: "8px" }}
                >
                  Heading 1
                </Button>
                <Button
                  as="a"
                  href="#test"
                  // icon={<BiTime />}
                  justifyContent="flex-start"
                  style={{ paddingLeft: "8px" }}
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
