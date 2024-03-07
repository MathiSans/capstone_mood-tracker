import Animation from "../3DAnimation/3DAnimation";
import Intensity from "@/utils/intensity";
import * as Styled from "./EntryList.styled";
import useLocalStorageState from "use-local-storage-state";

export default function EntriesList() {
  const [moods, setMoods] = useLocalStorageState("anonymous_moods", {
    defaultValue: [],
  });

  function handleDeleteEntry(id) {
    const updatedMoods = moods.filter((mood) => mood.id !== id);
    setMoods(updatedMoods);
  }

  return (
    <>
      {moods.map((entry) => (
        <>
          <Styled.Container key={entry.id}>
            <Animation color={entry.experience[0].color} opacity={1} />
          </Styled.Container>
          <Styled.Sentence>
            <Styled.StaticText>You felt</Styled.StaticText>{" "}
            {entry.experience[0].name}.{" "}
            <Styled.StaticText>More specifically</Styled.StaticText>{" "}
            <Intensity
              value={entry.slider}
              experience={entry.experience[0].intensity}
            />
            <Styled.StaticText>. You selected these tags:</Styled.StaticText>{" "}
            {entry.reactions.map((reaction, index, array) => (
              <span key={index}>
                {reaction.name}
                {index < array.length - 1 && ", "}
              </span>
            ))}
          </Styled.Sentence>
          <Styled.Button onClick={() => handleDeleteEntry(entry.id)}>
            delete mood
          </Styled.Button>
        </>
      ))}
    </>
  );
}
