import { style } from "@vanilla-extract/css";
import { themes, base } from "../../theme";

export const imageStyles = style({
  width: "auto",
  margin: "auto",
  maxWidth: "100%",
});

export const imageContainerStyles = style({
  width: "100%",
  textAlign: "center",
});

export const captionContainerStyles = style({
  display: "inline-block",
  margin: "auto",
  textAlign: "center",
  backgroundColor: themes.tokens.colors.glass,
  marginTop: base.tokens.space[2],
  marginBottom: base.tokens.space[2],
  padding: base.tokens.space[1],
  paddingLeft: base.tokens.space[4],
  paddingRight: base.tokens.space[4],
  borderRadius: base.tokens.space[2],
});
