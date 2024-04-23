import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: var(--border-radius-small);
  background: radial-gradient(circle at top, #5a88bf, transparent),
    radial-gradient(circle at left, #a975d9, transparent),
    radial-gradient(circle at bottom, #a0e668, transparent),
    radial-gradient(circle at right, #c05e5e, transparent);
  cursor: pointer;
  /* height: 100%; */
  /* width: 100%; */
  grid-column-end: span 2;
  grid-row-end: span 2;
  padding-inline-start: 10px;
  padding-block-start: 10px;
  padding-inline-end: 10px;
  padding-block-end: 10px;
  /* overflow: hidden; */
`;

export const Pill = styled.p`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  color: white;
  border: 2px solid white;
  border-radius: 2rem;
  /* background-color: var(--color-dark); */
  padding: 2px 5px;
  width: 30%;
  opacity: 0.9;
`;

export const NewEntryTileIcon = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  filter: drop-shadow(#4d4d4d 0rem 0rem 3px);
`;

export const NewEntryTileH2 = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.8rem;
  filter: drop-shadow(#4d4d4d 0rem 0rem 5px);
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 2rem;
  filter: drop-shadow(#c6c6c6 0rem 0rem 4px);
  padding: 5px 5px;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  mix-blend-mode: lighten;
  border-radius: 2rem;
`;

export const LinkText = styled.p`
  color: #000000ff;
  font-weight: 600;
  font-size: var(--font-size-small);
`;
