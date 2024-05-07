import { useState, useEffect } from "react";
import * as Styled from "./ActivitiesForm.styled";
import NavButton from "@/components/NavButton/NavButton";
import { mutate } from "swr";
import Picker from "emoji-picker-react";
import { FiPlus } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";
import { useSession } from "next-auth/react";

export default function ActivitiesForm({ handleShowForm }) {
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const { data: session } = useSession();
  const userId = session?.user.id;

  function onEmojiClick(emoji) {
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
    const title = event.target.elements.title.value.trim();
    const description = event.target.elements.description.value.trim();
    if (!title || !description) {
      alert("Title, description or emoji cannot be empty or just spaces.");
      return;
    }

    const shapes = [
      "star",
      "triangle",
      "moon",
      "polygon",
      "flower",
      "rectangle",
      "ellipse",
      "wheel",
      "misc",
    ];

    const response = await fetch("/api/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: session ? userId : null,
        title: event.target.elements.title.value,
        description: event.target.elements.description.value,
        forEmotion: selectedEmotions,
        shapeIndex: Math.floor(Math.random() * 7),
        shapeType: shapes[Math.floor(Math.random() * shapes.length)],
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
    { text: "enjoyment", color: "#B6A660" },
    { text: "fear", color: "#9265BD" },
    { text: "anger", color: "#CD7373" },
    { text: "disgust", color: "#779962" },
    { text: "sadness", color: "#7190D4" },
  ];

  return (
    <>
      <Styled.Card>
        <form onSubmit={handleSubmit}>
          <Styled.AddEmojisSentence>
            Add a new activity
          </Styled.AddEmojisSentence>
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
          <Styled.question>
            <p>For which experiences could this be?</p>
          </Styled.question>
          <Styled.CheckboxContainer>
            {checkboxes.map((checkbox, index) => (
              <Styled.CheckboxLabel
                key={index}
                htmlFor={checkbox.text}
                $color={checkbox.color}
              >
                <div style={{ lineHeight: "18px" }}>{checkbox.text}</div>
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
