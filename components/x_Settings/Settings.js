import MuteButton from "../AudioSettings/MuteButton";
import * as Styled from "./Settings.styled";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

export default function Settings({ handleHideInterface, hideInterface }) {
  return (
    <motion.div
      key="container"
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
    >
      {/* <Styled.SettingsContainer> */}
      <HideInterface
        $hideInterface={hideInterface}
        onClick={handleHideInterface}
      >
        {hideInterface ? <FaRegEye /> : <FaRegEyeSlash />}
      </HideInterface>
      {/* </Styled.SettingsContainer> */}
    </motion.div>
  );
}

const HideInterface = styled.button`
  background-color: transparent;
  border: 1px solid
    ${(props) =>
      props.$hideInterface ? `var(--color-neutral)` : `var(--color-main-alt)`};
  color: ${(props) =>
    props.$hideInterface ? `var(--color-neutral)` : `var(--color-main-alt)`};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-round);
  margin-inline-end: 1.5rem;
  margin-block-end: 5.5rem;
  font-size: 1.2rem;
  height: 40px;
  width: 40px;
  cursor: pointer;
  position: absolute;
  z-index: 1000;
  bottom: 0;
  right: 0;
`;
