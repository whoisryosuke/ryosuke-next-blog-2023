import React, { ButtonHTMLAttributes, CSSProperties, DetailedHTMLProps } from 'react'
import styled from 'styled-components'
import { ColorProps, color } from 'styled-system'

type ButtonProps = DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > & ColorProps & {
      width?: CSSProperties['width'];
      height?: CSSProperties['height'];
}

const StyledIconButton = styled('button')<ButtonProps>`
  background:none;
  border:0;
  padding: ${({theme}) => theme.space[2]} ${({theme}) => theme.space[2]};

  & > svg {
    width: ${({width}) => width};
    height: ${({height}) => height};
  }

  ${color}
`

const IconButton = ({children, ...props}) => {
  return(<StyledIconButton {...props}>{children}</StyledIconButton>)
}

export default IconButton

IconButton.defaultProps = {
  width: '32px',
  height: '32px',
}