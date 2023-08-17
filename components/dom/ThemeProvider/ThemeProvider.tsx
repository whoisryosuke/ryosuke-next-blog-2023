import { useAppStore } from "store/app";
import { base, themes } from "@theme/index";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

/* eslint-disable-next-line */
export interface ThemeProviderProps {}

export function ThemeProvider({
  children,
}: React.PropsWithChildren<ThemeProviderProps>) {
  const { theme, customizations } = useAppStore();

  const colorMode = theme === "light" ? themes.light : themes.dark;
  const currentTheme = {
    ...base,
    ...customizations.theme,
    ...colorMode,
  };
  return (
    <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
  );
}

export default ThemeProvider;
