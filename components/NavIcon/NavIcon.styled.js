import styled from "styled-components";

export const IconContainer = styled.button`
  padding: 4px;
  border-radius: 100px;
  border: none;
  font-size: 1.5rem;
  background-color: transparent;
  color: white;
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      color: grey;
      cursor: not-allowed;
    `}
`;
