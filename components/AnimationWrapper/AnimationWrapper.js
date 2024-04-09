import { motion } from "framer-motion";

export const animations = {
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

export default function AnimationWrapper({ children, leftToRight }) {
  return (
    <motion.div
      initial={leftToRight ? "leftToRightInitial" : "hidden"}
      animate={leftToRight ? "leftToRightAnimate" : "fadeIn"}
      exit={leftToRight ? "leftToRightExit" : "hidden"}
      variants={animations}
    >
      {children}
    </motion.div>
  );
}
