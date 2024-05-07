import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

export const Container = styled.div`
  position: absolute;
  z-index: ${(props) => (props.$hideInterface ? "100" : "0")};
  background: var(--color-main);
  width: 100%;
  height: 100%;
`;

export const CustomCanvas = styled(Canvas)`
  background-color: var(--color-main);
`;
