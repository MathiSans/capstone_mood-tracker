import styled from "styled-components";
import Link from "next/link";

export const Button = styled.button`
  padding: var(--spacing-m) 26px;
  background-color: transparent;
  color: ${(props) =>
    props.$disabled ? `var(--color-neutral)` : `var(--color-main-alt)`};
  border: ${(props) =>
    props.$disabled
      ? `1px solid var(--color-neutral)`
      : `1px solid var(--color-main-alt)`};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
`;

export const ButtonTextLink = styled(Link)`
  color: ${(props) =>
    props.$disabled ? `var(--color-neutral)` : `var(--color-main-alt)`};
  text-decoration: none;
`;
