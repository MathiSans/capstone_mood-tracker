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

  h1 {
    font-size: 2rem;
    font-weight: 400;
    text-transform: uppercase;
    
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 200;
  }

  .boxes {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 0 2px #404040;
}
.boxes > .box {
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: ${(props) => props.theme.light}; 
  transition: left 400ms ease-in-out, top 400ms ease-in-out;
}
.boxes > .box.dim0 {
  width: 40px;
  height: 30px;
  margin-left: -20px;
  margin-top: -15px;
  background-color: #804000;
  box-shadow: inset 0 0 0 2px #c08000;
}
.boxes > .box.dim1 {
  width: 14px;
  height: 48px;
  margin-left: -7px;
  margin-top: -24px;
  background-color: #400080;
  box-shadow: inset 0 0 0 2px #a000f0;
}
.boxes > .box.dim2 {
  width: 22px;
  height: 22px;
  margin-left: -11px;
  margin-top: -11px;
  background-color: #600060;
  box-shadow: inset 0 0 0 2px #c000d0;
}
.controls {
  position: fixed;
  left: 0;
  top: 0;
  width: 130px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  overflow-y: auto;
}
.controls > .control {
  white-space: pre-wrap;
  font-family: ${(props) => {
    props.theme.fonts.controls;
  }};
  font-size: 10px;
  cursor: pointer;
}
.controls > .control:hover,
.controls > .control#activeControl {
  background-color: rgba(0, 0, 0, 0.5);
  color: ${(props) => props.theme.colors.light}; 
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
