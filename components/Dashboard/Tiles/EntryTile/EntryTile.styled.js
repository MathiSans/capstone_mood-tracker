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

export const Container = styled.div`
  position: relative;
  background: var(--effect-radial-gradient);
  border-radius: var(--border-radius-small);
  width: 100%;
  height: 100%;
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
