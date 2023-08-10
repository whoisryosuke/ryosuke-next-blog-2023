import { base } from "@/theme/base.css";
import { style } from "@vanilla-extract/css";

const OPACITY_UNSELECTED = 0.5;

export const playlistCategoryStyles = style({
  opacity: OPACITY_UNSELECTED,
  transition: "420ms opacity ease-in",
  background: "none",
  paddingLeft: base.tokens.space[4],
  paddingRight: base.tokens.space[4],

  ":hover": {
    opacity: 1,
  },
});
