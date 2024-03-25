import { useState, useEffect } from "react";
import * as Styled from "./ActivitiesForm.styled";
import NavButton from "../NavButton/NavButton";
import { mutate } from "swr";
import Picker from "emoji-picker-react";
import { FiPlus } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";

export default function ActivitiesForm({ handleShowForm }) {
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [inputString, setInputString] = useState([]);
  const [showPicker, setShowPicker] = useState(false);

  function onEmojiClick(emoji) {
    setInputString((prevInput) => [...prevInput, emoji]);
    setShowPicker(false);
    window.scrollTo(0, 0);
  }

  function handleCheckboxChange(emotion, isChecked) {
    if (isChecked) {
      setSelectedEmotions([...selectedEmotions, emotion]);
    } else {
      setSelectedEmotions(
        selectedEmotions.filter(
          (selectedEmotion) => selectedEmotion !== emotion
        )
      );
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

  const checkboxes = [
    { text: "enjoyment", color: "#dabe39" },
    { text: "fear", color: "purple" },
    { text: "anger", color: "red" },
    { text: "disgust", color: "green" },
    { text: "sadness", color: "blue" },
  ];

  return (
    <>
      <Styled.Card>
        <form onSubmit={handleSubmit}>
          <Styled.EmojiContainer>
            {inputString.length !== 0 ? (
              <>
                <Styled.Emojis inputString={inputString}>
                  {inputString}
                </Styled.Emojis>
                <Styled.DeleteButton
                  onClick={() => {
                    setInputString(inputString.slice(0, -1));
                  }}
                >
                  <FiDelete />
                </Styled.DeleteButton>
              </>
            ) : null}
            {inputString.length < 5 && (
              <>
                <Styled.addButton
                  type="button"
                  onClick={() => setShowPicker(!showPicker)}
                >
                  <FiPlus />
                </Styled.addButton>
                {inputString.length === 0 && (
                  <Styled.AddEmojisSentence>
                    add emojis
                  </Styled.AddEmojisSentence>
                )}
              </>
            )}
          </Styled.EmojiContainer>
          {showPicker && (
            <Picker
              style={{
                position: "absolute",
                top: "90px",
                left: "0",
                zIndex: "10",
              }}
              pickerStyle={{ width: "100%" }}
              onEmojiClick={(emojiObject) => {
                onEmojiClick(emojiObject.emoji);
              }}
            />
          )}

          <Styled.Label htmlFor="title">
            enter a title for your activity
            <Styled.InputField
              id="title"
              name="title"
              maxLength={50}
              required
            ></Styled.InputField>
          </Styled.Label>
          <Styled.Label htmlFor="description">
            describe your activity in a short form
            <Styled.TextArea
              id="description"
              name="description"
              maxLength={250}
              rows="4"
              required
            ></Styled.TextArea>
          </Styled.Label>
          <p>For which experiences could this be?</p>

          <Styled.CheckboxContainer>
            {checkboxes.map((checkbox, index) => (
              <Styled.CheckboxLabel
                key={index}
                htmlFor={checkbox.text}
                color={checkbox.color}
              >
                {checkbox.text}
                <Styled.CheckboxInput
                  type="checkbox"
                  id={checkbox.text}
                  onChange={(event) =>
                    handleCheckboxChange(checkbox.text, event.target.checked)
                  }
                />
              </Styled.CheckboxLabel>
            ))}
          </Styled.CheckboxContainer>
          <Styled.ButtonArea>
            <NavButton type="submit">Save</NavButton>
            <NavButton type="button" handleClick={handleShowForm}>
              Cancel
            </NavButton>
          </Styled.ButtonArea>
        </form>
      </Styled.Card>
    </>
  );
}
