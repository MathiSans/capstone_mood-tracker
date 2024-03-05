import { useState, useEffect } from "react";
import * as Styled from "./TestSlider.styled";

export default function TestSlider({
  experience,
  sliderValue,
  handleSliderChange,
}) {
  function Intensity(value) {
    const step = 1 / (experience[0].intensity.length - 1);
    let index = Math.floor(value / step);
    index = Math.min(index, experience[0].intensity.length - 1);
    return experience[0].intensity[index].name;
  }

  return (
    <>
      <Styled.RangeInput
        type="range"
        onChange={handleSliderChange}
        name="slider"
        value={sliderValue}
        step={0.01}
        min={0}
        max={1}
      />
      <p>{Intensity(sliderValue)}</p>
    </>
  );
}
