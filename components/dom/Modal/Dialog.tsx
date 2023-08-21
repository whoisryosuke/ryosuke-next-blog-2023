import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import DialogClose from './DialogClose'
import { motion } from 'framer-motion'

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

const ANIMATION_INITAL = { scale: 1, opacity: 0, translateY: '50px', translateZ: '50px', transformOrigin: 'bottom center' };
const ANIMATION_EXIT = { scale: 1.1, opacity: 0, translateY: '-50px' };

const Dialog = ({children, onClose, ...props}: PropsWithChildren<Props>) => {
  return (
    <motion.div
      initial={ANIMATION_INITAL}
      animate={{ scale: 1, opacity: 1, translateY: '0px', translateZ: '0', transformOrigin: 'bottom center' }}
      exit={ANIMATION_INITAL}
      transition={{
        duration: 0.42,
        ease: "easeInOut",
      }}
    >
        <StyledDialog {...props}>
            <DialogClose onClose={onClose} />
            <DialogContent>{children}</DialogContent>
        </StyledDialog>
    </motion.div>
  )
}

export default Dialog