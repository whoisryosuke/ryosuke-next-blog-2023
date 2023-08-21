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

    useEffect(() => {
      if(!isServer()) {
        rootRef.current = document.getElementById("root-content")
      }
    }, [])
    
  
  return (
    isOpen && rootRef.current ? createPortal(<ModalContainer {...props}><Dialog>{children}</Dialog></ModalContainer>, rootRef.current) : <></>
  )
}

export default Modal