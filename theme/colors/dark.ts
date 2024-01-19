export const primaryColors = {
  text: "rgba(234,234,241,0.9)",
  textOverlay: "rgba(234,234,241,0.7)",
  textInverted: "rgba(16,16,9,1)",
  reading: "rgba(221,221,228,1)",
  background: "rgba(10,10,14,1)",
  background_level1: "rgba(225,225,225,1)",
  background_level2: "rgba(200,200,200,1)",
  background_level3: "rgba(100,100,100,1)",
  background_overlay: "rgba(0,0,0,0.8)",
  glass: "rgba(40, 40, 40, 0.65)",
  glassBorder: "rgba(40, 40, 40, 0.75)",
  glassSidebar: "rgba(40, 40, 40,0.2)",
  glassOverlay: "rgba(40, 40, 40,0.05)",
  glassContrast: "rgba(40,40,40,0.75)",
  darkGlass: {
    panel: "rgba(31,31,31,0.6)",
    input: "rgba(0,0,0,0.25)",
    focused: "rgba(200,196,193,0.8)",
  },
  button: {
    default: "rgba(242, 242, 242, 0.1)",
    hovered: "rgba(242, 242, 242, 0.3)",
    pressed: "rgba(255, 255, 255, 1.0)",
    pressedText: "rgba(0,0,0,1.0)",
    disabledText: "rgba(0,0,0,0.2)",
  },
  primary: {
    default: "#1B76FF",
    hovered: "#78AEFF",
    pressed: "#0C4294",
  },
  // secondary: primaryColors.purple[500],
  muted: "#f6f6f9",
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
  none: "none",
  background:
    "radial-gradient(73.75% 106.2% at 5.07% 34.92%, #090909 0%, #141416 100%)",
  glass: {
    border:
      "radial-gradient(253.85% 474.76% at 50% -83.65%, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.0) 33%, rgba(255, 255, 255, 0.16) 100%)",
  },
  blue: {
    default: `linear-gradient(90deg, #1F1BD8 0%, #4845EF 36.1%)`,
    hover: `linear-gradient(90deg, #4845EF 0%, #1F1BD8 36.1%)`,
  },
  text: {
    blue: {
      default: `-webkit-linear-gradient(90deg, #1F1BD8 0%, #4845EF 36.1%)`,
      hover: `-webkit-linear-gradient(90deg, #4845EF 0%, #1F1BD8 36.1%)`,
    },
    text: {
      default: `-webkit-linear-gradient(90deg, #F6F6E3 0%, #E4E4E9 36.1%)`,
      hover: `-webkit-linear-gradient(90deg, #E4E4E9 0%, #D4D4D9 36.1%)`,
    },
    invert: {
      default: `-webkit-linear-gradient(90deg, #060613 0%, #141419 36.1%)`,
      hover: `-webkit-linear-gradient(90deg, #141419 0%, #242429 36.1%)`,
    },
  },
};

const dark = {
  colors,
  gradients,
};

export default dark;
