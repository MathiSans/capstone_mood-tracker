import styled from "styled-components";
import Link from "next/link";

export const TextContainer = styled.div`
  z-index: 1;
`;

export const DynamicCardSpan = styled.p`
  color: ${(prop) => prop.color};
`;

export const StaticText = styled.span`
  color: var(--color-neutral);
`;

export const ColorCircle = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  margin-inline-end: 0.5rem;
  border-radius: 2rem;
  background-color: ${(prop) => prop.color};
  filter: blur(0.5px);
  transition: background-color 0.5s ease;
`;

export const Container = styled(Link)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-small);
  background: radial-gradient(circle at left, var(--color-dark), #00000000),
    radial-gradient(circle at right, #444444, #00000000);
  box-shadow: inset 0 0 10px rgba(5, 5, 5, 0.3),
    inset 0 0 10px rgba(5, 5, 5, 0.3);
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  grid-column-end: span 2;
  grid-row-end: span 2;
  text-decoration: none;
  color: var(--color-primary-alt);
  font-size: 11px;
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
  border: 0.5px solid #444444;
  width: auto;
  height: 1.2rem;
`;
