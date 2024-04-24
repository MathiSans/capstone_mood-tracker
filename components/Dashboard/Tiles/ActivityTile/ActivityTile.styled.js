import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius-small);
  background: radial-gradient(circle at left, #6f6f6f, #00000000),
    radial-gradient(circle at right, #2e2c29, #00000000);
  cursor: pointer;
  grid-column-end: span 4;
  grid-row-end: span 2;
  padding: 12px;
`;

export const TileH3 = styled.h3`
  color: white;
  font-size: 0.6rem;
  font-weight: 500;
`;

export const Pill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
  border-radius: 2rem;
  filter: drop-shadow(#242321 0rem 0rem 4px);
  width: 2.5rem;
  height: 1.2rem;
  margin-block-end: 0.4rem;
`;
