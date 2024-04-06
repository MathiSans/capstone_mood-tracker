import * as Styled from "./Slider.styled";

export default function Slider({ sliderValue, handleSliderChange }) {
  return (
    <Styled.RangeInput
      aria-label="Set your current mood"
      type="range"
      onChange={handleSliderChange}
      name="slider"
      value={sliderValue}
      step={0.01}
      min={0}
      max={1}
    />
  );
}
