import styled from "styled-components";

export const addButton = styled.button`
  height: 36px;
  width: 36px;
  border: none;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.light};
  background-color: transparent;
  margin-left: -12px;
`;

export const Label = styled.label`
  position: relative;
  font-size: ${(props) => props.theme.fontsize.small};
  color: #989898;
`;

export const AddEmojisSentence = styled.p`
  margin-top: ${(props) => props.theme.spacing.m};
  margin-left: ${(props) => props.theme.spacing.s};
`;

export const EmojiContainer = styled.div`
  position: relative;
  display: flex;
  gap: ${(props) => props.theme.spacing.xs};
  align-items: center;
  justify-content: start;
  height: 40px;
  margin-bottom: ${(props) => props.theme.spacing.l};
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
  max-width: 600px;
  padding: ${(props) => props.theme.spacing.xxxl};
  position: relative;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.l};
`;

export const Emojis = styled.div`
  font-size: ${(props) => (props.$inputString.length > 2 ? "2.5rem" : "4rem")};
`;

export const DeleteButton = styled.button`
  height: 36px;
  width: 36px;
  border-radius: ${(props) => props.theme.borders.radiusRound};
  margin-top: ${(props) => props.theme.spacing.xs};
  border: none;
  font-size: 1.6rem;
  background-color: transparent;
  color: ${(props) => props.theme.colors.light};
`;

export const InputField = styled.input`
  width: 100%;
  padding: ${(props) => `${props.theme.spacing.m} ${props.theme.spacing.l}`};
  margin: ${(props) => props.theme.spacing.s} 0;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: ${(props) => `${props.theme.spacing.m} ${props.theme.spacing.l}`};
  margin: ${(props) => props.theme.spacing.s} 0;
`;

export const ButtonArea = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.l};
  justify-content: center;
  width: 100%;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.l};
  margin-bottom: ${(props) => props.theme.spacing.xxl};
`;

export const CheckboxLabel = styled.label`
  height: 40px;
  padding: ${(props) => props.theme.spacing.m};
  text-align: center;
  width: 110px;
  border-radius: ${(props) => props.theme.borders.radiusMedium};
  cursor: pointer;
  font-size: ${(props) => props.theme.fontsize.default};
  background-color: ${(props) => (props.$color ? props.$color : "grey")};
`;

export const CheckboxInput = styled.input`
  appearance: none;
  position: relative;
  -webkit-appearance: none;
  height: 40px;
  width: 110px;
  outline: none;
  font-size: ${(props) => props.theme.fontsize.default};
  border-radius: ${(props) => props.theme.borders.radiusMedium};
  cursor: pointer;
  top: -32px;
  left: -14px;

  &:checked::after {
    content: "";
    padding: ${(props) =>
      `${props.theme.spacing.xs} ${props.theme.spacing.l} ${props.theme.spacing.s} ${props.theme.spacing.l}`};
    position: absolute;
    height: 40px;
    width: 110px;
    border: 3.5px solid ${(props) => props.theme.colors.light};
    font-size: ${(props) => props.theme.fontsize.default};
    color: #fff;
    border-radius: ${(props) => props.theme.borders.radiusMedium};
  }
`;
