import { PocketStationAnimations } from "@components/3d/PocketStation/animation";
import { Theme, ThemeOptions, base } from "@theme/index";
import {
  AchievementData,
  AchievementLog,
  DEFAULT_ACHIEVEMENT_DATA,
} from "features/achievements/achievement-list";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type ModalNames = "customization" | "achievements";

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

export interface CanvasSize {
  width: number;
  height: number;
}

interface AppState {
  // Theming
  theme: ThemeOptions;
  setTheme: (theme: ThemeOptions) => void;
  toggleTheme: () => void;

  // Canvas sizing
  canvasSize: CanvasSize;
  setCanvasSize: (canvasSize: CanvasSize) => void;

  // User Customizations
  customizations: UserCustomizations;
  setUserTheme: (theme: Partial<UserCustomizations["theme"]>) => void;
  setUserAnimation: (settings: UserAnimationSettings) => void;

  // Modal
  modalName: ModalNames;
  openModal: (modalName: ModalNames) => void;
  toggleModal: (modal?: boolean) => void;

  // Frontpage (PocketStation)
  pocketStationAnimation: PocketStationAnimations;
  pocketStationAnimating: boolean;
  setPSAnimation: (animation: PocketStationAnimations) => void;
  setPocketStationAnimating: (progress: boolean) => void;

  // Achievements
  achievementNotification: boolean;
  achievementsLog: AchievementLog[];
  achievementData: AchievementData;
  updateAchievementData: (achievementData: Partial<AchievementData>) => void;
  addAchievement: (achievement: AchievementLog) => void;
  toggleAchivementNotifications: (status?: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (theme) => set((state) => ({ theme })),
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),

      canvasSize: {
        width: 0,
        height: 0,
      },
      setCanvasSize: (canvasSize) => set((state) => ({ canvasSize })),

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

      pocketStationAnimation: "LOADING",
      pocketStationAnimating: false,
      setPSAnimation: (animation) =>
        set((state) => ({
          pocketStationAnimation: animation,
        })),
      setPocketStationAnimating: (animation) =>
        set((state) => ({
          pocketStationAnimating: animation,
        })),

      // Achievements
      achievementNotification: true,
      achievementsLog: [],
      achievementData: DEFAULT_ACHIEVEMENT_DATA,
      updateAchievementData: (newAchievementData) =>
        set((state) => ({
          achievementData: { ...state.achievementData, ...newAchievementData },
        })),
      addAchievement: (achievement) =>
        set((state) => ({
          achievementsLog: [achievement, ...state.achievementsLog],
        })),
      toggleAchivementNotifications: (status) =>
        set((state) => ({
          achievementNotification: status ?? !state.achievementNotification,
        })),
    }),
    {
      name: "ryo-storage",
    }
  )
);
