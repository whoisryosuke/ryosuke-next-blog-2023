import { style } from "@vanilla-extract/css";
import { themes, base } from "../../theme";
import { MEDIA_QUERIES } from "../../theme/tokens";

export const logoContainerStyles = style({
  position: "absolute",
  top: 126,
  right: -30,
  zIndex: 1000,
  // "Reverse" text and rotate
  transform: "scaleX(-1) rotate(-90deg)",

  "@media": {
    [MEDIA_QUERIES.mobile["@media"]]: {
      top: 250,
      right: -20,
    },
    [MEDIA_QUERIES.tablet["@media"]]: {
      top: 150,
      right: -30,
    },
  },
});

export const logoTextStyles = style({
  textTransform: "uppercase",
  margin: 0,
  padding: "5px",

  background: themes.tokens.gradients.text.text.default,
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",

  ":hover": {
    background: themes.tokens.gradients.text.blue.hover,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    // backdropFilter: 'blur(30px)',
  },
});

export const logoLinkStyles = style({
  textDecoration: "none",
});
