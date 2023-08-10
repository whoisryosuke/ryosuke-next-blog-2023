import React, { PropsWithChildren } from 'react'
import Box, { BoxProps } from '../Box/Box'

type Props = BoxProps & {}

const Paper = ({children, ...props}: PropsWithChildren<Props>) => {
  return (
    <Box background="background" {...props}>{children}</Box>
  )
}

export default Paper