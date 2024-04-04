import { motion } from "framer-motion";

export const animations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 2, delay: 0.3 },
  },
  showDelay: {
    opacity: 1,
    transition: { duration: 1, delay: 4 },
  },
};

export default function AnimationWrapper({ children, delay }) {
  return (
    <motion.div
      initial="hidden"
      animate={delay ? "showDelay" : "show"}
      variants={animations}
    >
      {children}
    </motion.div>
  );
}
