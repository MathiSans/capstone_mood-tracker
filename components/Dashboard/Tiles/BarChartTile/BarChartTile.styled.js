import styled from "styled-components";

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EntriesDescriptionContainer = styled.div`
  position: absolute;
  right: 0;
`;

export const EntriesDescription = styled.article`
  align-self: center;
  font-weight: ${(props) => (props.$bold ? "bold" : "normal")};
  color: var(--color-light);
  font-size: 0.6rem;
  font-weight: 400;
  padding-inline: 1rem;
`;

export const Switch = styled.div`
  position: absolute;
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

export const LastWeekTogglePill = styled.button`
  border-radius: 12px;
  background-color: black;
  color: white;
  padding: 0.2rem 0.5rem;
  font-size: 11px;
`;

export const BarChartContainer = styled.div`
  display: grid;
  align-items: end;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const Container = styled.div`
  position: relative;
  border-radius: var(--border-radius-small);
  background: radial-gradient(circle at left, var(--color-dark), #00000000),
    radial-gradient(circle at right, #444444, #00000000);
  box-shadow: inset 0 0 10px rgba(5, 5, 5, 0.3),
    inset 0 0 10px rgba(5, 5, 5, 0.3);
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  grid-column-end: span 4;
  grid-row-end: span 2;
`;

export const SingleBar = styled.div`
  width: 100%;
  height: ${(props) => props.barHeight}%;
  background-color: ${(props) => props.color};
  border-radius: 2rem;
  border: ${(props) => (props.isClicked ? "2.5px solid white" : "none")};
  border-top-left-radius: var(--border-radius-small);
  border-top-right-radius: var(--border-radius-small);
  border-bottom-left-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
`;

export const TileH4 = styled.h4`
  color: var(--color-light);
  font-size: 0.6rem;
  font-weight: 500;
  margin: 0.5rem;
`;
