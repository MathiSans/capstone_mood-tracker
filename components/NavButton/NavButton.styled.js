import styled from "styled-components";
import Link from "next/link";

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: var(--spacing-m) 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: ${(props) =>
    props.$disabled ? "var(--color-neutral)" : "var(--color-light)"};
  border: transparent;
  border-radius: var(--border-radius-small);
  cursor: pointer;
  backdrop-filter: blur(40px);
`;

export const ButtonText = styled.span`
  color: var(--color-light);
  font-size: var(--font-size-small);
  text-decoration: none;
`;

export const ButtonTextLink = styled(Link)`
  color: var(--color-light);
  font-size: var(--font-size-small);
  text-decoration: none;
`;
