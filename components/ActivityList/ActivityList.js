import initialActivities from "@/activites.json";
import { useState } from "react";
import { nanoid } from "nanoid";
import { StyledList } from "./ActivityList.styled";
import styled from "styled-components";
import Link from "next/link";

export default function ActivityList({ emotionSelected }) {
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [activities, setActivities] = useState(initialActivities);

  function handleCheckboxChange(emotion, isChecked) {
    if (isChecked) {
      setSelectedEmotions([...selectedEmotions, emotion]);
    } else {
      setSelectedEmotions(selectedEmotions.filter((e) => e !== emotion));
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    const submittedActivityForm = {
      activity: event.target.elements.Activity.value,
      emoji: event.target.elements.Emoji.value,
      text: event.target.elements.Description.value,
      forEmotion: selectedEmotions,
    };
    setActivities([...activities, submittedActivityForm]);
    event.target.reset();
    setSelectedEmotions([]);
  }

  const filteredActivities = activities.filter(
    (activity) =>
      Array.isArray(activity.forEmotion) &&
      activity.forEmotion.includes(emotionSelected)
  );
  console.log("filteredActivities", filteredActivities);

  return (
    <DesignContainer>
      <NewEntryLink href="#newentry">Add your Own activity</NewEntryLink>

      <StyledList>
        {filteredActivities.map((x) => (
          <StyledListElement key={nanoid()}>
            <StyledH2>{x.activity}</StyledH2>
            <StyledEmoji>{x.emoji}</StyledEmoji>
            <StyledText>
              {x.tool === "TOOL" ? <ToolSpan>TOOL</ToolSpan> : ""}
              {x.tool === "TOOL" ? (
                <StyledLink href="/smiletrainer"> {x.text}</StyledLink>
              ) : (
                `${x.text}`
              )}
            </StyledText>
          </StyledListElement>
        ))}
      </StyledList>
      <StyledForm onSubmit={handleSubmit} id="newentry">
        <label htmlFor="Activity">
          Activity:
          <input
            id="Activity"
            name="Activity"
            placeholder="Title of the activity"
          ></input>
        </label>
        <label htmlFor="Emoji">
          Emoji:
          <input
            id="Emoji"
            name="Emoji"
            placeholder="control+option+space"
          ></input>
        </label>
        <label htmlFor="Description">
          Description:
          <input
            id="Description"
            name="Description"
            placeholder="describe details to this activity.."
          ></input>
        </label>
        <p>For which emotional state do you recommend this activity?</p>
        <label htmlFor="enjoyment">
          for enjoyment
          <input
            type="checkbox"
            id="enjoyment"
            onChange={(e) =>
              handleCheckboxChange("enjoyment", e.target.checked)
            }
          ></input>
        </label>
        <label htmlFor="fear">
          for fear
          <input
            type="checkbox"
            id="fear"
            onChange={(e) => handleCheckboxChange("fear", e.target.checked)}
          ></input>
        </label>
        <label htmlFor="anger">
          for anger
          <input
            type="checkbox"
            id="anger"
            onChange={(e) => handleCheckboxChange("anger", e.target.checked)}
          ></input>
        </label>
        <label htmlFor="disgust">
          for Disgust
          <input
            type="checkbox"
            id="disgust"
            onChange={(e) => handleCheckboxChange("disgust", e.target.checked)}
          ></input>
        </label>
        <label htmlFor="sadness">
          for sadness
          <input
            type="checkbox"
            id="sadness"
            onChange={(e) => handleCheckboxChange("sadness", e.target.checked)}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </StyledForm>
    </DesignContainer>
  );
}

const DesignContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledH2 = styled.h2`
  font-weight: bold;
  text-decoration: underline;
  text-align: center;
  padding: 0.8rem;
`;
const StyledEmoji = styled.p`
  background-color: white;
  font-size: 4rem;
  text-align: center;
  list-style-type: none;
`;

export const StyledListElement = styled.li`
  border: 1px solid white;
  border-radius: 12px;
  list-style-type: none;
  margin: 5rem;
`;

const StyledText = styled.p`
  padding: 1.5rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid white;
  padding: 1.5rem;
  border-radius: 12px;
`;

const NewEntryLink = styled(Link)`
  &:link {
    color: yellow;
  }
  &:visited {
    color: white;
  }
  &:hover {
    color: hotpink;
  }
  &:active {
    color: lightcyan;
  }
`;

const ToolSpan = styled.span`
  font-weight: bold;
  background-color: white;
  color: black;
  padding: 0.1rem;
  border-radius: 5px;
`;
const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00;
  }
`;
