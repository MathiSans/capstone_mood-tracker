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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 70%;
  border-radius: var(--border-radius-round);
  background-color: ${(prop) => prop.color};
  filter: blur(6px);
  opacity: 0.6;
`;

export const Container = styled(Link)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-small);
  background: radial-gradient(circle at left, #6f6f6f, #00000000),
    radial-gradient(circle at right, #2e2c29, #00000000);
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
