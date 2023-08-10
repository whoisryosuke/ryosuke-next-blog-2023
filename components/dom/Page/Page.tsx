import React, { PropsWithChildren } from 'react'
import Html from '../Html/Html'
import Box from '../Box/Box'
import Text from '../Text/Text'
import ThemeProvider from '../ThemeProvider/ThemeProvider'
import Copyright from '../Copyright/Copyright'
import { MetaTagsProps } from '../MetaTags/MetaTags'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

type Props = {
    title: string;
    meta: MetaTagsProps;
}

const Page = ({children, title, meta}: PropsWithChildren<Props>) => {
  return (
    <ThemeProvider>
        <Html title={title} meta={meta}>
                <Box
                    // display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    bg="background"
                    style={{ flex: 1 }}
                >
                    <main>
                        <header>
                            <ThemeToggle />
                            <Box><Text>Test</Text></Box>
                            <Box>Test</Box>
                            <Box>Test</Box>
                            <Box>Test</Box>
                            <Box>Test</Box>
                        </header>

                        {children}
                    </main>
                    <footer>
                        {/* <Copyright /> */}
                    </footer>
                </Box>
        </Html>
    </ThemeProvider>
  )
}

export default Page