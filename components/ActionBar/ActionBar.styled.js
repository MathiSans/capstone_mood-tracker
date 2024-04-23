import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 220px;
  height: 42px;
  border-radius: 16px;
  z-index: 100000;
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: var(--color-dark);
  padding: 0 24px 0 24px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
`;

export const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-self: ${(props) =>
    props.$right ? "end" : props.$left ? "start" : "center"};
  color: ${(props) =>
    props.$isActive ? `var(--color-main-alt)` : `var(--color-neutral)`};
  font-size: var(--font-size-small);
`;