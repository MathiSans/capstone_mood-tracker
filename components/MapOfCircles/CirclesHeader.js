import { motion } from "framer-motion";
import styled from "styled-components";

export default function CirclesHeader({ totalCount, mapsToggle, spring }) {
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
          backgroundColor: `var(--color-main-alt)`,
          borderRadius: `var(--border-radius-medium)`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: `var(--color-main)`,
        }}
        layout
        transition={spring}
      >
        <SwitchText>{mapsToggle ? "emotions" : "locations"}</SwitchText>
      </motion.div>
    </Switch>
  </Header>;
}

const SwitchText = styled.p`
  font-size: 0.8rem;
`;

const Header = styled.div`
  position: absolute;
  top: 5vh;
  gap: var(--spacing-l);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Switch = styled.div`
  width: 160px;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: ${(props) => (props.$right ? "flex-end" : "flex-start")};
  border-radius: var(--border-radius-large);
  padding: var(--spacing-s);
  cursor: pointer;
  z-index: 999;
`;

const DragInfo = styled.div`
  text-align: center;
  z-index: 999;
  filter: drop-shadow(0px 14px 25px var(--color-main));
`;
