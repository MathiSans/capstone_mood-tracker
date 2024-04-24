import { useRouter } from "next/router";
import useSWR from "swr";
import Animation from "../3DAnimation/3DAnimation";
import { Container, Page } from "../Layout/Layout.styled";
import {
  Sentence,
  StaticText,
  ToolsContainer,
  DeleteButton,
} from "../EntriesList/EntriesList.styled";
import Intensity from "@/utils/intensity";
import { FiArrowLeft } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useData } from "@/lib/useData";
import { useEffect } from "react";

export default function Entry({ id }) {
  const [showSentence, setShowSentence] = useState(true);
  const router = useRouter();
  // const { id } = router.query;
  const { data: session } = useSession();

  const { data: entry, isLoading } = useSWR(`/api/entries/${id}`);
  const { allUsers, isLoadingAllUsers, errorAllUsers } =
    useData().fetchedAllUsers;
  const { allCommunity, isLoadingAllCommunity, errorAllCommunity } =
    useData().fetchedCommunity;
  console.log(allCommunity);

  const getUsername = (userId) => {
    const friendlyRecipient =
      !isLoadingAllUsers &&
      allUsers.filter((friend) => {
        return friend._id === userId;
      });
    console.log(friendlyRecipient);
    return friendlyRecipient[0].name;
  };

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (!entry) {
    return;
  }

  function handleShowSentence() {
    setShowSentence(!showSentence);
  }

  return (
    <>
      <Animation color={entry.color} opacity={entry.intensity} />

      <AnimatePresence>
        {showSentence && (
          <Container>
            <motion.div
              key={entry._id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0.8,
                transition: { duration: 0.3 },
              }}
            >
              {" "}
              <Page>
                <Sentence>
                  {session ? "You " : <StaticText>Somebody </StaticText>}
                  {entry.location === "unknown" ? (
                    ""
                  ) : (
                    <>
                      <StaticText>in </StaticText>
                      {entry.location.region}
                    </>
                  )}
                  <StaticText> felt</StaticText> {entry.experience}.{" "}
                  <StaticText>More specifically</StaticText>{" "}
                  <Intensity
                    value={entry.intensity}
                    experience={entry.experience}
                  />
                  <StaticText>. You selected these tags:</StaticText>{" "}
                  {entry.reactions.map((reaction, index, array) => (
                    <span key={index}>
                      {reaction}
                      {index < array.length - 1 && ", "}
                    </span>
                  ))}
                </Sentence>
                <StaticText style={{ color: "white" }}>
                  Friends Message:
                  {!isLoadingAllCommunity &&
                    allCommunity
                      .filter((friends) => {
                        return friends.entryId === entry._id;
                      })
                      .map((message) => {
                        console.log("message", message);
                        const senderUsername =
                          message.senderId === null
                            ? "Anonym"
                            : getUsername(message.senderId);
                        return (
                          <p
                            style={{ fontSize: "11px", color: "white" }}
                            key={message._id}
                          >
                            {senderUsername} send you
                            {message.flowers} and invited you to{"  "}
                            {message.activity}
                          </p>
                        );
                      })}
                </StaticText>
                <StaticText>{entry.time}</StaticText>{" "}
              </Page>
            </motion.div>
          </Container>
        )}
      </AnimatePresence>
      <ToolsContainer>
        <DeleteButton as="a" onClick={() => router.back()}>
          {showSentence ? (
            <FiArrowLeft />
          ) : (
            <FiArrowLeft style={{ color: "grey", opacity: "0.5" }} />
          )}
        </DeleteButton>
        <DeleteButton as="a" onClick={() => handleShowSentence()}>
          {showSentence ? (
            <FaRegEyeSlash />
          ) : (
            <FaRegEye style={{ color: "grey", opacity: "0.5" }} />
          )}
        </DeleteButton>
      </ToolsContainer>
    </>
  );
}
