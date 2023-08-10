import { style } from "@vanilla-extract/css";
import { themes, base } from "../../theme";

export const accordionButtonStyles = style({
  width: "100%",
  background: "none",
  border: 0,
  textAlign: "left",
  cursor: "pointer",
  ":hover": {
    color: themes.tokens.colors.primary.default,
  },
});

export const accordionBarStyles = style({
  ":hover": {
    color: themes.tokens.colors.primary.default,
  },
});
