import styled, { css } from "styled-components";

export const TriggerContainer = styled.div`
  position: fixed;
  justify-content: center;
  align-items: end;
  padding-bottom: var(--spacing-xl);
  bottom: 0;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
`;

export const MenuTriggerButton = styled.button`
  background-color: var(--color-main-alt);
  border: none;
  color: var(--color-main);
  ${(props) =>
    props.$showMenu &&
    css`
      background-color: transparent;
      border: 1px solid var(--color-main-alt);
      color: var(--color-main-alt);
    `}

  border-radius: var(--border-radius-medium);
  padding: var(--spacing-m) 24px;
  font-size: var(--font-size-default);
  filter: drop-shadow(var(--color-main) 0rem 0rem 25px);
  cursor: pointer;
`;
