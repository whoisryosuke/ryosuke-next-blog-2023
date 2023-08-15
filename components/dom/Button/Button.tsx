import React, { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react'
import styled from 'styled-components'
import Text from '../Text/Text'

type ButtonProps = DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > & {
    solid?: boolean;
    icon?: boolean;
    iconSize?: {
      width: React.CSSProperties['width'];
      height: React.CSSProperties['height'];
    }
}

const StyledButton = styled('button')<ButtonProps>`
  background: ${({theme, solid}) => solid ? theme.colors.button : 'transparent'};
  mix-blend-mode: screen;
  border-radius: 32px;
  border:0;
  padding: ${({theme, icon}) => icon ? theme.space[1] : `${theme.space[1]} ${theme.space[4]}`};
  
  &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -1px -1px 0 -1px;
      border-radius: inherit;
      background: ${({theme}) => theme.colors.glass};
      box-shadow: inset 1px 1px 1px rgba(255,255,255,0.35);
  }

  /* Icon */
  & svg:first-child {
    width: ${({iconSize}) => iconSize.width};
    height: ${({iconSize}) => iconSize.height};
  }

`

const Button = ({children, ...props}: PropsWithChildren<ButtonProps>) => {
  return(<StyledButton {...props}><Text color="textInverted">{children}</Text></StyledButton>)
}

Button.defaultProps = {
  iconSize: {
    width: '32px',
    height: '32px',
  }
}

export default Button