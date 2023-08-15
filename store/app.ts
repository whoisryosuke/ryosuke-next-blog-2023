import { Theme, ThemeOptions, base } from '@theme/index'
import { create } from 'zustand'

type UserAnimationSettings = {
  active: boolean;
}

export type UserCustomizations = {
  animation: UserAnimationSettings
  theme: {
    fontWeights: Theme['fontWeights'];
  }
}

interface AppState {
  // Theming
  theme: ThemeOptions
  setTheme: (theme: ThemeOptions) => void
  toggleTheme: () => void;

  // User Customizations
  customizations: UserCustomizations
  setUserTheme: (theme: Partial<UserCustomizations['theme']>) => void
  setUserAnimation: (settings: UserAnimationSettings) => void
}

export const useAppStore = create<AppState>()((set) => ({
  theme: 'light',
  setTheme: (theme) => set((state) => ({ theme })),
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),

  customizations: {
    animation: {
      active: true,
    },
    theme: {
      fontWeights: base.fontWeights,
    }
  },
  setUserTheme: (theme) => set((state) => ({ customizations: { ...state.customizations, theme: { ...state.customizations.theme, ...theme} } })),
  setUserAnimation: (settings) => set((state) => ({ customizations: { ...state.customizations, animation: { ...state.customizations.animation, ...settings} } })),
}))