import styled from "styled-components";

export const DeleteQuestion = styled.p`
  color: red;
`;

export const DeleteAnswer = styled.p`
  color: ${(props) => (props.red ? "red" : "")};
  cursor: pointer;
`;

export const RoundButton = styled.button`
  border-radius: 100px;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;
  padding: 30px;
  justify-items: center;
  align-items: center;
  width: 100vw;
`;

export const ColoredShape = styled.div`
  background-color: ${(props) => (props.color ? props.color : "white")};
  height: 100%;
  width: 100%;
`;

export const Card = styled.div`
  background-color: #141414;
  background: rgb(42, 42, 42);
  background: radial-gradient(
    circle,
    rgba(42, 42, 42, 1) 0%,
    rgba(13, 13, 13, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 12px;
  margin: 1rem;
  width: 300px;
  padding: 28px;
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
  border-radius: 100px;
  overflow: hidden;
  filter: blur(8px);
  margin-bottom: 10px;
`;

export const Sentence = styled.p`
  max-width: 300px;
  text-align: center;
`;

export const StaticText = styled.span`
  color: grey;
`;

export const Button = styled.button`
  color: red;
  background-color: transparent;
  border: 0.5px solid red;
  padding: 6px 16px;
  font-size: 0.5rem;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;
