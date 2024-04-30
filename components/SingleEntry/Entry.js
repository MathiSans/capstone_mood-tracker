import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import { FiTrash2 } from "react-icons/fi";
import { Container, Page } from "../Layout/Layout.styled";
import {
  Sentence,
  StaticText,
  ToolsContainer,
  DeleteButton,
} from "../EntriesList/EntriesList.styled";
import Intensity from "@/utils/intensity";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useSphereState } from "../ContextProviders/SphereStateProvider/SphereStateProvider";
import { useEffect } from "react";

export default function Entry({ id }) {
  const { handleSphereState } = useSphereState();
  const [showSentence, setShowSentence] = useState(true);
  const router = useRouter();
  const { data: session } = useSession();
  const { data: entry, isLoading } = useSWR(`/api/entries/${id}`);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    handleSphereState({ color: entry?.color, intensity: entry?.intensity });
  }, [entry]);

  if (isLoading) {
    return <p>loading ...</p>;
  }

  if (!entry) {
    return;
  }

  function handleShowSentence() {
    setShowSentence(!showSentence);
  }

  async function handleDeleteEntry(event, id) {
    event.stopPropagation();
    await fetch(`/api/entries/${id}`, {
      method: "DELETE",
    });
    mutate("/api/entries");
    router.push("index");
  }

  function handleDeleteDialog(event, id) {
    event.stopPropagation();
    setDeletingId(id);
  }

  return (
    <>
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
                  <StaticText>
                    . {session ? "You" : "They"} selected these tags:
                  </StaticText>{" "}
                  {entry.reactions.map((reaction, index, array) => (
                    <span key={index}>
                      {reaction}
                      {index < array.length - 1 && ", "}
                    </span>
                  ))}
                </Sentence>
                <StaticText>{entry.time}</StaticText>{" "}
              </Page>
            </motion.div>
          </Container>
        )}
      </AnimatePresence>
      {session && (
        <ToolsContainer>
          {deletingId === entry._id ? (
            <DeleteButton
              style={{ color: "red" }}
              as="a"
              onClick={(event) => handleDeleteEntry(event, entry._id)}
            >
              <FiTrash2 />
            </DeleteButton>
          ) : (
            <DeleteButton
              as="a"
              onClick={(event) => handleDeleteDialog(event, entry._id)}
            >
              {showSentence ? (
                <FiTrash2 />
              ) : (
                <FiTrash2 style={{ color: "grey", opacity: "0.5" }} />
              )}
            </DeleteButton>
          )}
          <DeleteButton as="a" onClick={() => handleShowSentence()}>
            {showSentence ? (
              <FaRegEyeSlash />
            ) : (
              <FaRegEye style={{ color: "grey", opacity: "0.5" }} />
            )}
          </DeleteButton>
        </ToolsContainer>
      )}
    </>
  );
}
