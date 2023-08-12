import styled from 'styled-components'
import { ColorProps, TypographyProps, color, typography } from 'styled-system'

type TextProps = ColorProps & TypographyProps & {
  
}

// example using object syntax
const Text = styled('p')<TextProps>(
  {
    boxSizing: 'border-box',
    margin:0,
  },
  color,
  typography
)

Text.defaultProps = {
  color: 'text',
  fontSize: 2,
  fontWeight: 1,
  lineHeight: 2,
  fontFamily: "body",
}

export default Text