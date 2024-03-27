import Intensity from "@/utils/intensity";
import * as Styled from "./EntriesList.styled";
import { useSWRConfig } from "swr";
import { AnimatePresence, motion } from "framer-motion";
import { FiTrash2 } from "react-icons/fi";
import { useState } from "react";
import { useRouter } from "next/router";

export default function EntriesList({ data }) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState(null);
  const { mutate } = useSWRConfig();

  function handleDeleteDialog(event, id) {
    event.stopPropagation();
    setDeletingId(id);
  }

  async function handleDeleteEntry(event, id) {
    event.stopPropagation();
    await fetch(`/api/entries/${id}`, {
      method: "DELETE",
    });
    mutate("/api/entries");
  }

  const reversedMoods = data.slice().reverse();

  return (
    <>
      <Styled.Grid>
        <AnimatePresence>
          {reversedMoods.map((entry) => (
            <motion.div
              key={entry._id}
              whileHover={{ scale: 1.05 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
            >
              <Styled.Card onClick={() => router.push(`${entry._id}`)}>
                <Styled.AnimationContainer>
                  <Styled.ColoredShape color={entry.color} />
                </Styled.AnimationContainer>
                <Styled.Sentence>
                  <Styled.StaticText>Somebody </Styled.StaticText>
                  {entry.location === "unknown" ? "" : `in ${entry.location}`}
                  <Styled.StaticText> felt</Styled.StaticText>{" "}
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
                <Styled.ButtonContainer>
                  {deletingId === entry._id ? (
                    <>
                      <Styled.DeleteQuestion>
                        sure about deleting?
                      </Styled.DeleteQuestion>
                      <Styled.DeleteAnswer
                        red
                        onClick={(event) => handleDeleteEntry(event, entry._id)}
                      >
                        yes
                      </Styled.DeleteAnswer>
                      <Styled.DeleteAnswer
                        onClick={(event) => handleDeleteDialog(event, null)}
                      >
                        no
                      </Styled.DeleteAnswer>
                    </>
                  ) : (
                    <>
                      <Styled.RoundButton
                        as="a"
                        onClick={(event) =>
                          handleDeleteDialog(event, entry._id)
                        }
                      >
                        <FiTrash2 />
                      </Styled.RoundButton>
                    </>
                  )}
                </Styled.ButtonContainer>
              </Styled.Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </Styled.Grid>
    </>
  );
}
