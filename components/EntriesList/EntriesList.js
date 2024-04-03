import Intensity from "@/utils/intensity";
import * as Styled from "./EntriesList.styled";
import { useSWRConfig } from "swr";
import { AnimatePresence, motion } from "framer-motion";
import { FiTrash2 } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function EntriesList({ data }) {
  const [filtered, setFiltered] = useState([]);
  const router = useRouter();
  const [deletingId, setDeletingId] = useState(null);
  const { mutate } = useSWRConfig();
  useEffect(() => {
    console.log("Data received:", data);
    const currentDate = new Date();
    const reversedData = [...data].reverse();
    console.log("Reversed data:", reversedData);

    // Create an array to store the last 7 days' dates
    const lastSevenDays = [];

    // Loop through the last 7 days and push their formatted dates into the array
    for (let i = 0; i < 7; i++) {
      const date = new Date(currentDate.getTime() - i * 24 * 60 * 60 * 1000);
      const formattedDate1 = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`;
      const formattedDate2 = `${date.getDate()}.${
        date.getMonth() + 1
      }.${date.getFullYear()}`;
      lastSevenDays.push(`${formattedDate1}, ${formattedDate2}`);
    }
    console.log("Last seven days:", lastSevenDays);
    const lastSevenDaysEntries = reversedData.filter((entry) => {
      const entryDate = entry.time.split(",")[0].trim(); // Get the date part of the entry's time
      const match = lastSevenDays.some((dates) => {
        const [date1, date2] = dates.split(",").map((date) => date.trim()); // Split the dates in lastSevenDays array
        return entryDate === date1 || entryDate === date2; // Check for a match
      });
      return match;
    });

    console.log("Last seven days entries:", lastSevenDaysEntries);

    setFiltered(lastSevenDaysEntries);
  }, [data]);

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
