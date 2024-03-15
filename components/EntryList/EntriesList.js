import Animation from "../3DAnimation/3DAnimation";
import Intensity from "@/utils/intensity";
import * as Styled from "./EntriesList.styled";
import useSWR, { useSWRConfig } from "swr";
import { motion, AnimatePresence } from "framer-motion";

export default function EntriesList() {
  const { data, isLoading } = useSWR("/api/entries");
  const { mutate } = useSWRConfig();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>No data available</p>;
  }

  async function handleDeleteEntry(id) {
    await fetch(`/api/entries/${id}`, {
      method: "DELETE",
    });
    mutate("/api/entries");
  }

  const reversedMoods = data.slice().reverse();

  return (
    <>
      <AnimatePresence>
        {reversedMoods.map((entry, index) => (
          <motion.div
            key={entry._id}
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: 1,
              transition: { delay: 0 + index, duration: 1 },
            }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          >
            <Styled.Container>
              <Styled.AnimationContainer>
                <Animation color={entry.color} opacity={entry.intensity} />
              </Styled.AnimationContainer>
              <Styled.Sentence>
                <Styled.StaticText>
                  {entry.user === "anonymous" ? "Somebody" : entry.user} felt
                </Styled.StaticText>{" "}
                {entry.experience}.{" "}
                <Styled.StaticText>More specifically</Styled.StaticText>{" "}
                <Intensity
                  value={entry.intensity}
                  experience={entry.experience}
                />
                <Styled.StaticText>
                  . They selected these tags:
                </Styled.StaticText>{" "}
                {entry.reactions.map((reaction, index, array) => (
                  <span key={index}>
                    {reaction}
                    {index < array.length - 1 && ", "}
                  </span>
                ))}
              </Styled.Sentence>
              <Styled.Button onClick={() => handleDeleteEntry(entry._id)}>
                delete mood
              </Styled.Button>
            </Styled.Container>
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}
