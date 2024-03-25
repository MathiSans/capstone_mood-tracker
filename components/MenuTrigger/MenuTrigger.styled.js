import styled from "styled-components";

export const TriggerContainer = styled.div`
  position: fixed;
  justify-content: center;
  align-items: end;
  padding-bottom: 28px;
  bottom: 0;
  display: flex;
  width: 100vw;
  height: 60px;
`;

export const MenuTriggerButton = styled.button`
  background-color: ${({ showMenu }) => (showMenu ? "transparent" : "white")};
  border: ${({ showMenu }) => (showMenu ? "1px solid white" : "none")};
  color: ${({ showMenu }) => (showMenu ? "white" : "black")};
  border-radius: 20px;
  padding: 12px 24px;
  font-size: 1rem;
  filter: drop-shadow(black 0rem 0rem 25px);
  cursor: pointer;
`;
