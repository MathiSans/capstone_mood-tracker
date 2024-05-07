import styled from "styled-components";

export const DeleteQuestion = styled.p`
  color: var(--color-danger);
`;

export const DeleteAnswer = styled.p`
  color: ${(props) => (props.red ? `var(--color-danger)` : "")};
  cursor: pointer;
`;

export const DeleteButton = styled.div`
  border-radius: var(--border-radius-large);
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-main-alt);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: var(--spacing-xxl);
  padding: var(--spacing-xxl);
  justify-items: center;
  align-items: center;
  width: 100vw;
`;

export const ColoredShape = styled.div`
  background-color: ${(props) =>
    props.color ? props.color : `var(--color-main-alt)`};
  height: 100%;
  width: 100%;
`;

export const Card = styled.div`
  background: var(--effect-radial-gradient);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-l);
  border-radius: var(--border-radius-small);
  margin: 1rem;
  width: 300px;
  padding: var(--spacing-xl);
  position: relative;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ColoredShapeContainer = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  border-radius: var(--border-radius-round);
  overflow: hidden;
  filter: blur(8px);
  margin-bottom: var(--spacing-m);
`;

export const Sentence = styled.p`
  max-width: 300px;
  text-align: center;
`;

export const StaticText = styled.span`
  color: var(--color-neutral);
`;

export const DeleteContainer = styled.div`
  display: flex;
  gap: var(--spacing-l);
`;

export const ToolsContainer = styled.div`
  position: absolute;
  bottom: 30dvh;
  left: 50vw;
  transform: translate(-50%, -50%);
  display: flex;
  gap: var(--spacing-l);
`;
