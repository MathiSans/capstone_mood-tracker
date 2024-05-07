import styled from "styled-components";

export const Title = styled.h2`
  font-size: ${(props) => (props.$bigger ? `var(--font-size-xl)` : "")};
  font-weight: ${(props) => (props.$bigger ? "100" : "300")};
  text-align: center;
`;
