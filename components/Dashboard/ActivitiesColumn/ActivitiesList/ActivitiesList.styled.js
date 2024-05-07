import styled from "styled-components";

export const HeaderSwitches = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
  width: 100%;
  position: relative;
  grid-column-end: span 4;
  grid-row-end: span 1;
  padding-bottom: 16px;
`;

export const Switch = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Option = styled.div`
  cursor: pointer;
  padding: 6px 12px;
  font-size: var(--font-size-small);
  color: ${(props) => (props.$isActive ? "#303030" : "#f8f8f8")};
  background-color: ${(props) => (props.$isActive ? "#f8f8f8" : "#303030")};
  border-radius: var(--border-radius-medium);
  transition: all 0.3s ease;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: ${(props) => (props.$isActive ? "#e0e0e0" : "#505050")};
  }
`;

export const CircleBox = styled.div`
  background-color: #f8f8f8;
  color: #303030;
  border-radius: 50%;
  width: 31px;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
