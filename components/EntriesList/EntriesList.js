import Animation from "../3DAnimation/3DAnimation";
import Intensity from "@/utils/intensity";
import * as Styled from "./EntriesList.styled";
import useSWR, { useSWRConfig } from "swr";

export default function EntriesList() {
  const { data, isLoading } = useSWR("/api/entries");
  const { mutate } = useSWRConfig();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return;
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
      {reversedMoods.map((entry) => (
        <Styled.Container key={entry._id}>
          <Styled.AnimationContainer>
            <Animation color={entry.color} opacity={entry.intensity} />
          </Styled.AnimationContainer>
          <Styled.Sentence>
            <Styled.StaticText>You felt</Styled.StaticText> {entry.experience}.{" "}
            <Styled.StaticText>More specifically</Styled.StaticText>{" "}
            <Intensity value={entry.intensity} experience={entry.experience} />
            <Styled.StaticText>You selected these tags:</Styled.StaticText>{" "}
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
      ))}
    </>
  );
}
