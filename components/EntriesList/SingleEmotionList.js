import * as Styled from "./EntriesList.styled";
import { motion } from "framer-motion";
import Intensity from "@/utils/intensity";
import { FiTrash2 } from "react-icons/fi";

export default function SingleEmotionList({
  singleEmotionEntryList,
  filter,
  deletingId,
}) {
  return (
    <>
      {singleEmotionEntryList.map((entry) => (
        <>
          <motion.div
            key={entry._id}
            whileHover={{ scale: 1.05 }}
            exit={{
              opacity: 0,
              scale: 0.8,
              transition: { duration: 0.3 },
            }}
          >
            <Styled.Card onClick={() => router.push(`${entry._id}`)}>
              <Styled.ColoredShapeContainer>
                <Styled.ColoredShape color={entry.color} />
              </Styled.ColoredShapeContainer>
              <Styled.Sentence>
                <Styled.StaticText>Somebody </Styled.StaticText>
                {entry.location === "unknown"
                  ? ""
                  : `in ${entry.location.region}`}
                <Styled.StaticText> felt</Styled.StaticText> {entry.experience}.{" "}
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
              <div>
                {filter === "lastWeek" ? (
                  <Styled.Sentence>{entry.time}</Styled.Sentence>
                ) : (
                  ""
                )}
              </div>

              <Styled.DeleteContainer>
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
                    <Styled.DeleteButton
                      as="a"
                      onClick={(event) => handleDeleteDialog(event, entry._id)}
                    >
                      <FiTrash2 />
                    </Styled.DeleteButton>
                  </>
                )}
              </Styled.DeleteContainer>
            </Styled.Card>
          </motion.div>
        </>
      ))}
    </>
  );
}
