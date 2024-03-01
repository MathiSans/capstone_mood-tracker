import styled from "styled-components";

export const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;

  label {
    border: 1px solid white;
    cursor: pointer;
    border-radius: 12px;
    padding: 0.5rem;

    &:active {
      background-color: green;
    }
  }

  input {
    display: none;
    &:checked {
      background-color: green;
    }
  }
`;
