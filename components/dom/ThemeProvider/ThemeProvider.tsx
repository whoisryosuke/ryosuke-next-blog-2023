import { ThemeContext, ThemeNames } from "../../context/theme";
import { useState } from "react";
import { createTheming } from '@callstack/react-theme-provider';
import { useAppStore } from "store/app";
import { base, defaultTheme, themes } from "@theme/index";

const { ThemeProvider: LinariaThemeProvider, withTheme, useTheme } = createTheming(defaultTheme);

/* eslint-disable-next-line */
export interface ThemeProviderProps {}

export function ThemeProvider({
  children,
}: React.PropsWithChildren<ThemeProviderProps>) {
  const { theme } = useAppStore();

  const colorMode = theme === "light" ? themes.light : themes.dark;
  const currentTheme = {
    ...base,
    ...colorMode,
  }
  return <LinariaThemeProvider theme={currentTheme}>{children}</LinariaThemeProvider>;
}

export default ThemeProvider;
export {
  withTheme,
  useTheme
}
