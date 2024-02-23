import { useState } from "react";
import { nanoid } from "nanoid";

export default function FormAndList() {
  const [rangeValue, setRangeValue] = useState(127.5);
  const [submittedRangeValues, setSubmittedRangeValues] = useState([]);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
    console.log(rangeValue);
  };

  function onSubmit(event) {
    event.preventDefault();
    const submittedForm = {
      id: nanoid(),
      slider: rangeValue,
    };

    setSubmittedRangeValues([...submittedRangeValues, submittedForm]);
    console.log(submittedRangeValues);
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
      <h1>Mood Diary</h1>
      <h2>Track your mood:</h2>
      <form onSubmit={onSubmit}>
        <input
          type="range"
          name="slider"
          value={rangeValue}
          onChange={handleRangeChange}
          min={0}
          max={255}
        ></input>
        <button type="submit">save</button>
      </form>
    </div>
  );
}
