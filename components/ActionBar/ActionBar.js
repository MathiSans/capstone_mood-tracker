import { Container, MenuItem } from "./ActionBar.styled";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import { TbSphere } from "react-icons/tb";
import { TbSphereOff } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MdLogin } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { FaSquarePersonConfined } from "react-icons/fa6";
import { BsPersonFill } from "react-icons/bs";

export default function ActionBar({
  handleHideInterface,
  hideInterface,
  dashboardIsOpen,
  handleDashboardIsOpen,
  session,
}) {
  function handleLoginButton() {
    if (session) {
      signOut();
    } else {
      signIn();
    }
  }

  return (
    <Container $isActive={!hideInterface}>
      <MenuItem
        onClick={!hideInterface ? () => handleLoginButton() : undefined}
        $left
        $isActive={!hideInterface}
      >
        {session ? (
          <Image
            alt="user profile picture"
            style={{ borderRadius: "var(--border-radius-round)" }}
            src={session.user.image}
            width={24}
            height={24}
            priority
          />
        ) : (
          <BsPersonFill style={{ fontSize: "1.2rem" }} />
        )}
      </MenuItem>
      <MenuItem
        onClick={!hideInterface ? () => handleDashboardIsOpen() : undefined}
        $isActive={!hideInterface}
      >
        {!dashboardIsOpen ? (
          <LuLayoutDashboard style={{ fontSize: "1.2rem" }} />
        ) : (
          <IoClose style={{ fontSize: "1.4rem" }} />
        )}
        {/* {dashboardIsOpen ? "close" : "open"} */}
      </MenuItem>
      <MenuItem
        style={{ fontSize: "1.2rem" }}
        $right
        $isActive={true}
        onClick={() => handleHideInterface()}
      >
        {!hideInterface ? <TbSphere /> : <TbSphereOff />}
      </MenuItem>
    </Container>
  );
}
