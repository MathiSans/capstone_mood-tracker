import Animation from "../Animation/Animation";
import Intensity from "@/utils/intensity";
import { useState, useEffect } from "react";
import * as Styled from "./EntryList.styled";

export default function EntriesList() {
  const [dataFromLocalStorage, setDataFromLocalStorage] = useState([]);

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem("anonymous_moods");
    if (dataFromLocalStorage) {
      const parsedData = JSON.parse(dataFromLocalStorage);
      setDataFromLocalStorage(parsedData);
    }
  }, []);

  function handleDeleteEntry(index) {
    const updatedData = [...dataFromLocalStorage];
    updatedData.splice(index, 1);
    setDataFromLocalStorage(updatedData);
    localStorage.setItem("anonymous_moods", JSON.stringify(updatedData));
  }
  return (
    <>
      {dataFromLocalStorage.map((entry, index) => (
        <>
          <Styled.Container key={index}>
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
          <Styled.Button onClick={() => handleDeleteEntry(index)}>
            delete mood
          </Styled.Button>
        </>
      ))}
    </>
  );
}
