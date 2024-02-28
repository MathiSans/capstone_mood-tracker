import { useState } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";

export default function FormAndList() {
  const [rangeValue, setRangeValue] = useState(127.5);
  const [allEntries, setallEntries] = useState([]);

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

    setallEntries([...allEntries, submittedForm]);
    // console.log([...allEntries, submittedForm]);
    event.target.reset();
  }

  function Intensity({ intensity }) {
    if (intensity <= 51) {
      return <span>very sad</span>;
    }
    if (intensity >= 51 && intensity <= 102) {
      return <span>sad</span>;
    }
    if (intensity >= 102 && intensity <= 153) {
      return <span>pleasent</span>;
    }
    if (intensity >= 153 && intensity > 206) {
      return <span>extremely good</span>;
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <h1>mood tracker</h1>
      <div style={{ maxWidth: "300px" }}>
        <form
          onSubmit={onSubmit}
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div>
            <span style={{ fontSize: "2rem" }}>😔</span>
            <input
              style={{ width: "200px" }}
              type="range"
              name="slider"
              value={rangeValue}
              onChange={handleRangeChange}
              min={0}
              max={255}
            ></input>
            <span style={{ fontSize: "2rem" }}>🤩</span>
          </div>
          <div>
            <p>Select how you feel:</p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <StyledCheckbox htmlFor="anger">
                Anger
                <StyledCheckboxCheck type="checkbox" name="anger" id="anger" />
              </StyledCheckbox>
              <StyledCheckbox htmlFor="fear">
                Fear
                <StyledCheckboxCheck type="checkbox" name="fear" id="fear" />
              </StyledCheckbox>
              <StyledCheckbox htmlFor="enjoyment">
                Enjoyment
                <StyledCheckboxCheck
                  type="checkbox"
                  name="enjoyment"
                  id="enjoyment"
                />
              </StyledCheckbox>
              <StyledCheckbox htmlFor="disgust">
                Disgust
                <StyledCheckboxCheck
                  type="checkbox"
                  name="disgust"
                  id="disgust"
                />
              </StyledCheckbox>
              <StyledCheckbox htmlFor="sadness">
                Sadness
                <StyledCheckboxCheck
                  type="checkbox"
                  name="sadness"
                  id="sadness"
                />
              </StyledCheckbox>
            </div>
          </div>

          <textarea
            style={{ width: "100%", height: "80px", borderRadius: "10px" }}
            name="text"
            placeholder="What's on your mind today?"
          />
          <button
            style={{ width: "100%", height: "30px", borderRadius: "10px" }}
            type="submit"
          >
            Submit
          </button>
          <hr style={{ width: "100%" }} />
        </form>

        <ul style={{ listStyle: "none", padding: "0" }}>
          {allEntries.map((entry) => {
            return (
              <li
                style={{
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: "column",
                  gap: "10px",
                }}
                key={entry.id}
              >
                <small>{entry.date}</small>
                <p>
                  You felt{" "}
                  <span style={{ fontWeight: "bold" }}>
                    <Intensity intensity={entry.slider} />.
                  </span>{" "}
                  You selected these tags:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {entry.experiences
                      .filter((experience) => Object.values(experience)[0])
                      .map((experience, index, array) => (
                        <span key={nanoid()}>
                          {Object.keys(experience)[0]}
                          {index < array.length - 1 && ", "}
                        </span>
                      ))}
                  </span>
                  <span>
                    . You wrote:{" "}
                    <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                      {entry.text}
                    </span>
                  </span>
                </p>
                <hr style={{ border: "0.5px solid grey", width: "100%" }} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const StyledCheckbox = styled.label`
  border: 1px solid white;
  cursor: pointer;
  border-radius: 12px;
  padding: 0.5rem;
  &:active {
    background-color: green;
  }
`;

const StyledCheckboxCheck = styled.input`
  display: none;
  &:checked {
    background-color: green;
  }
`;
