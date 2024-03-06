import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 26px;
  background-color: transparent;
  color: ${({ disabled }) => (disabled ? "grey" : "white")};
  border: ${({ disabled }) =>
    disabled ? "1px solid grey" : "1px solid white"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
