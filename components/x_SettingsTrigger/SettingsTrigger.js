import * as Styled from "./SettingsTrigger.styled";
import { motion } from "framer-motion";
import { LuSettings2 } from "react-icons/lu";

export default function SettingsTrigger({ handleShowSettings, showSettings }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Styled.SettingsTriggerButton
        $showSettings={showSettings}
        onClick={() => handleShowSettings()}
      >
        <LuSettings2 />
      </Styled.SettingsTriggerButton>
    </motion.div>
  );
}
