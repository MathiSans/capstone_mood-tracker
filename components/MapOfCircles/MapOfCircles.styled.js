import styled from "styled-components";

export const Grid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: radial-gradient(
    circle,
    rgba(42, 42, 42, 1) 0%,
    rgba(13, 13, 13, 1) 100%
  );
`;
