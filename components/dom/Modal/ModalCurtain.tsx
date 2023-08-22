import React from 'react'
import styled from 'styled-components'

const StyledModalCurtain = styled('div')`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    z-index:-1;
`

type Props = {
    onClose: () => void
}

const ModalCurtain = ({ onClose }: Props) => {
  return (
    <StyledModalCurtain onClick={onClose} />
  )
}

export default ModalCurtain