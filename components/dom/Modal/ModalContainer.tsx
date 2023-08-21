import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const StyledModalContainer = styled('div')`
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100vh;
    
    background: rgba(0,0,0,0.3);
`

type Props = {}

const ModalContainer = ({children, ...props}: PropsWithChildren<Props>) => {
  return (
    <StyledModalContainer {...props}>{children}</StyledModalContainer>
  )
}

export default ModalContainer