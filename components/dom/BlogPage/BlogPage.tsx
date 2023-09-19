import React, { PropsWithChildren } from "react";
import Glass from "@components/dom/Glass/Glass";
import Box from "@components/dom/Box/Box";
import Stack from "@components/dom/Stack/Stack";
import Button from "@components/dom/Button/Button";
import Headline from "@components/dom/Headline/Headline";
import ScrollBox from "@components/dom/ScrollBox/ScrollBox";
import Paragraph from "@components/Paragraph/Paragraph";
import ThemeProvider from "../ThemeProvider/ThemeProvider";
import {
  BiBook,
  BiFolder,
  BiSidebar,
  BiArrowToRight,
  BiShare,
  BiFont,
  BiArrowToLeft,
} from "react-icons/bi";
import Input from "../Input/Input";
import { useAppStore } from "@store/app";

type Props = {
  title: string;
};

const BlogPage = ({ children, title, ...props }: PropsWithChildren<Props>) => {
  const { customizations } = useAppStore();

  const customTheme = customizations.theme.highContrastBlog
    ? {
        colors: {
          glass: "rgba(245,245,245,1.0)",
          text: "rgba(10,10,10,1.0)",
        },
      }
    : {};

  return (
    <Box
      width={{ mobile: "100%", tablet: "80vw" }}
      // maxWidth="1200px"
      margin="auto"
      pt={{ mobile: 6, tablet: 8 }}
      mb={{ mobile: 8, tablet: 10 }}
      flex={1}
      {...props}
    >
      <Stack gap={"32px"} justifyContent="center">
        <Box maxWidth="1200px">
          <Glass p={4} borderRadius={"round"} mb={4}>
            <Stack gap="16px" vertical>
              <Button solid onlyIcon icon={<BiSidebar />} mr={3} />
              <Button solid onlyIcon icon={<BiArrowToLeft />} disabled mr={3} />
              <Button
                solid
                onlyIcon
                icon={<BiArrowToRight />}
                disabled
                mr={3}
              />
              <Box flex={1} mr={3}>
                <Input
                  value="The Blog Post"
                  icon={<BiBook />}
                  style={{ textAlign: "center" }}
                  disabled
                />
              </Box>
              <Button solid onlyIcon icon={<BiShare />} mr={3} />
              <Button solid onlyIcon icon={<BiFont />} mr={3} />
              <Button solid onlyIcon icon={<BiFolder />} mr={3} />
            </Stack>
          </Glass>
          <ThemeProvider theme={customTheme}>
            <Glass id="blog" blur={4} borderRadius={3} overflow="hidden">
              <ScrollBox
                overflowY="auto"
                flex={1}
                height="80vh"
                borderRadius={10}
                p={{ mobile: 5, tablet: 8 }}
              >
                {children}
              </ScrollBox>
            </Glass>
          </ThemeProvider>
        </Box>
        <Box flex={1} opacity={{ mobile: 0, tablet: 1 }}>
          <Glass id="toc" blur={3} overflow="hidden" p={4}>
            <Headline id="test" fontSize={2}>
              Table of Contents
            </Headline>
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
  );
};

export default BlogPage;
