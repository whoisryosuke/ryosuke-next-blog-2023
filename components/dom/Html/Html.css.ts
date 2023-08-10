import { style } from "@vanilla-extract/css";
import { themes, base } from "../../theme";

export const bodyStyles = style({
  overflowX: "hidden",
  padding: 0,
  margin: 0,
  background: themes.tokens.gradients.background,
  minHeight: "100vh",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
