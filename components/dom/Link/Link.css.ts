import { style } from "@vanilla-extract/css";
import { themes, base } from "../../theme";

export const linkStyles = style({
  display: "inline-block",
  position: "relative",
  color: themes.tokens.colors.text,
  marginLeft: base.tokens.space[1],
  marginRight: base.tokens.space[1],
  // borderBottom: '3px solid',
  // borderColor: themes.tokens.colors.primary.default,
  textDecoration: "none",
  transition: "color 400ms linear",

  ":hover": {
    color: themes.tokens.colors.primary,
  },

  ":after": {
    content: "",
    width: "100%",
    height: "3px",
    display: "block",
    position: "absolute",
    left: 0,
    bottom: 0,
    background: themes.tokens.gradients.blue.default,
    textDecoration: "none",
    // marginTop: base.tokens.space[2],
    transition: "background 400ms linear, transform 400ms linear",
    transform: "translateY(-4px)",
  },

  selectors: {
    "&:hover:after": {
      background: themes.tokens.gradients.blue.hover,
      transform: "translateY(-6px)",
    },
  },
});

export const linkInlineStyles = style({
  ":after": {
    opacity: 0.3,
    transition:
      "background 400ms linear, transform 400ms linear, opacity 400ms linear",
  },
  selectors: {
    "&:hover:after": {
      opacity: 1,
    },
  },
});

export const linkPlainStyles = style({
  ":after": {
    opacity: 0,
  },
  selectors: {
    "&:hover:after": {
      opacity: 0,
    },
  },
});

export const linkColorPrimaryStyles = style({
  color: themes.tokens.colors.primary.default,
});
