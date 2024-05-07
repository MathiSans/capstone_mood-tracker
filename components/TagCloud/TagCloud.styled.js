import styled from "styled-components";

export const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-m);
  max-width: 300px;
  justify-content: center;
`;

export const Button = styled.button`
  padding: var(--spacing-m) 1.2rem;
  color: var(--color-main-alt);
  outline: ${(props) =>
    props.$active ? `0.15rem solid rgba(255, 255, 255, 0.5)` : "none"};
  outline-offset: -0.15rem;
  border: transparent;
  border-radius: var(--border-radius-small);
  cursor: pointer;
  text-transform: capitalize;
  font-weight: 400;
  background: ${(props) =>
    props.$active ? props.$color : "rgba(255, 255, 255, 0.1)"};
  backdrop-filter: blur(20px);
`;
