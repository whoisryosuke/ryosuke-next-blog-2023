import { MEDIA_QUERIES } from "@/theme/tokens";
import { style } from "@vanilla-extract/css";
import { themes, base } from "../../theme";

export const navLayoutStyle = style({
  width: "100%",
  position: "absolute",
  top: 40,
  zIndex: 710,
  display: "flex",
  justifyContent: "center",
  alignContent: "center",

  "@media": {
    [MEDIA_QUERIES.mobile["@media"]]: {
      top: 20,
      justifyContent: "flex-end",
    },
    [MEDIA_QUERIES.tablet["@media"]]: {
      top: 40,
      justifyContent: "center",
    },
  },
});

export const navContainerStyle = style({
  padding: "15px 80px",

  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(6px)",
  borderRadius: "36px",

  "@media": {
    [MEDIA_QUERIES.mobile["@media"]]: {
      padding: "15px 40px",
      marginRight: base.tokens.space[1],
    },
    [MEDIA_QUERIES.tablet["@media"]]: {
      padding: "15px 80px",
    },
  },
});

export const navListStyle = style({
  margin: 0,
  padding: 0,
});

export const navItemStyle = style({
  textTransform: "uppercase",
  border: 0,
  textDecoration: "none",
  color: themes.tokens.colors.text,

  background: themes.tokens.gradients.text.text.default,
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",

  transition: "background 400ms linear, transform 200ms linear",

  ":hover": {
    background: themes.tokens.gradients.text.blue.default,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",

    transform: "scale(1.05)",
  },
});
