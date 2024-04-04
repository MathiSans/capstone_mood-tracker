import Intensity from "@/utils/intensity";
import * as Styled from "./EntriesList.styled";
import useSWR, { useSWRConfig } from "swr";
import { AnimatePresence, motion } from "framer-motion";
import { FiTrash2 } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function EntriesList() {
  const [deletingId, setDeletingId] = useState(null);
  const { data, isLoading } = useSWR("/api/entries");
  const { mutate } = useSWRConfig();
  const [filtered, setFiltered] = useState([]);
  const router = useRouter();

  const { data: session } = useSession();
  const userID = session?.user.id;
  console.log(userID);

  useEffect(() => {
    if (!data) return; // Exit early if data is not available

    // Reverse the data array
    const reversedData = [...data].reverse();

    // Filter the reversed data based on session and userID
    const filteredData = session
      ? reversedData.filter((entry) => entry.user === userID)
      : reversedData;

    setFiltered(filteredData);
  }, [data, session, userID]);

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (!data) {
    return <p>no data available</p>;
  }

  // useEffect(() => {
  //   const reversedMoods = data.slice().reverse();
  //   if (session) {
  //     setFiltered(reversedMoods.filter((object) => userID === object.user));
  //   } else {
  //     setFiltered(reversedMoods);
  //   }
  // }, [data, session, userID]);

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

  return (
    <>
      <Styled.Grid>
        <AnimatePresence>
          {filtered.map((entry) => (
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
                  {session ? (
                    <Styled.StaticText>{session.user.name} </Styled.StaticText>
                  ) : (
                    <Styled.StaticText>Somebody </Styled.StaticText>
                  )}{" "}
                  {entry.location === "unknown"
                    ? ""
                    : `in ${entry.location.region}`}
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
