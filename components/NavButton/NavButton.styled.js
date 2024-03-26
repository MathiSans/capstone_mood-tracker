import styled from "styled-components";
import Link from "next/link";

export const Button = styled.button`
  padding: 10px 26px;
  background-color: transparent;
  color: ${(props) => (props.$disabled ? "grey" : "white")};
  border: ${(props) =>
    props.$disabled ? "1px solid grey" : "1px solid white"};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
`;

export const ButtonTextLink = styled(Link)`
  color: ${(props) => (props.$disabled ? "grey" : "white")};
  text-decoration: none;
`;
