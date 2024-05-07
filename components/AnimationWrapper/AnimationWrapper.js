import { motion } from "framer-motion";
import { useState } from "react";
import { legacyAnimations } from "./animations";

export default function AnimationWrapper({
  children,
  leftToRight,
  hideInterface,
}) {
  const [animation, setAnimation] = useState(
    leftToRight ? "leftToRightAnimate" : "fadeIn"
  );
  const triggerAnimation = () => {
    setAnimation(
      animation === "leftToRightAnimate" ? "fadeIn" : "leftToRightAnimate"
    );
  };
  return (
    <motion.div
      initial={leftToRight ? "leftToRightInitial" : "hidden"}
      animate={hideInterface ? null : animation}
      exit={leftToRight ? "leftToRightExit" : "hidden"}
      variants={legacyAnimations}
    >
      {children}
    </motion.div>
  );
}
