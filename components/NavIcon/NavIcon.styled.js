import styled from "styled-components";

export const IconContainer = styled.button`
  padding: 4px;
  border-radius: ${(props) => props.theme.borders.radiusLarge};
  border: none;
  font-size: 1.5rem;
  background-color: transparent;
  color: ${(props) => props.theme.colors.light};
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      color: ${(props) => props.theme.colors.neutral};
      cursor: not-allowed;
    `}
`;
