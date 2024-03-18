import React, { useEffect, useState, useRef } from "react";
import useSWR from "swr";
import { motion } from "framer-motion";
import LegacyAnimation from "@/components/LegacyAnimation/LegacyAnimation";
import Animation from "@/components/3DAnimation/3DAnimation";
import ExperienceAnalyser from "@/utils/ExperienceAnalyser";
import NavButton from "@/components/NavButton/NavButton";

function Circle({ circleSize, name, color, count }) {
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

export default function App() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = containerRef.current
        ? containerRef.current.offsetWidth
        : window.innerWidth; // Use window.innerWidth as default
      const containerHeight = containerRef.current
        ? containerRef.current.offsetHeight
        : window.innerHeight; // Use window.innerHeight as default
      setScreenSize({ width: containerWidth, height: containerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { data, isLoading } = useSWR("/api/entries");
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!data) {
    return;
  }

  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
  };

  const result = ExperienceAnalyser(data);
  console.log(result);

  return (
    <div style={{ position: "relative" }}>
      <div ref={containerRef} style={gridStyle}>
        {result.map((entry, index) => (
          <Circle
            key={index}
            index={index}
            count={entry.count}
            const
            circleSize={Math.max(
              Math.sqrt(entry.count) *
                Math.min(screenSize.width, screenSize.height) *
                (0.2 / Math.log(entry.count + 3)),
              10
            )}
            name={entry.experience}
            color={entry.color}
          />
        ))}
      </div>
      <div
        style={{
          zIndex: "10",
          position: "fixed",
          bottom: "6vh",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: "10px 10px 50px black",
        }}
      >
        <NavButton>enter a mood</NavButton>
      </div>
    </div>
  );
}
