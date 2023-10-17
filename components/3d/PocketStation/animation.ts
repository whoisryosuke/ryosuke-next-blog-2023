export type PocketStationIntroAnimation =
  | "INTRO_ENTER"
  | "INTRO"
  | "INTRO_EXIT";
export type PocketStationHomeAnimation = "HOME_ENTER" | "HOME" | "HOME_EXIT";
export type PocketStationAnimations =
  | "LOADING"
  | PocketStationIntroAnimation
  | PocketStationHomeAnimation;

// Utility functions for canvas animation
export const createScreenClipMask = (ctx: CanvasRenderingContext2D) => {
  // Create a clipping path in shape of screen
  ctx.beginPath();
  ctx.roundRect(150, 185, 742, 728, [40]);
  ctx.clip();
};
