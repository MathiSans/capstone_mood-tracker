import Menu from "../Menu/Menu";
import MenuTrigger from "../MenuTrigger/MenuTrigger";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MenuContainer } from "./Layout.styled";
import LoginButton from "../LoginButton/LoginButton";

export default function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  function handleShowMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <LoginButton />
      <MenuContainer>
        <AnimatePresence>
          {showMenu && <Menu handleShowMenu={handleShowMenu} />}
        </AnimatePresence>
        <MenuTrigger showMenu={showMenu} handleShowMenu={handleShowMenu} />
      </MenuContainer>
      {children}
    </>
  );
}
