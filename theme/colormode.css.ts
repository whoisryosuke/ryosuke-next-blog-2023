import { createThemeContract } from "@vanilla-extract/css";

const colors = {
  text: "",
  reading: "",
  background: "",
  background_level1: "",
  background_level2: "",
  background_level3: "",
  primary: {
    default: "",
    hovered: "",
    pressed: "",
  },
  glass: "",
  // secondary: '',
  muted: "",
  highlight: "",

  success: "",
  message: "",
  warning: "",
  danger: "",
};

const gradients = {
  // subtle: '',
  // purple: '',
  background: "",
  blue: {
    default: "",
    hover: "",
  },
  text: {
    blue: {
      default: "",
      hover: "",
    },
    text: {
      default: "",
      hover: "",
    },
    invert: {
      default: "",
      hover: "",
    },
  },
};

export const colorTokens = createThemeContract({
  colors,
  gradients,
});
