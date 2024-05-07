import styled from "styled-components";

export const Container = styled.div`
  z-index: 100;
  position: fixed;
  display: flex;
  justify-content: space-between;

  height: 42px;
  border-radius: var(--border-radius-medium);
  background-color: var(--color-dark);
  padding: 0 24px 0 24px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
`;

export const MenuItem = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.$isActive ? `var(--color-main-alt)` : `var(--color-neutral)`};
  font-size: var(--font-size-small);

  &:after {
    content: ${(props) => (props.$indicator ? `""` : `none`)};
    position: absolute;
    top: 14px;
    right: -6px;
    width: 4px;
    height: 4px;
    background-color: red;
    border-radius: var(--border-radius-round);
  }
`;
