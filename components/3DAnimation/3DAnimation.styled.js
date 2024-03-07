import styled, { keyframes } from "styled-components";

export const ThreeAnimation = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  position: absolute;
  z-index: -1;
  background: black;
  width: 100%;
  height: 100%;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
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
  width: 70%;
  height: 70%;
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
  mix-blend-mode: multiply;
  filter: blur(80px);
  background-color: ${(props) => props.color};
  animation: ${circular2Animation} ${(props) => props.duration} linear infinite;
`;
