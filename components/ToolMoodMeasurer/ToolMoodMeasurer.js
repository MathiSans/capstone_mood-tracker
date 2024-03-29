import { useState } from "react";
import styled from "styled-components";
import Slider from "../Slider/Slider";
import NavButton from "../NavButton/NavButton";
import Guide from "../Guide/Guide";

export default function ToolMoodMeasurer({ page, setPage }) {
  const [before, setBefore] = useState(0.5);
  const [after, setAfter] = useState(0.5);

  function handleSliderChange(event) {
    if (page === 0) {
      setBefore(event.target.value);
    } else {
      setAfter(event.target.value);
    }
    console.log(event.target.value);
  }

  return (
    <>
      {(page === 0 || page === 2) && (
        <>
          <Guide
            text={
              page === 0
                ? "Tell us how you feel before you use the tool"
                : "Tell us how you feel after using the tool"
            }
          />
          <Slider
            handleSliderChange={handleSliderChange}
            sliderValue={page === 0 ? before : after}
          />
        </>
      )}

      {page === 3 && (
        <p>
          {before - after < 0
            ? "Your mood has increased!"
            : before - after > 0
            ? "Your mood has decreased."
            : "Your mood stayed the same."}
        </p>
      )}
      {page <= 2 && (
        <NavButton
          handleClick={() => {
            setPage((currPage) => currPage + 1);
          }}
        >
          {page === 0
            ? "1/3 go and use the tool"
            : page === 1
            ? "2/3 how do you feel after?"
            : "3/3 see results"}
        </NavButton>
      )}
      {page === 3 && (
        <NavButton linkToPage={"/activities"}>go back to activities</NavButton>
      )}
    </>
  );
}
