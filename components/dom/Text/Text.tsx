import { Theme } from "@theme/index";
import styled from "styled-components";
import { ColorProps, TypographyProps, color, typography } from "styled-system";

type TextProps = ColorProps &
  TypographyProps & {
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
);

Text.defaultProps = {
  color: "text",
  fontSize: 2,
  fontWeight: "regular",
  lineHeight: 2,
  fontFamily: "body",
};

export default Text;
