import { useRouter } from "next/router";
import useSWR from "swr";
import Animation from "../3DAnimation/3DAnimation";
import { Container, Page } from "../Layout/Layout.styled";
import {
  Sentence,
  StaticText,
  ButtonContainer,
  RoundButton,
} from "../EntriesList/EntriesList.styled";
import Intensity from "@/utils/intensity";
import { FiArrowLeft } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Entry() {
  const [showSentence, setShowSentence] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  const { data: entry, isLoading } = useSWR(`/api/entries/${id}`);

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
      <Container>
        <AnimatePresence>
          {showSentence && (
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
                  <StaticText>Somebody </StaticText>
                  {entry.location === "unknown" ? "" : `in ${entry.location}`}
                  <StaticText> felt</StaticText> {entry.experience}.{" "}
                  <StaticText>More specifically</StaticText>{" "}
                  <Intensity
                    value={entry.intensity}
                    experience={entry.experience}
                  />
                  <StaticText>. They selected these tags:</StaticText>{" "}
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
          )}
        </AnimatePresence>
        <ButtonContainer>
          <RoundButton as="a" onClick={() => router.back()}>
            {showSentence ? (
              <FiArrowLeft />
            ) : (
              <FiArrowLeft style={{ color: "grey", opacity: "0.5" }} />
            )}
          </RoundButton>
          <RoundButton as="a" onClick={() => handleShowSentence()}>
            {showSentence ? (
              <FaRegEyeSlash />
            ) : (
              <FaRegEye style={{ color: "grey", opacity: "0.5" }} />
            )}
          </RoundButton>
        </ButtonContainer>
      </Container>
    </>
  );
}
