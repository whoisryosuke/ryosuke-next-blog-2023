import { BiAward, BiBomb, BiBong, BiStar, BiTrophy } from "react-icons/bi";

export const TOAST_ICONS = {
  // Achievements
  STAR: BiStar,
  TROPHY: BiTrophy,
  AWARD: BiAward,
  BONG: BiBong,

  // Errors
  ERROR_BOMB: BiBomb,
};

export type ToastIconNames = keyof typeof TOAST_ICONS;
