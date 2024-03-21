import { useState, useEffect } from "react";
import * as Styled from "./ActivitiesForm.styled";
import NavButton from "../NavButton/NavButton";
import { mutate } from "swr";
import Picker from "emoji-picker-react";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";

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
        <form onSubmit={handleSubmit} id="newentry">
          <Styled.EmojiContainer>
            {inputString.length !== 0 ? (
              <>
                <Emojis inputString={inputString}>{inputString}</Emojis>
                <DeleteButton
                  onClick={() => {
                    setInputString(inputString.slice(0, -1));
                  }}
                >
                  <FiDelete />
                </DeleteButton>
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
            <Styled.CheckboxLabel htmlFor="enjoyment" color="#dabe39">
              enjoyment
              <Styled.CheckboxInput
                type="checkbox"
                text="enjoyment"
                id="enjoyment"
                color="yellow"
                onChange={(e) =>
                  handleCheckboxChange("enjoyment", e.target.checked)
                }
              ></Styled.CheckboxInput>
            </Styled.CheckboxLabel>
            <Styled.CheckboxLabel htmlFor="fear" color="purple">
              fear
              <Styled.CheckboxInput
                type="checkbox"
                id="fear"
                color="purple"
                onChange={(e) => handleCheckboxChange("fear", e.target.checked)}
              ></Styled.CheckboxInput>
            </Styled.CheckboxLabel>
            <Styled.CheckboxLabel htmlFor="anger" color="red">
              anger
              <Styled.CheckboxInput
                type="checkbox"
                id="anger"
                color="red"
                onChange={(e) =>
                  handleCheckboxChange("anger", e.target.checked)
                }
              ></Styled.CheckboxInput>
            </Styled.CheckboxLabel>
            <Styled.CheckboxLabel htmlFor="disgust" color="green">
              disgust
              <Styled.CheckboxInput
                type="checkbox"
                id="disgust"
                color="green"
                onChange={(e) =>
                  handleCheckboxChange("disgust", e.target.checked)
                }
              ></Styled.CheckboxInput>
            </Styled.CheckboxLabel>
            <Styled.CheckboxLabel htmlFor="sadness" color="blue">
              sadness
              <Styled.CheckboxInput
                type="checkbox"
                id="sadness"
                color="blue"
                onChange={(e) =>
                  handleCheckboxChange("sadness", e.target.checked)
                }
              ></Styled.CheckboxInput>
            </Styled.CheckboxLabel>
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

const BackspaceButton = styled.button`
  font-size: 1rem;
`;

const DeleteButton = styled.button`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  margin-top: 5px;
  border: none;
  font-size: 1.6rem;
  background-color: transparent;
  color: white;
`;

const EmojiPickerDeleteButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Emojis = styled.div`
  font-size: ${(props) => (props.inputString.length > 2 ? "2.5rem" : "4rem")};
`;
