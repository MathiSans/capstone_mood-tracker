import initialActivities from "@/activites.json";
import { useState } from "react";
import { nanoid } from "nanoid";
import { StyledList } from "./ActivityList.styled";
import styled from "styled-components";
import Link from "next/link";

export default function ActivityList() {
  const [activities, setActivities] = useState(initialActivities);

  function handleSubmit(event) {
    event.preventDefault();
    const submittedActivityForm = {
      activity: event.target.elements.Activity.value,
      emoji: event.target.elements.Emoji.value,
      text: event.target.elements.Description.value,
    };
    setActivities([...activities, submittedActivityForm]);
    console.log([...activities, submittedActivityForm]);
    event.target.reset();
  }

  return (
    <DesignContainer>
      <NewEntryLink href="#newentry">Add your Own activity</NewEntryLink>

      <StyledList>
        {activities.map((x) => (
          <StyledListElement key={nanoid()}>
            <StyledH2>{x.activity}</StyledH2>
            <StyledEmoji>{x.emoji}</StyledEmoji>
            <StyledText>{x.text}</StyledText>
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
