import styled from "styled-components";

export const RangeInput = styled.input`
  display: flex;
  justify-content: center;
  height: 56px;
  background-color: transparent;
  appearance: none;
  -webkit-appearance: none;
  margin: var(--spacing-m) 0;
  width: 300px;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    height: 0.2rem;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.5);
    border-radius: var(--border-radius-small);
    background-blend-mode: normal;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 1);
    cursor: pointer;
    transform: translateY(-45%);
    background-blend-mode: normal;
  }
`;
