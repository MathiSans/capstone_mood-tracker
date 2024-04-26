import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: var(--border-radius-small);
  background: radial-gradient(circle at top, #5a88bf, transparent),
    radial-gradient(circle at left, #a975d9, transparent),
    radial-gradient(circle at bottom, #a1e46b, transparent),
    radial-gradient(circle at right, #c05e5e, transparent);
  grid-column-end: span 2;
  grid-row-end: span 2;
  padding: 12px;
`;

export const NewEntryTileIcon = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  filter: drop-shadow(#4d4d4d 0rem 0rem 3px);
`;

export const TileH2 = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.8rem;
  filter: drop-shadow(#4d4d4d 0rem 0rem 5px);
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 2rem;
  padding: 5px 5px;
  margin: 0 auto;
  width: 70%;
  background-color: rgba(255, 255, 255, 1);
  mix-blend-mode: lighten;
  border-radius: 2rem;
  filter: drop-shadow(#c6c6c6 0rem 0rem 4px);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const LinkText = styled.p`
  color: #000000ff;
  font-weight: 600;
  font-size: var(--font-size-small);
`;
