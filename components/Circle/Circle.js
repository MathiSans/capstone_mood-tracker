import { motion } from "framer-motion";
import LegacyAnimation from "../LegacyAnimation/LegacyAnimation";

export default function Circle({ circleSize, name, color, count }) {
  return (
    <motion.div
      drag
      initial={{ scale: 0.9 }}
      dragTransition={{ bounceStiffness: 10, bounceDamping: 40 }}
      whileTap={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 5 }}
      whileHover={{ scale: 1.1, opacity: 1 }}
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
      style={{
        position: "relative",
        width: circleSize,
        overflow: "hidden",
        height: circleSize,
        borderRadius: "50%",
        margin: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "10px 10px 50px black",
      }}
    >
      <motion.div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        whileHover={{ scale: 1.1 }}
      >
        <LegacyAnimation color={color} opacity={circleSize} />
        <h2 style={{ fontSize: circleSize / 10 }}>
          {name} <br />
          {count} entries
        </h2>
      </motion.div>
    </motion.div>
  );
}