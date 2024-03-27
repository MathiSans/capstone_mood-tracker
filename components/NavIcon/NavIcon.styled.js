import styled from "styled-components";

export const IconContainer = styled.button`
  padding: 4px;
  border-radius: 100px;
  border: none;
  font-size: 1.5rem;
  background-color: transparent;
  color: ${(props) => props.theme.colors.light};
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      color: ${(props) => props.theme.colors.tertiary};
      cursor: not-allowed;
    `}
`;
