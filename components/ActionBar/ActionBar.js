import { Container, MenuItem } from "./ActionBar.styled";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import { TbSphere } from "react-icons/tb";
import { TbSphereOff } from "react-icons/tb";

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
          "login"
        )}
      </MenuItem>
      <MenuItem
        onClick={!hideInterface ? () => handleDashboardIsOpen() : undefined}
        $isActive={!hideInterface}
      >
        {dashboardIsOpen ? "close" : "open"}
      </MenuItem>
      <MenuItem
        style={{ fontSize: "1rem" }}
        $right
        $isActive={true}
        onClick={() => handleHideInterface()}
      >
        {!hideInterface ? <TbSphere /> : <TbSphereOff />}
      </MenuItem>
    </Container>
  );
}
