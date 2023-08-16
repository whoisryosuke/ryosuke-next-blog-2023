import React, { PropsWithChildren } from 'react'
import Html from '../Html/Html'
import Box from '../Box/Box'
import Text from '../Text/Text'
import ThemeProvider from '../ThemeProvider/ThemeProvider'
import Copyright from '../Copyright/Copyright'
import { MetaTagsProps } from '../MetaTags/MetaTags'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import Paper from '../Paper/Paper'
import A11yCheck from '../A11yCheck'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import MainNavbar from '../MainNavbar/MainNavbar'
import GlobalStyles from '../GlobalStyles/GlobalStyles'

type Props = {
    transparent?: boolean;
}

const Page = ({children, transparent = false}: PropsWithChildren<Props>) => (
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
                <footer>
                    {/* <Copyright /> */}
                </footer>
            </Paper>
        </ThemeProvider>
    </StyleSheetManager>
)

export default Page