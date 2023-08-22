import { UserCustomizations, useAppStore } from "store/app";
import { Theme, base, themes } from "@theme/index";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

/* eslint-disable-next-line */
export interface ThemeProviderProps {
  theme: Partial<Theme> & Partial<UserCustomizations['theme']>
}

export function ThemeProvider({
  children,
  theme: themeOverrides,
}: React.PropsWithChildren<ThemeProviderProps>) {
  const { theme, customizations } = useAppStore();

  const colorMode = theme === "light" ? themes.light : themes.dark;
  const currentTheme = {
    ...base,
    ...customizations.theme,
    ...colorMode,
    ...themeOverrides,
  };
  return (
    <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
  );
}

export default ThemeProvider;
