import MuteButton from "../AudioSettings/MuteButton";
import * as Styled from "./Settings.styled";
import { motion } from "framer-motion";

export default function Settings({
  isMuted,
  currentVolume,
  setIsMuted,
  audioReference,
}) {
  return (
    <motion.div
      key="container"
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
    >
      <Styled.SettingsContainer></Styled.SettingsContainer>
    </motion.div>
  );
}
