import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: -1;
  background: black;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  filter: opacity(${(props) => props.opacity});

  &:after {
    content: "";
    width: 100vw;
    height: 100vh;
    background-size: 200px;
    mix-blend-mode: overlay;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const circularAnimation = keyframes`
  0% {
    transform: translate(0, -150px);
  }
  25% {
    transform: translate(150px, 0);
  }
  50% {
    transform: translate(0, 150px);
  }
  75% {
    transform: translate(-150px, 0);
  }
  100% {
    transform: translate(0, -150px);
  }
`;

export const circular2Animation = keyframes`
  0% {
    transform: translate(0, 150px);
  }
  25% {
    transform: translate(-150px, 0);
  }
  50% {
    transform: translate(0, -150px);
  }
  75% {
    transform: translate(150px, 0);
  }
  100% {
    transform: translate(0, 150px);
  }
`;

export const BlobsContainer = styled.div`
  width: 70vh;
  height: 70vh;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Blob = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  position: absolute;
  background-color: none;
  mix-blend-mode: multiply;
  filter: blur(80px);

  &.a {
    background-color: ${(props) => props.color};
    animation: ${circular2Animation} 40s linear infinite;
  }

  &.b {
    background-color: ${(props) => props.color};
    animation: ${circularAnimation} 20s linear infinite;
  }

  &.c {
    background-color: ${(props) => props.color};
    animation: ${circularAnimation} 60s linear infinite;
  }
`;

const fadeInAnimation = keyframes`
from {
  opacity: 0
}
to {
  opacity: 1
}
`;

export const AnimatedText = styled.span`
  animation: ${fadeInAnimation} 2s linear infinite alternate;
`;
