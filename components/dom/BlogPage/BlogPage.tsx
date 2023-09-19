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
import PageWrapper from "../PageWrapper/PageWrapper";

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
    <PageWrapper>
      <Box
        width={{ mobile: "100%", tablet: "80vw" }}
        // maxWidth="1200px"
        margin="auto"
        pt={{ mobile: 6, tablet: 8 }}
        mb={{ mobile: 8, tablet: 10 }}
        flex={1}
        {...props}
      >
        <Box
          display="flex"
          flexDirection={{ mobile: "column", computer: "row" }}
          justifyContent="center"
        >
          <Box
            minWidth="200px"
            maxWidth="1200px"
            flex={1}
            marginRight={{ mobile: 0, computer: 4 }}
            marginBottom={{ mobile: 4, computer: 0 }}
          >
            <Glass p={4} borderRadius={"round"} mb={4}>
              <Box display="flex">
                <Button solid onlyIcon icon={<BiSidebar />} mr={3} />
                <Button
                  solid
                  onlyIcon
                  icon={<BiArrowToLeft />}
                  disabled
                  mr={3}
                />
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
              </Box>
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
          <Box minWidth="250px" opacity={{ mobile: 0, tablet: 1 }}>
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
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default BlogPage;
