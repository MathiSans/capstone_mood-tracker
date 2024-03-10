import Animation from "../3DAnimation/3DAnimation";
import Intensity from "@/utils/intensity";
import * as Styled from "./EntriesList.styled";
import useLocalStorageState from "use-local-storage-state";

export default function EntriesList() {
  const [moods, setMoods] = useLocalStorageState("anonymous_moods", {
    defaultValue: [],
  });

  function handleDeleteEntry(id) {
    const updatedMoods = moods.filter((mood) => mood.id !== id);
    setMoods(updatedMoods);
  }

  const reversedMoods = moods.slice().reverse();

  return (
    <>
      {reversedMoods.map((entry) => (
        <Styled.Container key={entry.id}>
          <Styled.AnimationContainer>
            <Animation
              color={entry.experience[0].color}
              opacity={entry.slider}
            />
          </Styled.AnimationContainer>
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
        </Styled.Container>
      ))}
    </>
  );
}
