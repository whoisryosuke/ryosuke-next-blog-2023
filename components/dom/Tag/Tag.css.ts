import { style } from "@vanilla-extract/css";
import { themes, base } from "../../theme";

export const linkStyles = style({
  marginBottom: base.tokens.space[2],
  borderBottom: "3px solid",
  borderColor: themes.tokens.colors.primary.default,
  textDecoration: "none",
});
