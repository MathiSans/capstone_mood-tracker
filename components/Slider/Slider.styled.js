import styled from "styled-components";

export const IntensityContainer = styled.div`
  display: flex;
  gap: var(--spacing-m);
`;

export const Intensity = styled.p`
  color: ${(props) =>
    props.highlighted ? `var(--color-main-alt)` : ` var(--color-neutral)`};
  text-align: center;
  min-width: 80px;
  text-shadow: var(--color-main) 2px 0 25px;
`;

export const RangeInput = styled.input`
  height: 56px;
  background-color: transparent;
  appearance: none;
  -webkit-appearance: none;
  margin: var(--spacing-m) 0;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    box-shadow: 0 0 0 var(--color-main-alt);
    background: var(--color-main-alt);
    border-radius: 0;
    border: 0 solid var(--color-main-alt);
  }

  &::-webkit-slider-thumb {
    box-shadow: 0 0 0 var(--color-main-alt);
    border: 0 solid var(--color-main-alt);
    height: 50px;
    width: 2px;
    border-radius: 0;
    background: var(--color-main-alt);
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    margin-top: -24px;
  }
`;
