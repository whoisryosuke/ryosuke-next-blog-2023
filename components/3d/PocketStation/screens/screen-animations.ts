export const screenAnimations = {
  intro: {
    initial: 5.0,
    duration: 5.0,
    exit: 5.0,
    animationTime: 6.0, // manually calculated for now...
    image: "screen-intro.png",
  },
  home: {
    initial: 5.0,
    duration: 2.0,
    exit: 5.0,
    image: "screen-home.png",
  },
};

export const animationSequence = ["intro", "home"];
