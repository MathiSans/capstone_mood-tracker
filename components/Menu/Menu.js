import NavButton from "../NavButton/NavButton";
import * as Styled from "./Menu.styled";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Menu({ handleShowMenu }) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLoginButton = () => {
    if (session) {
      signOut();
    } else {
      signIn();
    }
  };

  const buttonAnimation = {
    whileHover: { scale: 1.05 },
    exit: {
      filter: "blur(10px)",
      transition: { duration: 0.7 },
    },
    initial: { filter: "blur(10px)" },
    animate: {
      filter: "blur(0px)",
      transition: { duration: 0.7 },
    },
  };

  async function handleMenuButtonClick(linkToPage) {
    if (linkToPage === "handleLoginButton") {
      handleLoginButton();
    } else {
      await router.push(linkToPage);
      handleShowMenu();
    }
  }

  return (
    <motion.div
      key="container"
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
    >
      <Styled.MenuContainer>
        {[
          { text: session ? "logout" : "login", link: "handleLoginButton" },
          { text: "enter a mood", link: "/" },
          { text: "moods collection", link: "/entries" },
          { text: "moods map", link: "/moods-map" },
          { text: "activities", link: "/activities" },
        ].map((page, index) => (
          <motion.div key={index} {...buttonAnimation}>
            <NavButton handleClick={() => handleMenuButtonClick(page.link)}>
              {page.text}
            </NavButton>
          </motion.div>
        ))}
      </Styled.MenuContainer>
    </motion.div>
  );
}
