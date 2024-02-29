import { useState } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
import Form from "@/components/Form/Form";

export default function FormAndList() {
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

  function Intensity({ intensity }) {
    if (intensity <= 51) {
      return <span>very sad</span>;
    }
    if (intensity > 51 && intensity <= 102) {
      return <span>sad</span>;
    }
    if (intensity > 102 && intensity <= 153) {
      return <span>pleasant</span>;
    }
    if (intensity > 153 && intensity <= 255) {
      return <span>extremely good</span>;
    }
  }

  return (
    <>
      <header>
        <h1>mood tracker</h1>
      </header>
      <Form
        onSubmit={onSubmit}
        handleRangeValue={handleRangeChange}
        rangeValue={rangeValue}
      />

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
    </>
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
  gap: 10px;
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
