import { Container, MenuItem } from "./ActionBar.styled";
import { LuSettings2 } from "react-icons/lu";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";

export default function ActionBar({
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
    <Container>
      <MenuItem
        onClick={() => {
          handleLoginButton();
        }}
        $left
        $isActive={true}
      >
        {session ? (
          <Image
            alt="user profile picture"
            style={{ borderRadius: "var(--border-radius-round)" }}
            src={session.user.image}
            width={24}
            height={24}
          />
        ) : (
          "login"
        )}
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleDashboardIsOpen();
        }}
        $isActive={true}
      >
        {dashboardIsOpen ? "close" : "open"}
      </MenuItem>
      <MenuItem $right $isActive={true}>
        <LuSettings2 />
      </MenuItem>
    </Container>
  );
}
