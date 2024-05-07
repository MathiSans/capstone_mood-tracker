import styled from "styled-components";

export const Tile = styled.div`
  position: relative;
  border-radius: var(--border-radius-small);
  background: radial-gradient(circle at left, var(--color-dark), #00000000),
    radial-gradient(circle at right, #444444, #00000000);
  box-shadow: inset 0 0 10px rgba(5, 5, 5, 0.3),
    inset 0 0 10px rgba(5, 5, 5, 0.3);
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column-end: ${(props) =>
    props.$columns ? `span ${props.$columns}` : "span 1"};
  grid-row-end: ${(props) => (props.$rows ? `span ${props.$rows}` : "span 1")};
`;

export const Pill = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-dark);
  color: var(--color-light);
  border-radius: 2rem;
  border: 0.5px solid #444444;
  width: fit-content;
  height: 1.2rem;
  padding: 0 8px;
`;

export const PillText = styled.p`
  color: var(--color-light);
  font-size: 0.6rem;
  font-weight: 500;
`;

export const InfoTextTopRight = styled.p`
  font-weight: ${(props) => (props.$bold ? "bold" : "normal")};
  color: var(--color-light);
  font-size: 0.6rem;
  font-weight: 400;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
