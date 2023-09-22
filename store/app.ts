import { Theme, ThemeOptions, base } from "@theme/index";
import {
  AchievementData,
  AchievementLog,
  DEFAULT_ACHIEVEMENT_DATA,
} from "features/achievements/achievement-list";
import { create } from "zustand";

type ModalNames = "customization";

type UserAnimationSettings = {
  active: boolean;
};

export type UserCustomizations = {
  animation: UserAnimationSettings;
  theme: {
    fontWeights: Theme["fontWeights"];
    modal: boolean;
    highContrastBlog: boolean;
  };
};

interface AppState {
  // Theming
  theme: ThemeOptions;
  setTheme: (theme: ThemeOptions) => void;
  toggleTheme: () => void;

  // User Customizations
  customizations: UserCustomizations;
  setUserTheme: (theme: Partial<UserCustomizations["theme"]>) => void;
  setUserAnimation: (settings: UserAnimationSettings) => void;

  // Modal
  modalName: ModalNames;
  openModal: (modalName: ModalNames) => void;
  toggleModal: (modal?: boolean) => void;

  // Achievements
  achievementNotification: boolean;
  achievements: AchievementLog[];
  achievementData: AchievementData;
  updateAchievementData: (achievementData: Partial<AchievementData>) => void;
  addAchievement: (achievement: AchievementLog) => void;
  toggleAchivementNotifications: (status?: boolean) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  theme: "light",
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
      modal: false,
      highContrastBlog: false,
    },
  },
  setUserTheme: (theme) =>
    set((state) => ({
      customizations: {
        ...state.customizations,
        theme: { ...state.customizations.theme, ...theme },
      },
    })),
  setUserAnimation: (settings) =>
    set((state) => ({
      customizations: {
        ...state.customizations,
        animation: { ...state.customizations.animation, ...settings },
      },
    })),

  modalName: "customization",
  openModal: (modalName) =>
    set((state) => ({
      modalName,
      customizations: {
        ...state.customizations,
        theme: {
          ...state.customizations.theme,
          modal: !state.customizations.theme.modal,
        },
      },
    })),
  toggleModal: (modal) =>
    set((state) => ({
      customizations: {
        ...state.customizations,
        theme: {
          ...state.customizations.theme,
          modal: modal ?? !state.customizations.theme.modal,
        },
      },
    })),

  // Achievements
  achievementNotification: false,
  achievements: [],
  achievementData: DEFAULT_ACHIEVEMENT_DATA,
  updateAchievementData: (newAchievementData) =>
    set((state) => ({
      achievementData: { ...state.achievementData, ...newAchievementData },
    })),
  addAchievement: (achievement) =>
    set((state) => ({
      achievements: [achievement, ...state.achievements],
    })),
  toggleAchivementNotifications: (status) =>
    set((state) => ({
      achievementNotification: status ?? !state.achievementNotification,
    })),
}));
