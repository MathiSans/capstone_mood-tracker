import { useState } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";

export default function FormAndList() {
  const [rangeValue, setRangeValue] = useState(127.5);
  const [submittedRangeValues, setSubmittedRangeValues] = useState([]);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
    // console.log(rangeValue);
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

    setSubmittedRangeValues([...submittedRangeValues, submittedForm]);
    console.log([...submittedRangeValues, submittedForm]);
    event.target.reset();
  }

  function Emotion({ submittedRangeValue }) {
    console.log(submittedRangeValue);
    if (submittedRangeValue <= 51) {
      return <span>very sad</span>;
    }
    if (submittedRangeValue >= 51 && submittedRangeValue <= 102) {
      return <span>sad</span>;
    }
    if (submittedRangeValue >= 102 && submittedRangeValue <= 153) {
      return <span>pleasent</span>;
    }
    if (submittedRangeValue >= 153 && submittedRangeValue <= 206) {
      return <span>good</span>;
    }
    if (submittedRangeValue > 206) {
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
      <div style={{ maxWidth: "300px" }}>
        <h1>mood tracker</h1>
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
          {submittedRangeValues.map((submittedRangeValue) => {
            return (
              <li
                style={{
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: "column",
                  gap: "10px",
                }}
                key={submittedRangeValue.id}
              >
                <small>{submittedRangeValue.date}</small>
                <p>
                  You felt{" "}
                  <span style={{ fontWeight: "bold" }}>
                    <Emotion submittedRangeValue={submittedRangeValue.slider} />
                    .
                  </span>{" "}
                  You selected these tags:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {submittedRangeValue.experiences
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
                      {submittedRangeValue.text}
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

// // Filter the keys inside experiences array that are true
// const trueExperiences = submittedForm.experiences.reduce((acc, exp) => {
//   const [key, value] = Object.entries(exp)[0]; // Get the key-value pair
//   if (value) {
//     acc.push(`<span>${key}</span>`); // If value is true, push the key inside a span tag to the accumulator
//   }
//   return acc;
// }, []);

{
  /* <label htmlFor="anger">
            <input type="checkbox" name="anger" />
            anger
          </label>
          <label htmlFor="enjoyment">
            <input type="checkbox" name="enjoyment" />
            enjoyment
          </label>
          <label htmlFor="disgust">
            <input type="checkbox" name="disgust" />
            disgust
          </label>
          <label htmlFor="fear">
            <input type="checkbox" name="fear" />
            fear
          </label>
          <label htmlFor="sadness">
            <input type="checkbox" name="sadness" />
            sadness
          </label> */
}
