import styled, { css } from "styled-components";

export const SettingsTriggerButton = styled.button`
  display: flex;
  background-color: white;
  border: none;
  color: black;
  border-radius: 1.5rem;
  padding: 0.5rem 0.5rem;
  font-size: 1.5rem;
  filter: drop-shadow(black 0rem 0rem 25px);
  cursor: pointer;

  ${(props) =>
    props.$showSettings &&
    css`
      background-color: transparent;
      box-shadow: inset 0 0 0 1px white; /* Border inside the button */
      color: white;
    `}
`;
