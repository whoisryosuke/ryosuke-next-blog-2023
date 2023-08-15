import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

const INPUT_HEIGHT = '42px';

type Props =  DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > & {
    style?: React.CSSProperties,
}

const StyledInput = styled('input')<Props>`
    
  -webkit-appearance: none;
  background: transparent;
  width: 100%;
  height: ${INPUT_HEIGHT};
  border:0;
  padding: ${({theme}) => `${theme.space[1]} ${theme.space[3]}`};

  
  color: ${({theme}) => theme.colors.textInverted};
  font-size: ${({theme}) => theme.fontSizes[2]};
  font-weight: ${({theme}) => theme.fontWeights.regular};
  line-height: ${({theme}) => theme.lineHeights[2]};
  font-family: ${({theme}) => theme.fonts.body};
`

const StyledContainer = styled('div')`
    width: 100%;
    position: relative;
    background: ${({theme}) => theme.colors.darkGlass.input};
    border-radius: ${({theme}) => theme.radius[0]};

    box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25), 1px 2px 1px rgba(255, 255, 255, 0.2), inset 4px 4px 4px rgba(0, 0, 0, 0.25);

`

const Input = ({style, ...props}: Props) => {

  return (
    <StyledContainer style={style}>
        <StyledInput {...props} />
    </StyledContainer>
  )
}

export default Input