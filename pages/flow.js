import { useState } from "react";
import { nanoid } from "nanoid";
import { TrackerContainer } from "@/styles";
import styled from "styled-components";
import Intensity from "@/utils/intensity";
import Form from "@/components/Form/Form";

export default function Flow() {
  const [rangeValue, setRangeValue] = useState(127.5);
  const [allEntries, setAllEntries] = useState([]);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  function onSubmit(event) {
    event.preventDefault();
    const submittedForm = {
      id: nanoid(),
      experiences: [
        { anger: event.target.anger.checked },
        { enjoyment: event.target.enjoyment.checked },
        { fear: event.target.fear.checked },
        { disgust: event.target.disgust.checked },
        { sadness: event.target.sadness.checked },
      ],
      text: event.target.text.value,
      slider: rangeValue,

      date: new Date().toLocaleString(),
    };

    setAllEntries([...allEntries, submittedForm]);
    console.log([...allEntries, submittedForm]);
    event.target.reset();
  }

  return (
    <TrackerContainer>
      <header>
        <h1>mood tracker</h1>
      </header>
      <Form onSubmit={onSubmit} handleRangeChange={handleRangeChange} />

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
    </TrackerContainer>
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
