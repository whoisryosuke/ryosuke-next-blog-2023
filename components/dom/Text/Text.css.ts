import { style } from "@vanilla-extract/css";
import { themes, base } from "../../theme";
import { blockquoteStyles } from "../Blockquote/Blockquote.css";

export const textStyles = style({
  fontFamily: "Roboto, Helvetica, Helvetica Neue, Open Sans, Arial, sans-serif",
  color: themes.tokens.colors.text,

  
  selectors: {
    [`${blockquoteStyles} &`]: {
      color: 'rgba(234,234,241,1)',
    },
  }
});
