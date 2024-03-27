import styled, { css } from "styled-components";

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
  background-color: ${(props) => props.theme.colors.light};
  border: none;
  color: ${(props) => props.theme.colors.dark};
  ${(props) =>
    props.$showMenu &&
    css`
      background-color: transparent;
      border: 1px solid ${(props) => props.theme.colors.light};
      color: ${(props) => props.theme.colors.light};
    `}

  border-radius: 20px;
  padding: 12px 24px;
  font-size: ${(props) => props.theme.fontsize.default};
  filter: drop-shadow(black 0rem 0rem 25px);
  cursor: pointer;
`;
