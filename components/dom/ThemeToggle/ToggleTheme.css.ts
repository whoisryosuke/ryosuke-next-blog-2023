import { MEDIA_QUERIES } from "@/theme/tokens";
import { style } from "@vanilla-extract/css";
import { themes, base } from "../../theme";

export const buttonStyles = style({
  color: themes.tokens.colors.text,
  fontSize: base.tokens.fontSizes[4],
  padding: base.tokens.space[2],

  ":hover": {
    color: themes.tokens.colors.primary.default,
  },

  background: "none",
  border: 0,

  position: "absolute",
  top: base.tokens.space[4],
  // right: base.tokens.space[6],
  zIndex: 1000,

  "@media": {
    [MEDIA_QUERIES.mobile["@media"]]: {
      top: base.tokens.space[7],
      //   top: 250,
      left: 10,
    },
    [MEDIA_QUERIES.tablet["@media"]]: {
      top: base.tokens.space[4],

      //   top: 126,
      left: "auto",
      right: 43,
    },
  },
});
