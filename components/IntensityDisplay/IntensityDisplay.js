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

    return { previousIntensity, currentIntensity, nextIntensity };
  }

  const { previousIntensity, currentIntensity, nextIntensity } =
    calculateIntensity(sliderValue);

  return (
    <Styled.IntensityContainer>
      {previousIntensity && (
        <Styled.Intensity key={`previous-${previousIntensity}`}>
          {previousIntensity}
        </Styled.Intensity>
      )}
      <Styled.Intensity index={1} key={`current-${currentIntensity}`}>
        {currentIntensity}
      </Styled.Intensity>
      {nextIntensity && (
        <Styled.Intensity key={`next-${nextIntensity}`}>
          {nextIntensity}
        </Styled.Intensity>
      )}
    </Styled.IntensityContainer>
  );
}
