import * as Styled from "./MenuTrigger.styled";
import { motion } from "framer-motion";
import AnimationWrapper from "../AnimationWrapper/AnimationWrapper";

export default function MenuTrigger({ handleShowMenu, showMenu }) {
  return (
    <AnimationWrapper delay>
      <Styled.TriggerContainer>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Styled.MenuTriggerButton
            $showMenu={showMenu}
            onClick={() => handleShowMenu()}
          >
            {showMenu ? "close" : "menu"}
          </Styled.MenuTriggerButton>
        </motion.div>
      </Styled.TriggerContainer>
    </AnimationWrapper>
  );
}
