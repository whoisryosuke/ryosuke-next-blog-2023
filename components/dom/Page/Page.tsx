import React, { PropsWithChildren } from 'react'
import Html from '../Html/Html'
import Box from '../Box/Box'
import Text from '../Text/Text'
import ThemeProvider from '../ThemeProvider/ThemeProvider'
import Copyright from '../Copyright/Copyright'
import { MetaTagsProps } from '../MetaTags/MetaTags'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import Paper from '../Paper/Paper'

type Props = {
    title: string;
    meta?: MetaTagsProps;
}

const Page = ({children, title, meta}: PropsWithChildren<Props>) => {
  return (
    <ThemeProvider>
        <Html title={title} meta={meta}>
                <Paper
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
                            <Box><Text>Test</Text></Box>
                            <Box><Text>Test</Text></Box>
                            <Box><Text>Test</Text></Box>
                            <Box><Text>Test</Text></Box>
                        </header>

                        {children}
                    </main>
                    <footer>
                        {/* <Copyright /> */}
                    </footer>
                </Paper>
        </Html>
    </ThemeProvider>
  )
}

export default Page