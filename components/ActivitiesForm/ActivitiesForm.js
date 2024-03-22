import { useState } from "react";
import initialActivities from "@/activities.json";
import * as Styled from "./ActivitiesForm.styled";
import NavButton from "../NavButton/NavButton";
import { mutate } from "swr";

export default function ActivitiesForm({ handleShowForm }) {
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [activities, setActivities] = useState(initialActivities);
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
        emoji: event.target.elements.emoji.value,
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
          <label htmlFor="emoji">
            <Styled.InputField
              id="emoji"
              name="emoji"
              placeholder="☺️"
              maxlength="2"
              required
            ></Styled.InputField>
          </label>
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
