import { Theme } from "@theme/index";
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
  BorderProps & {
    borderRadius?: keyof Theme["radius"];
  };
// example using object syntax
const Box = styled("div")<BoxProps>(
  {
    boxSizing: "border-box",
    perspective: "500px",
    color: ({ theme }) => theme.colors.text,
    fontSize: ({ theme }) => theme.fontSizes[2],
    fontWeight: ({ theme }) => theme.fontWeights.regular,
    lineHeight: ({ theme }) => theme.lineHeights[2],
    fontFamily: ({ theme }) => theme.fonts.body,
  },
  space,
  position,
  layout,
  flexbox,
  color,
  background,
  border,
  // @ts-ignore
  {
    borderRadius: ({ theme, borderRadius }) =>
      borderRadius in theme.radius && theme.radius[borderRadius],
  }
);

export default Box;
