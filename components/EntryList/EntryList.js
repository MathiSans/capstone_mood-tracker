import Intensity from "@/utils/intensity";
import styled from "styled-components";
import Tracking from "@/utils/tracking";

export default function EntryList() {
  return (
    <StyledEntryList>
      {allEntries.map((entry) => {
        return (
          <StyledEntry key={entry.id}>
            <small>{entry.date}</small>
            <p>
              You felt{" "}
              <StyledSliderText>
                <Intensity intensity={entry.slider} />.
              </StyledSliderText>{" "}
              You selected these tags:{" "}
              <StyledExperienceText>
                {entry.experiences
                  .filter((experience) => Object.values(experience)[0])
                  .map((experience, index, array) => (
                    <span key={nanoid()}>
                      {Object.keys(experience)[0]}
                      {index < array.length - 1 && ", "}
                    </span>
                  ))}
              </StyledExperienceText>
              <span>. You wrote:</span>{" "}
              <StyledEntryText>{entry.text}</StyledEntryText>
            </p>
            <StyledSeparator />
          </StyledEntry>
        );
      })}
    </StyledEntryList>
  );
}

const StyledEntryList = styled.ul`
  list-style-type: none;
  padding: 0;
`;
const StyledEntry = styled.li`
  display: flex;
  justify-content: start;
  flex-direction: column;
`;

const StyledSliderText = styled.span`
  font-weight: bold;
`;

const StyledExperienceText = styled.span`
  font-weight: bold;
`;

const StyledEntryText = styled.span`
  font-weight: bold;
  font-style: italic;
`;

const StyledSeparator = styled.hr`
  border: 0.5px solid grey;
  width: 100%;
`;
