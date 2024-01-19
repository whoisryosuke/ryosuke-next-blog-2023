import React, { PropsWithChildren } from "react";
import Box from "../Box/Box";
import ThemeProvider from "../ThemeProvider/ThemeProvider";
import Copyright from "../Copyright/Copyright";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Paper from "../Paper/Paper";
import A11yCheck from "../A11yCheck";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import MainNavbar from "../MainNavbar/MainNavbar";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { init } from "@noriginmedia/norigin-spatial-navigation";
import GlobalModals from "../GlobalModals/GlobalModals";
import ToastManager from "../Toasts/ToastManager";
import { useAppStore } from "@store/app";
import InputManager from "../InputManager/InputManager";

// Initialize the Focus Management library
init({
  //   debug: true,
  //   visualDebug: true,
  shouldFocusDOMNode: true,
});

type Props = {
  transparent?: boolean;
};

const Page = ({ children, transparent = false }: PropsWithChildren<Props>) => {
  const { customizations } = useAppStore();

  return (
    <StyleSheetManager enableVendorPrefixes shouldForwardProp={isPropValid}>
      <ThemeProvider>
        <A11yCheck />
        <ThemeToggle />
        <GlobalStyles />
        <Paper
          id="root-content"
          // display="flex"
          flexDirection="column"
          justifyContent="space-between"
          bg={transparent && "background"}
          style={{ flex: 1, perspective: "none" }}
        >
          <main>
            <MainNavbar orientation="left" />

            <Box minHeight="100vh" width="100%" position="relative">
              <Box
                backgroundImage="url(/images/pexels-pixabay-279719.jpg)"
                backgroundSize="cover"
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
                backgroundColor="background_overlay"
                minHeight="100vh"
                width="100%"
                zIndex={-419}
                position={"absolute"}
                top={0}
                left={0}
              />
              {children}
            </Box>

            <ToastManager />
          </main>
          <footer>{/* <Copyright /> */}</footer>
        </Paper>
        <GlobalModals />
      </ThemeProvider>
      <InputManager />
    </StyleSheetManager>
  );
};

export default Page;
