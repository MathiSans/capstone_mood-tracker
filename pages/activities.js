import { Container, Navigation, Page } from "@/components/Layout/Layout";
import ActivityList from "@/components/ActivityList/ActivityList";
import styled from "styled-components";
import { useState } from "react";
import Guide from "@/components/Guide/Guide";
import NavButton from "@/components/NavButton/NavButton";

export default function ActivityListRender() {
  const [emotionSelected, setEmotionSelected] = useState();
  function handleChangeOfEmotion(event) {
    const selectedEmotion = event.target.value;
    setEmotionSelected(selectedEmotion);
  }
  return (
    <>
      <Container>
        <Page>
          <Guide text={"activities"} />
          {/* <StyledYourMood> List of activites for</StyledYourMood> */}

          {/* <form>
          <label>
            <StyledSelect
              name="emotions"
              size="5"
              onChange={(event) => {
                handleChangeOfEmotion(event);
              }}
            >
              <option value={"fear"}>fear</option>
              <option value={"anger"}>anger</option>
              <option value={"enjoyment"}>enjoyment</option>
              <option value={"disgust"}>disgust</option>
              <option value={"sadness"}>sadness</option>
            </StyledSelect>
          </label>
        </form> */}

          <ActivityList emotionSelected={emotionSelected} />
        </Page>
        <Navigation>
          <NavButton handleClick={() => router.push("/")}>
            enter a mood
          </NavButton>
        </Navigation>
      </Container>
    </>
  );
}

const StyledYourMood = styled.span`
  font-weight: 800;
  background: -webkit-linear-gradient(#cdea80, #cdeaff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledSelect = styled.select`
  color: black;
  padding: 0.2rem;
`;

const StyledHeadlineInline = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  &:active {
    border: 0;
  }
`;
