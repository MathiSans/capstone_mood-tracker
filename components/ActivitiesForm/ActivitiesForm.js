import { useState, useEffect } from "react";
import * as Styled from "./ActivitiesForm.styled";
import NavButton from "../NavButton/NavButton";
import { mutate } from "swr";
import Picker from "emoji-picker-react";
import styled from "styled-components";

export default function ActivitiesForm({ handleShowForm }) {
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [inputString, setInputString] = useState([]);
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (emoji) => {
    // setInputString((prevInput) => prevInput + emoji);
    setInputString((prevInput) => [...prevInput, emoji]);
    setShowPicker(false);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    console.log("inputString", inputString);
  }, [inputString]);

  function handleCheckboxChange(emotion, isChecked) {
    if (isChecked) {
      setSelectedEmotions([...selectedEmotions, emotion]);
    } else {
      setSelectedEmotions(selectedEmotions.filter((e) => e !== emotion));
    }
  }
  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch("/api/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: event.target.elements.title.value,
        emoji: inputString,
        description: event.target.elements.description.value,
        forEmotion: selectedEmotions,
      }),
    });

    if (response.ok) {
      mutate();

      event.target.reset();
      setSelectedEmotions([]);
      handleShowForm();
    }
  }

  return (
    <>
      <Styled.Card>
        <Styled.Form onSubmit={handleSubmit} id="newentry">
          <EmojiP>{inputString}</EmojiP>

          {inputString.length !== 0 && (
            <EmojiPickerDeleteButtons>
              <BackspaceButton
                onClick={() => {
                  setInputString(inputString.slice(0, -1));
                }}
              >
                ⌫
              </BackspaceButton>
              <ClearButton
                onClick={() => {
                  setInputString([]);
                }}
              >
                ✘
              </ClearButton>
            </EmojiPickerDeleteButtons>
          )}
          <button onClick={() => setShowPicker((val) => !val)}>
            Pick a Emoji ☺️
          </button>
          {showPicker && (
            <Picker
              pickerStyle={{ width: "100%" }}
              onEmojiClick={(emojiObject) => {
                onEmojiClick(emojiObject.emoji);
              }}
            />
          )}
          <label htmlFor="title">
            <Styled.InputField
              id="title"
              name="title"
              placeholder="title"
              required
            ></Styled.InputField>
          </label>
          <label htmlFor="description">
            <Styled.TextArea
              id="description"
              name="description"
              placeholder="description"
              rows="4"
              required
            ></Styled.TextArea>
          </label>
          <p>For which experiences could this be?</p>
          <Styled.CheckboxContainer>
            <label htmlFor="enjoyment">
              for enjoyment
              <Styled.CheckboxInput
                type="checkbox"
                id="enjoyment"
                onChange={(e) =>
                  handleCheckboxChange("enjoyment", e.target.checked)
                }
              ></Styled.CheckboxInput>
            </label>
            <label htmlFor="fear">
              for fear
              <Styled.CheckboxInput
                type="checkbox"
                id="fear"
                onChange={(e) => handleCheckboxChange("fear", e.target.checked)}
              ></Styled.CheckboxInput>
            </label>
            <label htmlFor="anger">
              for anger
              <Styled.CheckboxInput
                type="checkbox"
                id="anger"
                onChange={(e) =>
                  handleCheckboxChange("anger", e.target.checked)
                }
              ></Styled.CheckboxInput>
            </label>
            <label htmlFor="disgust">
              for Disgust
              <Styled.CheckboxInput
                type="checkbox"
                id="disgust"
                onChange={(e) =>
                  handleCheckboxChange("disgust", e.target.checked)
                }
              ></Styled.CheckboxInput>
            </label>
            <label htmlFor="sadness">
              for sadness
              <Styled.CheckboxInput
                type="checkbox"
                id="sadness"
                onChange={(e) =>
                  handleCheckboxChange("sadness", e.target.checked)
                }
              ></Styled.CheckboxInput>
            </label>
          </Styled.CheckboxContainer>
          <NavButton type="submit">Submit</NavButton>
        </Styled.Form>
      </Styled.Card>
    </>
  );
}

const BackspaceButton = styled.button`
  font-size: 1rem;
`;

const ClearButton = styled.button`
  font-size: 1rem;
`;

const EmojiPickerDeleteButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const EmojiP = styled.p`
  font-size: 4rem;
`;
