import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const SliderContainer = styled.div``;

export const Emote = styled.span`
  font-size: 2rem;
`;

export const Input = styled.input`
  width: 200px;
`;

export const TagCloud = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
export const CheckboxLabel = styled.label`
  border: 1px solid white;
  cursor: pointer;
  border-radius: 12px;
  padding: 0.5rem;
  &:active {
    background-color: green;
  }
`;

export const Checkbox = styled.input`
  display: none;
  &:checked {
    background-color: green;
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  border-radius: 10px;
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
  border-radius: 10px;
`;
