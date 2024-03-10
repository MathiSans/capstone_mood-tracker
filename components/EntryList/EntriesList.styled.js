import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AnimationContainer = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
  border-radius: 100px;
  overflow: hidden;
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
