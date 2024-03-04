import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 30px;
  border-radius: 10px;
`;

export const EmotePleasant = styled.span`
  font-size: 2rem;
`;

export const EmoteUnpleasant = styled.span`
  font-size: 2rem;
`;

export const Form = styled.form`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

export const Separator = styled.hr`
  border: 0.5px solid grey;
  width: 100%;
`;

export const Slider = styled.input`
  width: 200px;
`;

export const ExperienceTagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;

  label {
    border: 1px solid white;
    cursor: pointer;
    border-radius: 12px;
    padding: 0.5rem;

    &:active {
      background-color: green;
    }
  }

  input {
    display: none;
    padding: 1rem;

    &:checked {
      background-color: green;
    }
  }
`;

export const TextBox = styled.textarea`
  width: 100%;
  height: 80px;
  border-radius: 10px;
`;
