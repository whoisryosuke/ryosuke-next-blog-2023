import { MEDIA_QUERIES } from "@/theme/tokens";
import { style } from "@vanilla-extract/css";
import { themes, base } from "../../theme";

export const blogContainerStyles = style({
  "@media": {
    [MEDIA_QUERIES.mobile["@media"]]: {
      width: "100%",
    },
    [MEDIA_QUERIES.tablet["@media"]]: {
      width: "80%",
    },
    [MEDIA_QUERIES.desktop["@media"]]: {
      width: "70%",
    },
    [MEDIA_QUERIES.widescreen["@media"]]: {
      width: "60%",
    },
  },
});
