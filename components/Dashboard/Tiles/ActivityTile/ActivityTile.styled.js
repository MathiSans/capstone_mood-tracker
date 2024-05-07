import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-small);
  background: radial-gradient(circle at left, var(--color-dark), #00000000),
    radial-gradient(circle at right, #444444, #00000000);
  box-shadow: inset 0 0 10px rgba(5, 5, 5, 0.3),
    inset 0 0 10px rgba(5, 5, 5, 0.3);
  cursor: pointer;
  grid-column-end: span 4;
  grid-row-end: span 2;
  padding: 0.8rem;
`;

export const TileH3 = styled.h3`
  color: var(--color-light);
  font-size: 0.6rem;
  font-weight: 500;
  margin: 0.5rem;
`;

export const Pill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-dark);
  color: var(--color-light);
  border-radius: 2rem;
  width: fit-content;
  height: 1.2rem;
  border: 0.5px solid #444444;
`;
