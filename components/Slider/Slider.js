import * as Styled from "./Slider.styled";

export default function Slider({
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
      <Styled.IntensityContainer>
        {Intensity(sliderValue).map((intensity, index) => (
          <Styled.Intensity index={index} key={index}>
            {intensity}
          </Styled.Intensity>
        ))}
      </Styled.IntensityContainer>
    </>
  );
}
