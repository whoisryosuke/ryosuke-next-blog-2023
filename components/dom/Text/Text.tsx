import styled from 'styled-components'
import { ColorProps, TypographyProps, color, typography } from 'styled-system'

type TextProps = ColorProps & TypographyProps & {
  
}

// example using object syntax
const Text = styled('div')<TextProps>(
  {
    boxSizing: 'border-box',
  },
  color,
  typography
)

Text.defaultProps = {
  color: 'text',
  fontSize: 2,
  fontWeight: 1,
  lineHeight: 2,
}

export default Text