import styled from "styled-components";

export const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 400px;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 10px 26px;
  color: ${(props) => props.theme.colors.light};
  border: 1px solid ${(props) => props.theme.colors.light};
  cursor: pointer;
  text-shadow: ${(props) => props.theme.colors.dark} 2px 0 15px;
  background-color: ${(props) =>
    props.$active ? props.$color : "transparent"};
`;
