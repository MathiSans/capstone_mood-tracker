import styled from "styled-components";

export const IconContainer = styled.button`
  padding: var(--spacing-xs);
  border-radius: var(--border-radius-large);
  border: none;
  font-size: 1.5rem;
  background-color: transparent;
  color: var(--color-main-alt);
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      color: var(--color-neutral);
      cursor: not-allowed;
    `}
`;
