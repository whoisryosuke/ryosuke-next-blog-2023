import { isServer } from '@utils/next'
import React, { PropsWithChildren, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import ModalContainer from './ModalContainer'
import Dialog from './Dialog'

type Props = {
    isOpen: boolean;
    onClose: () => void;
}

const Modal = ({children, isOpen, onClose, ...props}: PropsWithChildren<Props>) => {
    const rootRef = useRef<Element | null>(null);

    // Grabs the root element for React's Portal
    useEffect(() => {
      if(!isServer()) {
        rootRef.current = document.getElementById("root-content")
      }
    }, [])
    
    // Close modal when user presses escape key
    // @see: https://w3.org/WAI/ARIA/apg/patterns/dialog-modal/#keyboardinteraction
    useEffect(() => {
        const closeModalKeyboardEsc = e => e.key === "Escape" && onClose();

        if(!isServer()) {
            document.body.addEventListener("keydown", closeModalKeyboardEsc);
        }
    
      return () => {
        if(!isServer()) {
            document.body.removeEventListener("keydown", closeModalKeyboardEsc);
        }
      }
    }, [onClose])
    
  
  return (
    isOpen && rootRef.current ? createPortal(<ModalContainer {...props}><Dialog onClose={onClose}>{children}</Dialog></ModalContainer>, rootRef.current) : null
  )
}

export default Modal