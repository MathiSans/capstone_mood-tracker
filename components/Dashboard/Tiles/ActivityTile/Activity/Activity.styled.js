import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  padding: 16px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: ${(props) => (props.$withLink ? "pointer" : "default")};
`;

export const Title = styled.p`
  font-weight: 300;
  font-size: 1.2rem;
  text-decoration: none;
  filter: drop-shadow(#4d4d4d 0rem 0rem 5px);
`;

export const ActivityDescription = styled.p`
  font-size: var(--font-size-small);
  overflow-y: auto;
  height: fit-content;
  padding-bottom: 30px;
`;

export const ShapeContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  filter: blur(20px);
`;

export const ForEmotionContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 6px;
  bottom: 16px;
  right: 16px;
  z-index: 2;
`;

export const Emotion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-small);
  width: fit-content;
  height: 20px;
  color: var(--color-light);
  font-size: 0.6rem;
  font-weight: 500;
  padding: 0 8px;
  background-color: ${(props) => props.$color || "var(--color-main)"};
`;

export const TileH3 = styled.h3`
  color: var(--color-light);
  font-size: 0.6rem;
  font-weight: 500;
  margin: 0 8px;
`;

export const PillContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const Pill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-dark);
  color: var(--color-light);
  border-radius: var(--border-radius-small);
  width: fit-content;
  height: 20px;
  border: 0.5px solid #444444;
`;
