import styled from "styled-components";

export const addButton = styled.button`
  height: 36px;
  width: 36px;
  border: none;
  font-size: 2rem;
  color: white;
  background-color: transparent;
  margin-left: -11px;
`;

export const Label = styled.label`
  position: relative;
  font-size: 0.8rem;
  color: #989898;
`;

export const AddEmojisSentence = styled.p`
  margin-top: 11px;
  margin-left: 8px;
`;

export const EmojiContainer = styled.div`
  position: relative;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: start;
  height: 40px;
  margin-bottom: 20px;
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
  max-width: 600px;
  padding: 44px;
  position: relative;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Emojis = styled.div`
  font-size: ${(props) => (props.inputString.length > 2 ? "2.5rem" : "4rem")};
`;

export const DeleteButton = styled.button`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  margin-top: 5px;
  border: none;
  font-size: 1.6rem;
  background-color: transparent;
  color: white;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
`;

export const ButtonArea = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 30px;
`;

export const CheckboxLabel = styled.label`
  height: 40px;
  padding: 10px;
  text-align: center;
  width: 110px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  background-color: ${(props) => (props.color ? props.color : "grey")};
`;

export const CheckboxInput = styled.input`
  appearance: none;
  position: relative;
  -webkit-appearance: none;
  height: 40px;
  width: 110px;
  outline: none;
  font-size: 1rem;
  border-radius: 20px;
  cursor: pointer;
  top: -32px;
  left: -14px;

  &:checked::after {
    content: "";
    padding: 4px 20px 10px 20px;
    position: absolute;
    height: 40px;
    width: 110px;
    border: 3.5px solid white;
    font-size: 1rem;
    color: #fff;
    border-radius: 20px;
  }
`;
