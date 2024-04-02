import * as Styled from "./IntensityDisplay.styled";

export default function IntensityDisplay({ sliderValue, experience }) {
  function calculateIntensity(value) {
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
    <Styled.IntensityContainer>
      {calculateIntensity(sliderValue).map((intensity, index) => (
        <Styled.Intensity index={index} key={`${intensity}-${index}`}>
          {intensity}
        </Styled.Intensity>
      ))}
    </Styled.IntensityContainer>
  );
}
