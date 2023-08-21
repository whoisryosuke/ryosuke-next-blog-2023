import { AnimatePresence } from 'framer-motion'
import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const StyledModalContainer = styled('div')`
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    z-index: 999;
    
    /* background: rgba(0,0,0,0.3); */
`

type Props = {
    isOpen: boolean;
}

const ModalContainer = ({children, isOpen, ...props}: PropsWithChildren<Props>) => {
  return (
    <AnimatePresence>
        {isOpen && <StyledModalContainer {...props}>{children}</StyledModalContainer>}
    </AnimatePresence>
  )
}

export default ModalContainer