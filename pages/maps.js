import { Container } from "@/components/Layout/Layout.styled";
import { motion } from "framer-motion";
import styled from "styled-components";
import useSWR from "swr";
import locationAnalyser from "@/utils/locationAnalyser";
import experienceAnalyser from "@/utils/experienceAnalyser";
import { useState } from "react";
import MapOfCircles from "@/components/MapOfCircles/MapOfCircles";

export default function Maps({}) {
  const [mapsToggle, setMapsToggle] = useState(true);
  const { data, isLoading } = useSWR("/api/entries");
  if (isLoading) {
    return <p>loading...</p>;
  }
  if (!data) {
    return <p>no connection to database</p>;
  }

  const locations = locationAnalyser(data);
  const experiences = experienceAnalyser(data);

  console.log(experiences);

  function handleMapsToggle() {
    setMapsToggle(!mapsToggle);
  }

  return (
    <>
      <Container>
        <Toggle mapsToggle={mapsToggle} handleMapsToggle={handleMapsToggle} />

        <DragInfo>
          {locations[1].totalCount} entries in our collection at the moment.
          <br />
          click and drag the spheres
        </DragInfo>
      </Container>
      <MapOfCircles data={mapsToggle ? experiences : locations} />
    </>
  );
}

function Toggle({ mapsToggle, handleMapsToggle }) {
  const variants = {
    open: { scale: 1 },
    closed: { scale: 1 },
  };

  return (
    <SwitcherContainer>
      <ToggleContainer>
        <Option
          onClick={() => handleMapsToggle()}
          $mapsToggle={!mapsToggle}
          animate={!mapsToggle ? "open" : "closed"}
          variants={variants}
        >
          location
        </Option>

        <Option
          onClick={() => handleMapsToggle()}
          $right
          $mapsToggle={mapsToggle}
          animate={mapsToggle ? "open" : "closed"}
          variants={variants}
        >
          experience
        </Option>
      </ToggleContainer>
    </SwitcherContainer>
  );
}

const Option = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  border-radius: ${(props) =>
    props.$right ? "0px 14px 14px 0px" : "14px 0px 0px 14px"};
  z-index: 999;

  &::after {
    position: absolute;
    content: "";
    width: 116px;
    height: 40px;
    border: ${(props) => (props.$mapsToggle ? "3px solid white" : "none")};
    border-radius: 14px;
  }
`;

const ToggleContainer = styled.div`
  padding: 4px;
  width: 240px;
  height: 49px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SwitcherContainer = styled.div`
  position: absolute;
  top: 100px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900;
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
  filter: drop-shadow(0px 14px 25px #000000);
`;
