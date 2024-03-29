import styled, { css } from "styled-components";

export const TriggerContainer = styled.div`
  position: fixed;
  justify-content: center;
  align-items: end;
  padding-bottom: 28px;
  bottom: 0;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
`;

export const MenuTriggerButton = styled.button`
  background-color: white;
  border: none;
  color: black;
  ${(props) =>
    props.$showMenu &&
    css`
      background-color: transparent;
      border: 1px solid white;
      color: white;
    `}

  border-radius: 20px;
  padding: 12px 24px;
  font-size: 1rem;
  filter: drop-shadow(black 0rem 0rem 25px);
  cursor: pointer;
`;
