import { useState } from "react";
import Slider from "../Slider/Slider";
import NavButton from "../NavButton/NavButton";
import Guide from "../Guide/Guide";
import * as Styled from "./ToolMoodMeasurer.styled";

export default function ToolMoodMeasurer({ page, setPage }) {
  const [before, setBefore] = useState(0.5);
  const [after, setAfter] = useState(0.5);

  function handleSliderChange(event) {
    if (page === 0) {
      setBefore(event.target.value);
    } else {
      setAfter(event.target.value);
    }
  }

  return (
    <>
      {(page === 0 || page === 2) && (
        <>
          <Guide text={page === 0 ? "1/3" : "2/3"} />
          <Guide
            text={
              page === 0
                ? "How are you feeling right now?"
                : "How do you feel after using the tool?"
            }
          />
          <Styled.SliderContainer>
            <p>feeling low</p>
            <Slider
              handleSliderChange={handleSliderChange}
              sliderValue={page === 0 ? before : after}
            />
            <p>feeling low</p>
          </Styled.SliderContainer>
        </>
      )}

      {page === 3 && (
        <>
          <Guide text="3/3" />
          <Guide
            text={
              before - after < 0
                ? "Your mood has increased!"
                : before - after > 0
                ? "Your mood has decreased."
                : "Your mood stayed the same."
            }
          />
        </>
      )}
      {page <= 2 && (
        <NavButton
          handleClick={() => {
            setPage((currPage) => currPage + 1);
          }}
        >
          {page === 0
            ? "use the tool"
            : page === 1
            ? "how do you feel now?"
            : "see results"}
        </NavButton>
      )}
      {page === 3 && (
        <NavButton linkToPage={"/activities"}>go back to activities</NavButton>
      )}
    </>
  );
}
