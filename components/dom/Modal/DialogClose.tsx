import React from 'react'
import { BiXCircle } from "react-icons/bi";
import Button from '../Button/Button';
import styled from 'styled-components';

const StyledDialogClose = styled('div')`
    position: absolute;
    top: ${({theme}) => theme.space[5]};
    right: ${({theme}) => theme.space[5]};

    opacity:0.5;

    &:hover {
      opacity: 1;
    }
    
    z-index: 710;

  /* Animation */
  @media (prefers-reduced-motion: no-preference) {
    transition-property: opacity;
    transition-duration: 420ms;
  }
`

type Props = {
    onClose: () => void
}

const DialogClose = ({onClose, ...props}: Props) => {
  return (
    <StyledDialogClose {...props}><Button icon onClick={onClose}><BiXCircle /></Button></StyledDialogClose>
  )
}

export default DialogClose