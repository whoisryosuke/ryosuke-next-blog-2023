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

type Props = {
    title: string;
    meta?: MetaTagsProps;
    transparent?: boolean;
}

const Page = ({children, title, meta, transparent = false}: PropsWithChildren<Props>) => (
    <ThemeProvider>
        <Html title={title} meta={meta}>
            <A11yCheck />
            <Paper
                // display="flex"
                flexDirection="column"
                justifyContent="space-between"
                bg={transparent && "background"}
                style={{ flex: 1 }}
            >
                <main>
                    <Box as="header" position="absolute" bottom={1} left={1}>
                        <ThemeToggle />
                    </Box>

                    {children}
                </main>
                <footer>
                    {/* <Copyright /> */}
                </footer>
            </Paper>
        </Html>
    </ThemeProvider>
)

export default Page