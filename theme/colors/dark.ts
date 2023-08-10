export const primaryColors = {
  text: "rgba(234,234,241,1)",
  reading: "rgba(221,221,228,1)",
  background: "rgba(245,245,241,1)",
  background_level1: "rgba(225,225,225,1)",
  background_level2: "rgba(200,200,200,1)",
  background_level3: "rgba(100,100,100,1)",
  glass: "rgba(40, 40, 40, 0.65)",
  primary: {
    default: "rgba(72,69,239,1)",
    hovered: "#7A77FD",
    pressed: "#2D2AC5",
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
  background:
    "radial-gradient(73.75% 106.2% at 5.07% 34.92%, #090909 0%, #141416 100%)",
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
}

export default dark