import { motion } from "framer-motion";

export const animations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 2 },
  },
  fadeIn: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  leftToRightInitial: { opacity: 0, x: 100 },
  leftToRightAnimate: { opacity: 1, x: 0 },
  leftToRightExit: { opacity: 0, x: -100 },
};

export default function AnimationWrapper({
  children,
  fadeIn,
  leftToRight,
  page,
}) {
  if (leftToRight) {
    return (
      <motion.div
        key={page}
        initial="leftToRightInitial"
        animate="leftToRightAnimate"
        exit="leftToRightExit"
        variants={animations}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate={fadeIn ? "fadeIn" : "show"}
      exit="hidden"
      variants={animations}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
