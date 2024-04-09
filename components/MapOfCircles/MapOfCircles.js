import { useEffect, useState, useRef } from "react";
import Circle from "@/components/Circle/Circle";
import * as Styled from "./MapOfCircles.styled";

export default function MapOfCircles({ data }) {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      const containerWidth = containerRef.current
        ? containerRef.current.offsetWidth
        : window.innerWidth;
      const containerHeight = containerRef.current
        ? containerRef.current.offsetHeight
        : window.innerHeight;
      setScreenSize({ width: containerWidth, height: containerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Styled.Grid ref={containerRef}>
      {data.map((entry, index) => (
        <Circle
          key={index}
          count={entry.count}
          circleSize={Math.max(
            Math.sqrt(entry.count) *
              Math.min(screenSize.width, screenSize.height) *
              (0.2 / Math.log(entry.count + 3)),
            10
          )}
          name={entry.experience || entry.region}
          color={entry.color}
        />
      ))}
    </Styled.Grid>
  );
}
