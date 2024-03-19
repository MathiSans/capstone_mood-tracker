import React, { useEffect, useState, useRef } from "react";
import useSWR from "swr";
import ExperienceAnalyser from "@/utils/ExperienceAnalyser";
import NavButton from "@/components/NavButton/NavButton";
import { Navigation } from "@/components/Layout/Layout";
import styled from "styled-components";
import Circle from "@/components/Circle/Circle";
import { useRouter } from "next/router";

export default function App() {
  const router = useRouter();
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

  const { data, isLoading } = useSWR("/api/entries");
  if (isLoading) {
    return <p>loading...</p>;
  }
  if (!data) {
    return <p>no connection to database</p>;
  }

  const result = ExperienceAnalyser(data);

  return (
    <>
      <Grid ref={containerRef}>
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
      </Grid>
      <Navigation>
        <NavButton handleClick={() => router.push("entries")}>
          list view
        </NavButton>
      </Navigation>
    </>
  );
}

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
