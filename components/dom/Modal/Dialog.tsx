import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const StyledDialog = styled('dialog')`
`

type Props = {}

const Dialog = ({children, ...props}: PropsWithChildren<Props>) => {
  return (
    <StyledDialog {...props}>{children}</StyledDialog>
  )
}

export default Dialog