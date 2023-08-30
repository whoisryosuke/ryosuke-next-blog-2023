import { Theme } from "@theme/index";
import styled from "styled-components";
import {
  ColorProps,
  MarginProps,
  TypographyProps,
  color,
  typography,
  margin,
} from "styled-system";

export type TextProps = ColorProps &
  TypographyProps &
  MarginProps & {
    fontWeight?: keyof Theme["fontWeights"];
  };

const Text = styled("p")<TextProps>(
  {
    boxSizing: "border-box",
    margin: 0,
    "--wght": ({ fontWeight, theme }) => theme.fontWeights[fontWeight],
    fontVariationSettings: `"wght" var(--wght)`,
    // textShadow: "-1px 1px 4px rgba(0, 0, 0, 0.5)",
  },
  color,
  typography,
  margin,
  {
    color: ({ theme }) => theme.modal && theme.colors.textOverlay,
  }
);

Text.defaultProps = {
  color: "text",
  fontSize: 2,
  fontWeight: "regular",
  lineHeight: 4,
  fontFamily: "body",
};

export default Text;
