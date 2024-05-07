import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-small);
  background: radial-gradient(circle at left, var(--color-dark), #00000000),
    radial-gradient(circle at right, #444444, #00000000);
  box-shadow: inset 0 0 10px rgba(5, 5, 5, 0.3),
    inset 0 0 10px rgba(5, 5, 5, 0.3);
  grid-column-end: span 4;
  grid-row-end: span 2;
  padding: 16px;
  overflow: hidden;
`;
