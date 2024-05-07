import * as Styled from "./3DAnimation.styled";

import { OrbitControls } from "@react-three/drei";
import Sphere from "./Sphere";

export default function Animation({ color, opacity, hideInterface }) {
  return (
    <Styled.Container $hideInterface={hideInterface}>
      <Styled.CustomCanvas shadows camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <Sphere color={color} opacity={opacity} />
        <OrbitControls />
      </Styled.CustomCanvas>
    </Styled.Container>
  );
}
