import { Container } from "@/components/Layout/Layout.styled";
import { motion } from "framer-motion";
import styled from "styled-components";
import useSWR from "swr";
import locationAnalyser from "@/utils/locationAnalyser.js";
import experienceAnalyser from "@/utils/experienceAnalyser.js";
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

  const { locations, totalCount } = locationAnalyser(data);
  const { experiences } = experienceAnalyser(data);

  function handleMapsToggle() {
    setMapsToggle(!mapsToggle);
  }

  const spring = {
    type: "spring",
    stiffness: 300,
    damping: 20,
  };

  console.log("locations: ", locations);
  console.log("experiences", experiences);

  return (
    <>
      <Container>
        <Header>
          <DragInfo>
            {totalCount} entries in our collection at the moment.
            <br />
            click and drag the spheres 👾
          </DragInfo>
          <Switch $right={mapsToggle} onClick={() => handleMapsToggle()}>
            <motion.div // styled-components police, be aware: motion.divs are kind of incompatible with styled-components and must be styled like this 🤓
              style={{
                width: "80px",
                height: "32px",
                backgroundColor: "white",
                borderRadius: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
              }}
              layout
              transition={spring}
            >
              <SwitchText>{mapsToggle ? "emotions" : "locations"}</SwitchText>
            </motion.div>
          </Switch>
        </Header>
      </Container>
      <MapOfCircles data={mapsToggle ? experiences : locations} />
    </>
  );
}

const SwitchText = styled.p`
  font-size: 0.8rem;
`;

const Header = styled.div`
  position: absolute;
  top: 5vh;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Switch = styled.div`
  width: 160px;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: ${(props) => (props.$right ? "flex-end" : "flex-start")};
  border-radius: 3.125rem;
  padding: 8px;
  cursor: pointer;
  z-index: 999;
`;

const DragInfo = styled.div`
  text-align: center;
  z-index: 999;
  filter: drop-shadow(0px 14px 25px #000000);
`;
