import { createTheme } from "@vanilla-extract/css";
import { colorTokens } from "./colormode.css";

export const primaryColors = {
  text: "rgba(6,6,19,1)",
  reading: "rgba(16,15,40,1)",
  background: "rgba(239,239,239,1)",
  background_level1: "rgba(225,225,225,1)",
  background_level2: "rgba(200,200,200,1)",
  background_level3: "rgba(185,185,185,1)",
  glass: "rgba(255,255,255,0.3)",
  primary: {
    default: "rgba(31,27,216,1)",
    hovered: "#5854FD",
    pressed: "#1A17BC",
  },
  // secondary: primaryColors.purple[500],
  muted: "#b6b6b9",
  highlight: "hsla(205, 100%, 40%, 0.125)",

  success: "green",
  message: "blue",
  warning: "yellow",
  danger: "red",
};

export const colors = {
  ...primaryColors,
};

export const gradients = {
  // subtle: `linear-gradient(180deg, ${colors.blue['500']} 0%, ${colors.secondary} 100%)`,
  // purple: `linear-gradient(180deg, ${colors.primary} 0%, #A000C4 100%)`,
  background:
    "radial-gradient(73.75% 106.2% at 5.07% 34.92%, #F9F9F9 0%, #C9CBCC 100%)",
  blue: {
    default: `linear-gradient(90deg, #1F1BD8 0%, #4845EF 36.1%);`,
    hover: `linear-gradient(90deg, #4845EF 0%, #1F1BD8 36.1%);`,
  },
  text: {
    blue: {
      default: `-webkit-linear-gradient(90deg, #1F1BD8 0%, #4845EF 36.1%);`,
      hover: `-webkit-linear-gradient(90deg, #4845EF 0%, #1F1BD8 36.1%);`,
    },
    text: {
      default: `-webkit-linear-gradient(90deg, #060613 0%, #141419 36.1%);`,
      hover: `-webkit-linear-gradient(90deg, #141419 0%, #242429 36.1%);`,
    },
    invert: {
      default: `-webkit-linear-gradient(90deg, #BBB 0%, #DDD 36.1%);`,
      hover: `-webkit-linear-gradient(90deg, #DDD 0%, #EEE 36.1%);`,
    },
  },
};

export const light = createTheme(colorTokens, {
  colors,
  gradients,
});
