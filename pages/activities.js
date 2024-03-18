import { TrackerContainer } from "@/styles";
import ActivityList from "@/components/ActivityList/ActivityList";
import styled from "styled-components";

export default function ActivityListRender() {
  function handleChangeOfEmotion(event) {
    const selectedEmotion = event.target.value;
    if (selectedEmotion == "enjoyment") {
      console.log("YUHUU FIDELDII🕺🏻🥳");
    } else {
      console.log(event.target.value);
    }
  }
  return (
    <>
      <TrackerContainer>
        <h1>
          <StyledHeadlineInline>
            <StyledYourMood> List of activites for</StyledYourMood>
            <form>
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
            </form>
          </StyledHeadlineInline>
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
