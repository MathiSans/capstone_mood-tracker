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
  color: white;
  background-color: transparent;
  border: 1px solid white;
  cursor: pointer;
  background-color: ${({ active, color }) => (active ? color : "transparent")};
`;
