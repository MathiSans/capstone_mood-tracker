import React, { useEffect, useState, useRef } from "react";
import useSWR from "swr";
import experienceAnalyser from "@/utils/experienceAnalyser";
import { Navigation, Container } from "@/components/Layout/Layout.styled";
import styled from "styled-components";
import Circle from "@/components/Circle/Circle";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";

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

  const result = experienceAnalyser(data);

  return (
    <>
      <Container>
        <motion.div animate={{ opacity: 0 }} transition={{ delay: 8 }}>
          <DragInfo>
            {result[1].totalCount} entries in our collection at the moment.
            <br />
            click and drag the spheres
          </DragInfo>
        </motion.div>
        <Grid ref={containerRef}>
          {result[0].map((entry, index) => (
            <Circle
              key={index}
              count={entry.count}
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
      </Container>
    </>
  );
}

const Grid = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: var(--effect-radial-gradient);
`;

const DragInfo = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 5vh;
  text-align: center;
  z-index: 999;
  filter: drop-shadow(0px 14px 25px var(--color-main);
`;
