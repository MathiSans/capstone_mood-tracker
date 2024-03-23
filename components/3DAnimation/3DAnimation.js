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
      </Styled.CustomCanvas>
    </Styled.Container>
  );
}
