import styled from "styled-components";

export const IntensityContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Intensity = styled.p`
  color: ${(props) =>
    props.index === 1 ? "white" : "rgba(255, 255, 255, 0.2)"};
  text-align: center;
  min-width: 80px;
`;

export const RangeInput = styled.input`
  height: 56px;
  background-color: transparent;
  -webkit-appearance: none;
  margin: 10 0;
  width: 300px;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0 0 0 white;
    background: white;
    border-radius: 0;
    border: 0 solid white;
  }

  &::-webkit-slider-thumb {
    box-shadow: 0 0 0 white;
    border: 0 solid white;
    height: 50px;
    width: 2px;
    border-radius: 0;
    background: white;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -24px;
  }
`;
