export const animations = {
  hidden: { opacity: [1, 1, 1, 0], y: "100vh" },
  show: { opacity: 1, y: "0vh" },
  easeInOut: { ease: "easeInOut", duration: 5 },
  fadeOut: { opacity: 0, scale: 0.9 },
  fadeIn: { opacity: 1, scale: 1 },
};

export const legacyAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 2 },
  },
  fadeIn: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
  leftToRightInitial: { opacity: 0, x: 100 },
  leftToRightAnimate: {
    opacity: 1,
    x: 0,

    transition: { duration: 0.3 },
  },
  leftToRightExit: {
    opacity: 0,
    x: -100,

    transition: { duration: 0.3 },
  },
};
