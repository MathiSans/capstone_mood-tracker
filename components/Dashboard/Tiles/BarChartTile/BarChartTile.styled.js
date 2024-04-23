import styled from "styled-components";

export const HeadContainer = styled.div`
  top: 1rem;
  position: absolute;
  width: 100%;
  justify-content: space-between;
  display: flex;
`;

export const EntriesDescription = styled.article`
  font-weight: bold;
  width: 40%;
  right: 1rem;
  margin-right: 0.75rem;
`;

export const LastWeekTogglePill = styled.button`
  border-radius: 12px;
  background-color: black;
  color: white;
  padding: 0.2rem 0.5rem;
  font-size: 0.5rem;
  position: absolute;
  left: 1rem;
`;

export const BarChartContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  background-color: #2b2b2b;
  align-items: flex-end;
  border-radius: 16px;
  position: relative;
  /* margin-top: 3rem; */
  grid-column-end: span 4;
  grid-row-end: span 3;
`;

export const SingleBar = styled.div`
  width: 3.31rem;
  height: ${(props) => props.barHeight}%;
  background-color: ${(props) => props.color};
  align-items: flex-end;
  border-radius: 12px;
  border: ${(props) => (props.isClicked ? "2.5px solid white" : "none")};
`;
