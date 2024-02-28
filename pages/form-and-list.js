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
      experiences: {
        anger: event.target.anger.checked,
        enjoyment: event.target.enjoyment.checked,
        fear: event.target.fear.checked,
        disgust: event.target.disgust.checked,
        sadness: event.target.sadness.checked,
      },
      text: event.target.text.value,
      slider: rangeValue,

      date: new Date().toLocaleString(),
    };

    setSubmittedRangeValues([...submittedRangeValues, submittedForm]);
    console.log([...submittedRangeValues, submittedForm]);
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
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "black",
        color: "white",
      }}
    >
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
          <h2>Select how you feel:</h2>
          <label htmlFor="anger">
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
          </label>
        </div>
        <input
          type="range"
          name="slider"
          value={rangeValue}
          onChange={handleRangeChange}
          min={0}
          max={255}
        ></input>
        <textarea name="text" placeholder="type something..." />
        <button type="submit">Submit</button>
      </form>
      <hr style={{ color: "white", width: "80%" }} />
      <ul>
        {submittedRangeValues.map((submittedRangeValue, index) => {
          return (
            <li key={submittedRangeValue.id}>
              You felt{" "}
              <Emotion submittedRangeValue={submittedRangeValue.slider} />.
            </li>
          );
        })}
      </ul>
    </div>
  );
}
