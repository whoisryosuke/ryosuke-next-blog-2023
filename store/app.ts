import { ThemeOptions } from '@theme/index'
import { create } from 'zustand'

interface AppState {
  theme: ThemeOptions
  setTheme: (theme: ThemeOptions) => void
}

export const useAppStore = create<AppState>()((set) => ({
  theme: 'dark',
  setTheme: (theme) => set((state) => ({ theme })),
}))