import styled from "styled-components";
import lightenTextColor from "@/utils/lightenTextColor";

export const TextContainer = styled.div`
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 10%,
    black 95%,
    transparent 100%
  );
  color: var(--color-light);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 1;
`;

export const ColorCircle = styled.div`
  display: flex;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 2rem;
  background-color: ${(prop) => prop.color};
  border: 1.5px solid rgba(0, 0, 0, 0.6);
`;

export const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-column-end: span 2;
  grid-row-end: span 2;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-small);
  background: radial-gradient(circle at left, var(--color-dark), #00000000),
    radial-gradient(circle at right, #444444, #00000000);
  box-shadow: inset 0 0 10px rgba(5, 5, 5, 0.3),
    inset 0 0 10px rgba(5, 5, 5, 0.3);
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.6rem;
  font-weight: 600;
`;

export const TileH3 = styled.h3`
  color: var(--color-light);
  font-size: 0.6rem;
  font-weight: 500;
`;

export const TextBlock = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.4rem;
  height: auto;
  margin-block-start: 0.5rem;
  padding-inline: 0.6rem;
  padding-block: 0.4rem;
  color: var(--color-light);
  font-size: ${(props) => (props.isTag ? "0.6rem" : "0.8rem")};
  font-weight: ${(props) => (props.isTag ? "500" : "500")};
`;

export const EntryText = styled.span`
  color: ${(props) => props.color || "var(--color-light)"};
  ${(props) =>
    props.color &&
    `
    color: ${lightenTextColor(props.color, 0.5)}; 
  `}
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
  height: auto;
  padding-inline: 0.6rem;
  padding-block: 0.3rem;
`;
