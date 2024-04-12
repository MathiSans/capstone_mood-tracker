import { motion } from "framer-motion";
import LegacyAnimation from "../LegacyAnimation/LegacyAnimation";

export default function Circle({
  circleSize,
  name,
  color,
  count,
  percentage,
  handleExperienceClick,
  mapsPage,
  ekmanPage,
}) {
  return (
    <motion.div
      onClick={handleExperienceClick}
      drag
      initial={{ scale: 0.6, opacity: 0 }}
      dragTransition={{ bounceStiffness: 10, bounceDamping: 40 }}
      whileTap={{ scale: 0.9 }}
      animate={{ scale: 1.3, opacity: 1 }}
      transition={{ duration: 5 }}
      whileHover={{ scale: 1.1 }}
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
        margin: "4px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "10px 10px 50px black",
        cursor: "pointer",
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
          padding: "5%",
        }}
        whileHover={{ scale: 1.05 }}
      >
        <LegacyAnimation color={color} opacity={circleSize} />
        <h2 style={{ fontSize: circleSize / 10 }}>
          {mapsPage ? "" : `${percentage} % `}
          {name} <br />
          {!ekmanPage && `${count} entries`}
        </h2>
      </motion.div>
    </motion.div>
  );
}
