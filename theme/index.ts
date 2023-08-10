import light from "./colors/light";
import base from "./base";
import dark from "./colors/dark";

/**
 * Color tokens and "themes" (aka color modes)
 */
const themes = {
  light,
  dark,
};

const defaultTheme = {
  ...base,
  ...dark,
}

export type Theme = typeof defaultTheme;
export type ThemeOptions = keyof typeof themes;
export type ThemeProp = {
  theme: Theme;
}

export { themes, base, defaultTheme };
