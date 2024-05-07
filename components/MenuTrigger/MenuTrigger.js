import * as Styled from "./MenuTrigger.styled";
import { CgMenu } from "react-icons/cg";
import { motion } from "framer-motion";

export default function MenuTrigger({ handleShowMenu, showMenu }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Styled.MenuTriggerButton
        $showMenu={showMenu}
        onClick={() => handleShowMenu()}
      >
        <CgMenu />
      </Styled.MenuTriggerButton>
    </motion.div>
  );
}
