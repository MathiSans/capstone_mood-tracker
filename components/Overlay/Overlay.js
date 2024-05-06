import Menu from "../Menu/Menu";
import MenuTrigger from "../MenuTrigger/MenuTrigger";
import Settings from "../x_Settings/Settings";
import SettingsTrigger from "../x_SettingsTrigger/SettingsTrigger";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  MenuContainer,
  SettingsTriggerContainer,
  MenuTriggerContainer,
} from "./Overlay.styled";

export default function Overlay({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }
  // function handleShowSettings() {
  //   setShowSettings(!showSettings);
  // }

  return (
    <>
      <MenuContainer>
        <AnimatePresence>
          {showMenu && <Menu handleShowMenu={handleShowMenu} />}
          {showSettings && <Settings handleShowSettings={handleShowSettings} />}
        </AnimatePresence>
        <MenuTriggerContainer>
          <MenuTrigger showMenu={showMenu} handleShowMenu={handleShowMenu} />
        </MenuTriggerContainer>
        {/* <SettingsTriggerContainer>
          <SettingsTrigger
            showSettings={showSettings}
            handleShowSettings={handleShowSettings}
          />{" "}
        </SettingsTriggerContainer> */}
      </MenuContainer>
      {children}
    </>
  );
}
