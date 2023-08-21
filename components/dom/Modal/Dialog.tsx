import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import DialogClose from './DialogClose'

const StyledDialog = styled('dialog')`
    position:absolute;
    top: ${({theme}) => theme.space[5]};
    background:transparent;
    border:0;
    display:block;
`
const DialogContent = styled('div')`
    z-index: 700;
    & > div {
        box-shadow: 0px 0px 42px rgba(0, 0, 0, 0.25);
    }
`

type Props = {
    onClose: () => void;
}

const Dialog = ({children, onClose, ...props}: PropsWithChildren<Props>) => {
  return (
    <StyledDialog {...props}>
        <DialogClose onClose={onClose} />
        <DialogContent>{children}</DialogContent>
    </StyledDialog>
  )
}

export default Dialog