import styled from "styled-components";
import Link from "next/link";

export const Button = styled.button`
  padding: 10px 26px;
  background-color: transparent;
  color: ${(props) =>
    props.$disabled ? props.theme.colors.neutral : props.theme.colors.light};
  border: ${(props) =>
    props.$disabled
      ? `1px solid ${props.theme.colors.neutral}`
      : `1px solid ${props.theme.colors.light}`};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
`;

export const ButtonTextLink = styled(Link)`
  color: ${(props) =>
    props.$disabled
      ? `${props.theme.colors.neutral}`
      : `${props.theme.colors.light}`};
  text-decoration: none;
`;
