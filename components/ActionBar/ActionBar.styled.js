import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  width: 220px;
  height: 42px;
  border-radius: var(--border-radius-medium);
  z-index: 100000;
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: var(--color-dark);
  padding: 0 24px 0 24px;
  border: 1px solid
    ${(props) =>
      props.$isActive ? `var(--color-neutral)` : `var(--color-danger)`};
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.8);
`;

export const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--font-size-small);
  justify-self: ${(props) =>
    props.$right ? "end" : props.$left ? "start" : "center"};
  color: ${(props) =>
    props.$isActive ? `var(--color-main-alt)` : `var(--color-neutral)`};
`;
