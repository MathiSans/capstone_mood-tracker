import styled from "styled-components";

export const Title = styled.h2`
  font-size: ${(props) => (props.bigger ? "3rem" : "")};
  color: ${(props) => props.theme.Guide.color};
`;
