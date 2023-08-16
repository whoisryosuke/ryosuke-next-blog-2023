import React from 'react'
import Glass from '../Glass/Glass'
import Button from '../Button/Button'
import Stack from '../Stack/Stack'
import {BiHomeAlt,BiBook, BiGhost, BiHeadphone} from "react-icons/bi"
import styled from "styled-components"

type MenuOrientations = 'left' | 'bottom';

type MenuProps = {
    orientation: MenuOrientations;
}

const StyledMenu = styled(Glass)<MenuProps>`
    position: absolute;
    top:${({orientation}) => orientation == 'left' ? '20%' : 'auto'};
    left:${({orientation, theme}) => orientation == 'left' ? theme.space[5] : '50%'};
    bottom:${({orientation, theme}) => orientation == 'left' ? 'auto' : theme.space[5]};

    transform:translateX(${({orientation}) => orientation == 'left' ? '0' : '-50%'});
` 

const MainNavbar = ({orientation, ...props}: MenuProps) => {
  return (
    <StyledMenu px={6} py={3} orientation={orientation} borderRadius="round" {...props}>
        <Stack gap="12px" alignItems="center" vertical={orientation == 'left'}>
            <Button icon><BiHomeAlt /></Button>
            <Button icon><BiBook /></Button>
            <Button icon><BiGhost /></Button>
            <Button icon><BiHeadphone /></Button>
        </Stack>
    </StyledMenu>
  )
}

MainNavbar.defaultProps = {
    orientation: 'bottom'
}

export default MainNavbar