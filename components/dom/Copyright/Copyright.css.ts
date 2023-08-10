import { MEDIA_QUERIES } from "@/theme/tokens";
import { style } from "@vanilla-extract/css";
import { themes, base } from "../../theme";

export const copyrightStyles = style({
  color: themes.tokens.colors.muted,
  letterSpacing: "2px",
  textAlign: "right",

  "@media": {
    [MEDIA_QUERIES.mobile["@media"]]: {
      fontSize: "8px",
    },
    [MEDIA_QUERIES.tablet["@media"]]: {
      fontSize: "11px",
    },
  },

  // position: 'absolute',
  // bottom: 0,
  // right:0,
});
