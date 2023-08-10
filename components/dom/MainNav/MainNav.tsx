import React, { PropsWithChildren } from "react";
import { useMainNav } from "src/context/MainNavContext";
import useStore from "src/store";
import Box from "../Box/Box";
import Link from "../Link/Link";
import Stack from "../Stack/Stack";
import Text from "../Text/Text";
import { navContainerStyle, navItemStyle, navLayoutStyle } from "./MainNav.css";

type MainNavItemProps = {
  href: string;
};

const MainNavItem = ({
  href,
  children,
  ...props
}: PropsWithChildren<MainNavItemProps>) => {
  return (
    <a href={href} className={navItemStyle} {...props}>
      <Text fontFamily="heading" fontSize={2}>
        {children}
      </Text>
    </a>
  );
};

type Props = {};

const MainNav = (props: Props) => {
  const { mainNav, setMainNav } = useStore();

  const clearHover = () => {
    setMainNav("none");
  };

  return (
    <Box className={navLayoutStyle}>
      <Box as="nav" className={navContainerStyle}>
        <Stack
          gap="36px"
          flexDirection={{
            mobile: "column",
            tablet: "row",
          }}
        >
          <Stack
            gap="36px"
            flexDirection={{
              tablet: "row",
            }}
          >
            <MainNavItem
              href="/blog"
              onMouseEnter={() => setMainNav("writing")}
              onMouseLeave={clearHover}
            >
              Writing
            </MainNavItem>
            <MainNavItem
              href="/work"
              onMouseEnter={() => setMainNav("work")}
              onMouseLeave={clearHover}
            >
              Work
            </MainNavItem>
          </Stack>
          <Stack
            gap="36px"
            flexDirection={{
              tablet: "row",
            }}
          >
            <MainNavItem
              href="/resources"
              onMouseEnter={() => setMainNav("resources")}
              onMouseLeave={clearHover}
            >
              Resources
            </MainNavItem>
            <MainNavItem
              href="/playlist"
              onMouseEnter={() => setMainNav("playlist")}
              onMouseLeave={clearHover}
            >
              Playlist
            </MainNavItem>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default MainNav;
