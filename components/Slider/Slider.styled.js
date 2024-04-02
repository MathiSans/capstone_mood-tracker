import styled from "styled-components";

export const RangeInput = styled.input`
  height: 56px;
  background-color: transparent;
  -webkit-appearance: none;
  margin: 10 0;
  width: 100%;

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
