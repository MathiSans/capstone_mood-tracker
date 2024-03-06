import styled from "styled-components";

export const RangeInput = styled.input`
  height: 56px;
  background-color: transparent;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 300px;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px white;
    background: white;
    border-radius: 0px;
    border: 0px solid white;
  }

  &::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px white;
    border: 0px solid white;
    height: 50px;
    width: 2px;
    border-radius: 0px;
    background: white;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -24px;
  }
`;
