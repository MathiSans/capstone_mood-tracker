import styled from "styled-components";

export const IconContainer = styled.button`
  padding: 4px;
  border-radius: 100px;
  border: none;
  font-size: 1.5rem;
  background-color: transparent;
  color: ${({ disabled }) => (disabled ? "grey" : "white")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
