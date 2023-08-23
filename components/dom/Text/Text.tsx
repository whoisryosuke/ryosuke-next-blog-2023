import { Theme } from "@theme/index";
import styled from "styled-components";
import { ColorProps, MarginProps, TypographyProps, color, typography, margin } from "styled-system";

export type TextProps = ColorProps &
  TypographyProps & MarginProps & {
    fontWeight?: keyof Theme["fontWeights"];
  };

const Text = styled("p")<TextProps>(
  {
    boxSizing: "border-box",
    margin: 0,
    "--wght": ({ fontWeight, theme }) => theme.fontWeights[fontWeight],
    fontVariationSettings: `"wght" var(--wght)`,
  },
  color,
  typography,
  margin,
  {
    "color": ({ theme }) => theme.modal && theme.colors.textOverlay,
  }
);

Text.defaultProps = {
  color: "text",
  fontSize: 2,
  fontWeight: "regular",
  lineHeight: 2,
  fontFamily: "body",
};

export default Text;
