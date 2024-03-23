import * as Styled from "./3DAnimation.styled";
import * as THREE from "three";

import { OrbitControls, Center } from "@react-three/drei";
import Sphere from "./Sphere";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

export default function Animation({ color, opacity }) {
  return (
    <Styled.Container>
      <Styled.CustomCanvas shadows camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <Sphere color={color} opacity={opacity} />
        <OrbitControls />
        {/* <EffectComposer>
          <Bloom
            intensity={0.1}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
            height={300}
          />
        </EffectComposer> */}
      </Styled.CustomCanvas>
    </Styled.Container>
  );
}
