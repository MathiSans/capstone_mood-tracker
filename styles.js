import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme.colors.light}; 
    margin: 0 auto;
    font-family: ${(props) => props.theme.fonts.body};
    background-color: ${(props) => props.theme.colors.dark}; 
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 200;
  }
`;

export const TrackerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  max-width: 300px;
  margin: 1rem auto;
`;
