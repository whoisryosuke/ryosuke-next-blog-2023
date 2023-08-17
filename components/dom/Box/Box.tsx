import styled from "styled-components";
import {
  space,
  layout,
  flexbox,
  color,
  background,
  border,
  position,
  ColorProps,
  SpaceProps,
  LayoutProps,
  FlexProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  FlexboxProps,
} from "styled-system";

export type BoxProps = SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  ColorProps &
  BackgroundProps &
  BorderProps & {};
// example using object syntax
const Box = styled("div")<BoxProps>(
  {
    boxSizing: "border-box",
  },
  space,
  position,
  layout,
  flexbox,
  color,
  background,
  border,
);

export default Box;
