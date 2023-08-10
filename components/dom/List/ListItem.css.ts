import { style } from "@vanilla-extract/css";
import { themes, base } from "../../theme";

export const listItemStyles = style({
  color: themes.tokens.colors.text,
  marginBottom: base.tokens.space[2],
  lineHeight: "3rem",
});
