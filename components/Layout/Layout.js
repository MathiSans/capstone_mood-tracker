import Menu from "../Menu/Menu";
import MenuTrigger from "../MenuTrigger/MenuTrigger";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  function handleShowMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <div style={{ position: "relative", zIndex: 9999 }}>
        <AnimatePresence>
          {showMenu && <Menu handleShowMenu={handleShowMenu} />}
        </AnimatePresence>
        <MenuTrigger showMenu={showMenu} handleShowMenu={handleShowMenu} />
      </div>
      {children}
    </>
  );
}
