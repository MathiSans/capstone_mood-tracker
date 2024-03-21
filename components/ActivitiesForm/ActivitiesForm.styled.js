import styled from "styled-components";

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
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const CheckboxInput = styled.input`
  margin: 8px;
`;
