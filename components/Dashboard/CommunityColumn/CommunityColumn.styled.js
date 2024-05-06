import styled from "styled-components";

export const SwitchContainer = styled.div`
  margin-top: 40vh;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: var(--font-size-small);
  text-align: center;
`;

export const Switch = styled.div`
  display: flex;
  font-size: 0.6rem;
  background-color: var(--color-dark);
  border-radius: var(--border-radius-small);
  border: 0.5px solid #444444;
  width: fit-content;
  margin-block-end: 1rem;
  cursor: pointer;
`;

export const Option = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: var(--border-radius-small);
  border: 1px solid;
  border-color: ${(props) =>
    props.$isActive ? "var(--color-light)" : "var(--color-dark)"};
  height: 1.2rem;
  white-space: nowrap;
  background-color: ${(props) =>
    props.$isActive ? "#414141" : "var(--color-dark)"};
  color: var(--color-light);
`;

export const TileH4 = styled.h4`
  color: var(--color-light);
  font-size: 0.6rem;
  font-weight: 500;
  margin: 0.5rem;
`;

export const Switch2 = styled.div`
  background-color: red;
  display: flex;
  flex-direction: row;
  border-radius: var(--border-radius-medium);
`;

export const SwitchOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  padding: 16px;
  border-radius: var(--border-radius-medium);
  height: 24px;
`;

export const SwitchButton = styled.div`
  width: 24px;
  height: 100%;
  background-color: green;
`;
