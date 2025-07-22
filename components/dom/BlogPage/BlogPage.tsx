import React, { PropsWithChildren, useEffect, useRef } from "react";
import Glass from "@components/dom/Glass/Glass";
import Box from "@components/dom/Box/Box";
import Button from "@components/dom/Button/Button";
import Headline from "@components/dom/Headline/Headline";
import ScrollBox from "@components/dom/ScrollBox/ScrollBox";
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
import { useBlogStore } from "@store/blog";
import Head from "../Head/Head";
import { useRouter } from "next/router";
import Link from "next/link";
import { H1, H2 } from "../Headline/Headers";
import { fromUnixTime } from "date-fns";
import SocialSlider from "../AboutCard/SocialSlider";
import BlogSocial from "../BlogSocial/BlogSocial";

type Props = {
  title: string;
};

const BlogPage = ({ children, ...props }: PropsWithChildren<Props>) => {
  const router = useRouter();
  const { openModal, modalName, customizations, theme } = useAppStore();
  const { title, tableOfContents, slug } = useBlogStore();
  const boxRef = useRef(null);
  const isLightTheme = theme == "light";

  useEffect(() => {
    boxRef?.current?.scrollTo(0, 0);
  }, [router.pathname]);

  const customTheme = customizations.theme.highContrastBlog
    ? {
        colors: {
          glass: isLightTheme ? "rgba(245,245,245,1.0)" : "rgba(5,5,5,1.0)",
          text: isLightTheme ? "rgba(10,10,10,1.0)" : "rgba(240,240,240,1.0)",
        },
      }
    : {};

  const handleBackButton = () => {
    history.back();
  };
  const handleForwardButton = () => {
    history.forward();
  };

  const handleCustomizationModal = () => {
    openModal("customization");
  };

  const handleShare = () => {
    navigator.share({
      url: slug
        ? `https://whoisryosuke.com/blog/${slug}`
        : "https://whoisryosuke.com/",
      title: title ?? "whoisryosuke",
      text: "The personal blog and portfolio of Ryosuke",
    });
  };

  return (
    <PageWrapper>
      <Box
        width={{ mobile: "100%", tablet: "80vw" }}
        // maxWidth="1200px"
        margin="auto"
        pt={{ mobile: 4, tablet: 6 }}
        // mb={{ mobile: 8, tablet: 10 }}
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
                {/* <Button solid onlyIcon icon={<BiSidebar />} mr={3} /> */}
                <Button
                  solid
                  onlyIcon
                  icon={<BiArrowToLeft />}
                  mr={3}
                  onClick={handleBackButton}
                  display={{ default: "none", tablet: "inherit" }}
                  title="Go to previous page in history"
                />
                <Button
                  solid
                  onlyIcon
                  icon={<BiArrowToRight />}
                  mr={3}
                  onClick={handleForwardButton}
                  display={{ default: "none", tablet: "inherit" }}
                  title="Go to next page in history"
                />
                <Box flex={1} mr={3}>
                  <Input
                    value={title}
                    icon={<BiBook />}
                    style={{ textAlign: "center" }}
                    disabled
                  />
                </Box>
                <Button
                  solid
                  onlyIcon
                  icon={<BiShare />}
                  mr={3}
                  onClick={handleShare}
                  display={{ default: "none", tablet: "inherit" }}
                  title="Popup the share menu"
                />
                <Button
                  solid
                  onlyIcon
                  icon={<BiFont />}
                  mr={3}
                  onClick={handleCustomizationModal}
                  display={{ default: "none", tablet: "inherit" }}
                  title="Customize the blog appearance"
                />
                <Button
                  as={Link}
                  // @ts-ignore hard to image I know
                  href="/blog"
                  solid
                  onlyIcon
                  icon={<BiFolder />}
                  mr={3}
                  display={{ default: "none", tablet: "inherit" }}
                  title="See all blog posts"
                />
              </Box>
            </Glass>
            <ThemeProvider
              // @ts-ignore Ideally each theme prop should be Partial<>
              theme={customTheme}
            >
              <Glass id="blog" blur={4} borderRadius={3} overflow="hidden">
                <ScrollBox
                  ref={boxRef}
                  overflowY="auto"
                  flex={1}
                  height="80vh"
                  borderRadius={3}
                  p={{ mobile: 5, tablet: 8 }}
                >
                  <H1 mt={0}>{title}</H1>
                  {children}
                  <Box>
                    <H2>Connect</H2>
                    <BlogSocial />
                  </Box>
                  <div style={{ height: 50 }} />
                </ScrollBox>
              </Glass>
            </ThemeProvider>
          </Box>
          <Box
            minWidth="250px"
            opacity={tableOfContents.length > 0 ? { mobile: 0, tablet: 1 } : 0}
            display={{ default: "none", computer: "block" }}
          >
            <Glass id="toc" blur={3} overflow="hidden" p={4}>
              <Headline id="test" fontSize={2}>
                Table of Contents
              </Headline>
              {tableOfContents.map((tocItem, index) => (
                <Button
                  key={`${tocItem.slug}${tocItem.level}`}
                  as="a"
                  // @ts-ignore
                  href={`#${tocItem.slug}`}
                  // icon={<BiTime />}
                  justifyContent="flex-start"
                  marginLeft={tocItem.level * 2}
                >
                  {tocItem.title}
                </Button>
              ))}
            </Glass>
          </Box>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default BlogPage;
