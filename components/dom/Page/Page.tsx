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

// Initialize the Focus Management library
init({
  //   debug: true,
  //   visualDebug: true,
  shouldFocusDOMNode: true,
});

type Props = {
  transparent?: boolean;
};

const Page = ({ children, transparent = false }: PropsWithChildren<Props>) => (
  <StyleSheetManager enableVendorPrefixes shouldForwardProp={isPropValid}>
    <ThemeProvider>
      <A11yCheck />
      <GlobalStyles />
      <Paper
        // display="flex"
        flexDirection="column"
        justifyContent="space-between"
        bg={transparent && "background"}
        style={{ flex: 1 }}
      >
        <main>
          <MainNavbar />
          <Box as="header" position="absolute" bottom={1} left={1}>
            <ThemeToggle />
          </Box>

          {children}
        </main>
        <footer>{/* <Copyright /> */}</footer>
      </Paper>
    </ThemeProvider>
  </StyleSheetManager>
);

export default Page;
