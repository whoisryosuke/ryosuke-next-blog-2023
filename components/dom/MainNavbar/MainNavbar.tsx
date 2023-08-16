import React from 'react'
import Glass from '../Glass/Glass'
import Button from '../Button/Button'
import Stack from '../Stack/Stack'
import {BiHomeAlt,BiBook, BiGhost, BiHeadphone} from "react-icons/bi"
import styled, { css } from "styled-components"

type MenuOrientations = 'left' | 'bottom';

type MenuProps = {
    orientation: MenuOrientations;
}

const MenuLeftStyles = () => css<MenuProps>`
    top: 20%;
    left: ${({theme}) => theme.space[5]};
`

const MenuBottomStyles = () => css<MenuProps>`
    left: 50%;
    bottom: ${({theme}) => theme.space[5]};

    transform:translateX(${({orientation}) => orientation == 'left' ? '0' : '-50%'});
`

const StyledMenu = styled(Glass)<MenuProps>`
    position: absolute;
    ${({orientation}) => orientation == 'left' ? MenuLeftStyles : MenuBottomStyles};

` 

const MainNavbar = ({orientation, ...props}: MenuProps) => {
  return (
    <StyledMenu px={orientation == 'left' ? 3 : 6} py={orientation == 'left' ? 6 : 3} orientation={orientation} borderRadius="round" {...props}>
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