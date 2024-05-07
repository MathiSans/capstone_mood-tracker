import styled from "styled-components";

export const HeaderSwitches = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
  height: auto; /* Änderung der Höhe auf auto */
  position: relative;
  grid-column-end: span 4;
  grid-row-end: span 1;
`;

export const Switch = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Option = styled.div`
  cursor: pointer;
  padding: 8px 16px;
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
  width: 40px; /* Verkleinerung der Breite auf 40px */
  height: 40px; /* Festlegen der Höhe auf 40px */
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 50%; /* Zentrieren vertikal */
  transform: translateY(-50%); /* Korrektur für die Zentrierung */
`;
