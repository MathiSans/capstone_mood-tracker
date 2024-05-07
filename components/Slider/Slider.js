import * as Styled from "./Slider.styled";

export default function Slider({ sliderValue, handleSliderChange }) {
  return (
    <Styled.RangeInput
      aria-label="Choose the intensity of your mood"
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
