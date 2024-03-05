import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    color: white;
    margin: 0 auto;
    font-family: system-ui;
    background-color: black; 
  }

  h1 {
    font-size: 2rem;
    font-weight: 400;
    text-transform: uppercase;
    
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
