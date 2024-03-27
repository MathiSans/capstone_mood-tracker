import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

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

export const CustomCanvas = styled(Canvas)`
  background-color: black;
`;
