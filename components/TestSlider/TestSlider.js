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

    const intensities = experience[0].intensity;
    const currentIntensity = intensities[index].name;
    const previousIntensity = index > 0 ? intensities[index - 1].name : null;
    const nextIntensity =
      index < intensities.length - 1 ? intensities[index + 1].name : null;

    return [previousIntensity, currentIntensity, nextIntensity];
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
      <div style={{ display: "flex", gap: "10px" }}>
        {Intensity(sliderValue).map((intensity, index) => (
          <div
            key={index}
            style={{
              color: index === 1 ? "white" : "rgba(255, 255, 255, 0.2)",
              textAlign: "center",
              minWidth: "80px",
            }}
          >
            {intensity}
          </div>
        ))}
      </div>
    </>
  );
}

// function Intensity(value) {
//   const step = 1 / (experience[0].intensity.length - 1);
//   let index = Math.floor(value / step);
//   index = Math.min(index, experience[0].intensity.length - 1);
//   return experience[0].intensity[index].name;
// }
