import styled from "styled-components";

export const addButton = styled.button`
  height: 36px;
  width: 36px;
  border: none;
  font-size: 2rem;
  color: var(--color-main-alt);
  background-color: transparent;
  margin-left: -12px;
`;

export const Label = styled.label`
  position: relative;
  font-size: var(--font-size-small);
  color: var(--color-neutral);
`;

export const Question = styled.p`
  /* margin-bottom: 20px; */
`;

export const AddEmojisSentence = styled.p`
  text-align: left;
  margin-bottom: 10px;
`;

export const EmojiContainer = styled.div`
  position: relative;
  display: flex;
  gap: var(--spacing-xs);
  align-items: center;
  justify-content: start;
  margin-bottom: var(--spacing-l);
`;

export const Card = styled.div`
  background: var(--effect-radial-gradient);
  border-radius: var(--border-radius-small);
  padding: 24px;
  position: relative;
  grid-column-end: span 4;
  grid-row-end: span 7;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
`;

export const Emojis = styled.div`
  font-size: ${(props) => (props.$inputString.length > 2 ? "2.5rem" : "4rem")};
`;

export const DeleteButton = styled.button`
  height: 36px;
  width: 36px;
  border-radius: var(--border-radius-round);
  margin-top: var(--spacing-xs);
  border: none;
  font-size: 1.6rem;
  background-color: transparent;
  color: var(--color-main-alt);
`;

export const InputField = styled.input`
  width: 100%;
  padding: var(--spacing-m) var(--spacing-l);
  margin: var(--spacing-s) 0;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: var(--spacing-m) var(--spacing-l);
  margin: var(--spacing-s) 0;
  margin-bottom: 20px;
`;

export const ButtonArea = styled.div`
  display: flex;
  gap: var(--spacing-l);
  justify-content: center;
  width: 100%;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-s);
  margin-bottom: var(--spacing-xxl);
`;

export const StyledText = styled.span`
  margin-bottom: 0px;
`;

export const CheckboxLabel = styled.label`
  height: 40px;
  padding: 10px;
  text-align: center;
  width: 92px;
  border-radius: var(--border-radius-medium);
  font-size: 0.92rem;
  background-color: ${(props) =>
    props.$color ? props.$color : `var(--color-neutral)`};
`;

export const CheckboxInput = styled.input`
  appearance: none;
  position: relative;
  -webkit-appearance: none;
  height: 40px;
  width: 92px;
  outline: none;
  font-size: 0.92rem;
  border-radius: var(--border-radius-medium);
  cursor: pointer;
  top: -34px;
  left: -10px;

  &:checked::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    border: 2.5px solid var(--color-main-alt);
    font-size: var(--font-size-default);
    border-radius: var(--border-radius-medium);
    margin-top: 6px;
  }
`;
