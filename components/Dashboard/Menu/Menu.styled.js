import styled from "styled-components";

export const Container = styled.div`
  z-index: 100;
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 36px;
  height: 42px;
  width: 368px;
  border-radius: 16px;
  background-color: var(--color-dark);
  padding: 0 24px 0 24px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
`;

export const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.$isActive ? `var(--color-main-alt)` : `var(--color-neutral)`};
  font-size: var(--font-size-small);
`;
