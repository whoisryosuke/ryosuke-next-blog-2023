import styled from 'styled-components'
import { space, layout, flex, grid, color, background, border, ColorProps, SpaceProps, LayoutProps, FlexProps, GridProps, BackgroundProps, BorderProps } from 'styled-system'

export type BoxProps = SpaceProps & LayoutProps & FlexProps & GridProps & ColorProps & BackgroundProps & BorderProps & {
  
}
// example using object syntax
const Box = styled('div')<BoxProps>(
  {
    boxSizing: 'border-box',
  },
  space,
  layout,
  flex,
  grid,
  color,
  background,
  border
)

export default Box