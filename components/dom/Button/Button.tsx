import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import styled from 'styled-components'
import Text from '../Text/Text'

type ButtonProps = DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > & {

}

const StyledButton = styled('button')<ButtonProps>`
  background: ${({theme}) => theme.colors.button};
  mix-blend-mode: screen;
  border-radius: 32px;
  border:0;
  padding: ${({theme}) => `${theme.space[1]} ${theme.space[4]}`};
`

const Button = ({children, ...props}) => {
  return(<StyledButton {...props}><Text color="textInverted">{children}</Text></StyledButton>)
}

export default Button