import { style } from "@vanilla-extract/css";
import { themes, base } from "../../theme";

export const blockquoteStyles = style({
  display: "flex",
  backgroundColor: themes.tokens.colors.primary.pressed,
  // backgroundColor: themes.tokens.colors.glass,
  color: 'rgba(234,234,241,1)',
  borderRadius: base.tokens.space[3],
  padding: base.tokens.space[1],
  paddingLeft: base.tokens.space[4],
  paddingRight: base.tokens.space[4],
  border: 0,
  textShadow: "1px 2px 3px rgba(0,0,0,0.5)",
});
