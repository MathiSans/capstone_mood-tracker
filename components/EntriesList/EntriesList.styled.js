import styled from "styled-components";

export const DeleteQuestion = styled.p`
  color: red;
`;

export const DeleteAnswer = styled.p`
  color: ${(props) => (props.red ? props.theme.colors.danger : "")};
  cursor: pointer;
`;

export const RoundButton = styled.button`
  border-radius: ${(props) => props.theme.borders.radiusLarge};
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.light};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: ${(props) => props.theme.spacing.xxl};
  padding: ${(props) => props.theme.spacing.xxl};
  justify-items: center;
  align-items: center;
  width: 100vw;
`;

export const ColoredShape = styled.div`
  background-color: ${(props) =>
    props.color ? props.color : props.theme.colors.light};
  height: 100%;
  width: 100%;
`;

export const Card = styled.div`
  background-color: #141414;
  background: rgb(42, 42, 42);
  background: ${(props) => props.theme.effects.radialGradient};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacing.l};
  border-radius: ${(props) => props.theme.borders.radiusSmall};
  margin: 1rem;
  width: 300px;
  padding: ${(props) => props.theme.spacing.xl};
  position: relative;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AnimationContainer = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  border-radius: ${(props) => props.theme.borders.radiusLarge};
  overflow: hidden;
  filter: blur(8px);
  margin-bottom: ${(props) => props.theme.spacing.m};
`;

export const Sentence = styled.p`
  max-width: 300px;
  text-align: center;
`;

export const StaticText = styled.span`
  color: ${(props) => props.theme.colors.light};
`;

export const Button = styled.button`
  color: red;
  background-color: transparent;
  border: 0.5px solid red;
  padding: ${(props) => `${props.theme.spacing.xs} ${props.theme.spacing.l}`};
  font-size: 0.5rem;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.l};
`;
