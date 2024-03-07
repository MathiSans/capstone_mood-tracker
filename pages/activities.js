import { TrackerContainer } from "@/styles";
import ActivityList from "@/components/ActivityList/ActivityList";
import styled from "styled-components";

export default function ActivityListRender() {
  return (
    <>
      <TrackerContainer>
        <h1>
          List of activites for <StyledYourMood>*Your Mood*</StyledYourMood>
        </h1>
        <ActivityList />
      </TrackerContainer>
    </>
  );
}

const StyledYourMood = styled.span`
  font-weight: 800;
  background: -webkit-linear-gradient(#cdea80, #cdeaff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
