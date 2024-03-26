import styled from "styled-components";
import Link from "next/link";

export const Button = styled.button`
  padding: 10px 26px;
  background-color: transparent;
  color: ${({ disabled }) => (disabled ? "grey" : `white`)};
  border: ${({ disabled }) =>
    disabled
      ? "1px solid grey"
      : `1px solid : ${(props) => props.theme.Navigation.button}`};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const ButtonTextLink = styled(Link)`
  color: ${({ disabled }) => (disabled ? "grey" : `white`)};
  text-decoration: none;
`;
