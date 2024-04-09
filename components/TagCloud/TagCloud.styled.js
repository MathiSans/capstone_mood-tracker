import styled from "styled-components";

export const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-m);
  max-width: 400px;
  justify-content: center;
`;

export const Button = styled.button`
  padding: var(--spacing-m) 26px;
  color: var(--color-main-alt);
  border: 1px solid var(--color-main-alt);
  cursor: pointer;
  text-shadow: var(--color-main) 2px 0 15px;
  background-color: ${(props) =>
    props.$active ? props.$color : "transparent"};
`;
