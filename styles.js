import { createGlobalStyle } from "styled-components";

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
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    background-color: black;
    min-height:100vh;
    /* min-width:300px; */
  }
`;
