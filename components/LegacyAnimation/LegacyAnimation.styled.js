import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  filter: opacity(${(props) => props.opacity});

  /* &:after {
    content: "";
    width: 100%;
    height: 100%;
    background-size: 100%;
    mix-blend-mode: overlay;
    position: absolute;
    top: 0;
    left: 0;
  } */
`;

export const circularAnimation = keyframes`
  0% {
    transform: translate(0, 50%);
  }
  25% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(0, -50%);
  }
  75% {
    transform: translate(50%, 0);
  }
  100% {
    transform: translate(0, 50%);
  }
`;

export const BlobsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
`;

export const Blob = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  position: absolute;
  filter: blur(80px);
  background-color: ${(props) =>
    props.color ? props.color : `var(--color-main-alt)`};
  animation: ${circularAnimation} ${(props) => props.duration} linear infinite;
`;
