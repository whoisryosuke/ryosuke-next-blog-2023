import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const StyledDialog = styled('dialog')`
    background:transparent;
    border:0;
`

type Props = {}

const Dialog = ({children, ...props}: PropsWithChildren<Props>) => {
  return (
    <StyledDialog {...props}>{children}</StyledDialog>
  )
}

export default Dialog