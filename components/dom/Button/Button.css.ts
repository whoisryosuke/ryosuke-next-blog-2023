import { style } from "@vanilla-extract/css";
import { themes, base } from "../../theme";

export const buttonStyles = style({
  display: "flex",
  backgroundColor: themes.tokens.colors.primary.default,
  borderRadius: base.tokens.space[1],
  border: 0,

  ":disabled": {
    backgroundColor: themes.tokens.colors.muted,
  },
  ":hover": {
    backgroundColor: themes.tokens.colors.primary.hovered,
  },
  ":active": {
    backgroundColor: themes.tokens.colors.primary.pressed,
  },
  ":focus": {
    backgroundColor: themes.tokens.colors.primary.hovered,
  },
});
