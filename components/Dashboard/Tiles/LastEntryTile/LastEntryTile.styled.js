import styled, { keyframes } from "styled-components";

export const ColorText = styled.p`
  color: ${(prop) => prop.color};
  font-weight: 600;
`;

export const StaticText = styled.span`
  color: var(--color-light);
  font-weight: 400;
`;

export const ColorCircle = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  margin-inline-end: 0.5rem;
  border-radius: 2rem;
  background-color: ${(prop) => prop.color};

  transition: background-color 0.5s ease;
`;

export const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-column-end: span 2;
  grid-row-end: span 1;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0.8rem;
  border-radius: var(--border-radius-small);
  background: radial-gradient(circle at left, var(--color-dark), #00000000),
    radial-gradient(circle at right, #444444, #00000000);
  box-shadow: inset 0 0 10px rgba(5, 5, 5, 0.3),
    inset 0 0 10px rgba(5, 5, 5, 0.3);
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  color: var(--color-primary-alt);
  overflow: hidden;
`;

export const TileH3 = styled.h3`
  color: var(--color-light);
  font-size: 0.6rem;
  font-weight: 500;
  margin: 0.5rem;
`;

export const Pill = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-dark);
  color: var(--color-light);
  border-radius: 2rem;
  border: 0.5px solid #444444;
  width: auto;
  height: 1.5rem;
`;

export const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const scrollAnimation = keyframes`
  0% { transform: translateX(130%); }
  100% { transform: translateX(-600%); }
`;

export const TextContainer = styled.div`
  animation: ${scrollAnimation} 20s linear infinite;
  white-space: nowrap;
`;
