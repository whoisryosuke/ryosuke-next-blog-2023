import { MEDIA_QUERIES } from "@/theme/tokens";
import { style } from "@vanilla-extract/css";
import { themes, base } from "../../theme";

export const tocContainerStyles = style({
  display:"inline-block",
  minWidth: "30%",
  // "@media": {
  //   [MEDIA_QUERIES.mobile["@media"]]: {
  //     position:"relative",
  //   },
  //   [MEDIA_QUERIES.desktop["@media"]]: {
  //     position:"fixed",
  //     top:"10%",
  //     right:"10%",
  //   },
  // },

  
  "@media": {
    [MEDIA_QUERIES.mobile["@media"]]: {
      position:"relative",
    },
    [MEDIA_QUERIES.computer["@media"]]: {
      position:"sticky",
      top: "0",
      left: "0",
      paddingLeft: base.tokens.space[4],
      paddingRight: base.tokens.space[4],
    },
  },
});

export const tocStyles = style({
  display:"inline-block",
  width: "100%",
  backgroundColor: themes.tokens.colors.glass,
  borderRadius: base.tokens.space[3],
  padding: base.tokens.space[3],
  paddingLeft: base.tokens.space[4],
  paddingRight: base.tokens.space[4],

  
  "@media": {
    [MEDIA_QUERIES.mobile["@media"]]: {
      position:"relative",
    },
    [MEDIA_QUERIES.computer["@media"]]: {
      position:"sticky",
      top: "0",
      left: "0",
      overflowY: "scroll",
      height: "80vh",
      
      // scrollbarWidth: "1em",
      // scrollbarColor: themes.tokens.colors.background,
    },
  },

  selectors: {
    ["&::-webkit-scrollbar"]: {
        width: "1em",
    },
    
    ["&::-webkit-scrollbar-track"]: {
        boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)"
    },
    
    ["&::-webkit-scrollbar-thumb"]: {
      backgroundColor: themes.tokens.colors.background_level3,
      outline: "1px solid slategrey",
      borderRadius: base.tokens.space[3],

      
    }
  }
});


export const tocBlogContainer = style({
  "@media": {
    [MEDIA_QUERIES.mobile["@media"]]: {
      width: "100%",
    },
    [MEDIA_QUERIES.desktop["@media"]]: {
      minWidth: "70%",
    },
  },
});
