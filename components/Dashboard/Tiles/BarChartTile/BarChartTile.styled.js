import styled from "styled-components";

export const HeadContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
`;

export const EntriesDescriptionContainer = styled.div`
  width: 50%;
`;

export const EntriesDescription = styled.article`
  font-weight: ${(props) => (props.$bold ? "bold" : "normal")};
  text-align: right;
`;

export const Switch = styled.div`
  background-color: #414141;
  border-radius: var(--border-radius-small);
  width: 118px;
  height: 26px;
  font-size: 11px;
  display: flex;
  cursor: pointer;
`;

export const Option = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 6px;
  border-radius: var(--border-radius-small);
  background-color: ${(props) =>
    props.$isActive ? "var(--color-main)" : "#414141"};
  color: ${(props) =>
    props.$isActive ? "var(--color-main-alt)" : "var(--color-neutral)"};
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
  grid-gap: 10px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Container = styled.div`
  position: relative;
  background: var(--effect-radial-gradient);
  border-radius: var(--border-radius-small);
  width: 100%;
  height: 100%;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column-end: span 4;
  grid-row-end: span 3;
`;

export const SingleBar = styled.div`
  width: 100%;
  height: ${(props) => props.barheight * 2}%;
  background-color: ${(props) => props.color};
  border-radius: var(--border-radius-small);
  border: ${(props) => (props.isclicked ? "2.5px solid white" : "none")};
`;
