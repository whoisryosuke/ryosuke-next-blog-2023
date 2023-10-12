export type PocketStationIntroAnimation =
  | "INTRO_ENTER"
  | "INTRO"
  | "INTRO_EXIT";
export type PocketStationHomeAnimation = "HOME_ENTER" | "HOME" | "HOME_EXIT";
export type PocketStationAnimations =
  | "LOADING"
  | PocketStationIntroAnimation
  | PocketStationHomeAnimation;
